import pubsub from "./pubsub";
import TaskManager from "./tasks";
import PlusIcon from "./images/plus.svg";

const hideElements = function(container) {
    container.classList.add("hidden");
}

const revealElements = function(container) {
    container.classList.remove("hidden");
    container.classList.remove("removed");
}

const removeElements = function(container) {
    container.classList.add("removed");
}

const loadTasksByDate = function(container, filter) {
    container.innerHTML = "";
    TaskManager.filterTaskByDate(filter).forEach((task) => {
        container.innerHTML += `
            <div>
                <button data-task-id="${task.id}" class="task">
                    <p data-task-id="${task.id}">${task.title}</p>
                    <p data-task-id="${task.id}">${task.priority}</p>
                    <p data-task-id="${task.id}">${(TaskManager.getTaskProjectAndSection(task).projectName === "projectless") ? "No project" : TaskManager.getTaskProjectAndSection(task).projectName}${(TaskManager.getTaskProjectAndSection(task).sectionName === "sectionless") ? "" : " &middot " + TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button data-task-id="${task.id}" class="delete-task">Delete</button>
            </div>
        `;
    });
};

const loadTasksBySection = function(container, projectName, sectionName) {
    container.innerHTML = "";
    TaskManager.filterTaskBySection(projectName, sectionName).forEach((task) => {
        container.innerHTML += `
            <div>
                <button data-task-id="${task.id}" class="task">
                    <p data-task-id="${task.id}">${task.title}</p>
                    <p data-task-id="${task.id}">${task.priority}</p>
                </button>
                <button data-task-id="${task.id} class="delete-task">Delete</button>
            </div>
        `
    });
};

const loadProjectsToSidebar = function(container) {
    container.innerHTML = "";
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <div class="sidebar-project">
                <button data-project-name="${TaskManager.allTasks[i].projectName}" class="sidebar-project-name">${TaskManager.allTasks[i].projectName}</button>
                <button data-project-name="${TaskManager.allTasks[i].projectName}" class="delete-project">Delete</button>
            </div>
        `;
    };
};

const loadProjectsToDropdown = function(task) {
    const select = document.querySelector("#dropdown-projects");
    select.innerHTML = `
        <option data-project-name="projectless" data-section-name="sectionless" class="dropdown-project-name">No projects</option>
    `;
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        select.innerHTML += `
            <option data-project-name="${TaskManager.allTasks[i].projectName}" data-section-name="sectionless" class="dropdown-project-name">${TaskManager.allTasks[i].projectName}</option>
        `
        for (let j=1; j<TaskManager.allTasks[i].sections.length; j++) {
            select.innerHTML += `
                <option data-project-name="${TaskManager.allTasks[i].projectName}" data-section-name="${TaskManager.allTasks[i].sections[j].sectionName}" class="dropdown-section-name">${TaskManager.allTasks[i].sections[j].sectionName}</option>
            `
        };
    };

    const options = document.querySelectorAll(".dropdown-project-name, .dropdown-section-name");
    Array.from(options).forEach(option => {
        if ((option.getAttribute("data-project-name") === TaskManager.getTaskProjectAndSection(task).projectName) && (option.getAttribute("data-section-name") === TaskManager.getTaskProjectAndSection(task).sectionName)) {
            option.setAttribute("selected", true);
        };
    });
};

const loadSections = function(container, project) {
    let sections = TaskManager.getProject(project).sections;
    container.innerHTML = "";
    for (let i=0; i<sections.length; i++) {
        container.innerHTML += `
            <div class="section">
                <p>${sections[i].sectionName}</p>
                <button data-section-name="${sections[i].sectionName}" class="add-task-button">
                    <img data-section-name="${sections[i].sectionName}" src=${PlusIcon} alt="Plus">
                </button>
                <div data-section-name="${sections[i].sectionName}" class="tasks"></div>
                <div data-section-name="${sections[i].sectionName}" class="task-info-modal removed">
                    <form>
                        <input data-section-name="${sections[i].sectionName}" class="task-name" type="text" placeholder="Task name" />
                        <input data-section-name="${sections[i].sectionName}" class="description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input data-section-name="${sections[i].sectionName}" class="priority" type="number" min="1" max="5" />
                        <input data-section-name="${sections[i].sectionName}" class="due-date" type="text" placeholder="Due Date" />
                        <button data-section-name="${sections[i].sectionName}" class="cancel-add-task">Cancel</button>
                        <button data-section-name="${sections[i].sectionName}" class="confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
        `
        const tasks = document.querySelector(`[data-section-name="${sections[i].sectionName}"][class~="tasks"]`);
        loadTasksBySection(tasks, project, sections[i].sectionName);
    };
};

const openTask = function(task) {
    const taskDialog = document.querySelector("#task-dialog");
    taskDialog.innerHTML = `
        <h1>${task.title}</h1>
        <p>${task.description}</p>
        <div id="other-task-info">
            <p>${task.dueDate}</p>
            <p>${task.priority}</p>
            <select data-task-id="${task.id}" id="dropdown-projects">
            </select>
        </div>
        <button id="close-task">Cancel</button>
        <button id="confirm-edit-task">OK</button>
    `;
    
    loadProjectsToDropdown(task);
    taskDialog.showModal();
    enableCloseTask(taskDialog);
};

const enableCloseTask = function(taskDialog) {
    const closeTaskButton = document.querySelector("#close-task");
    closeTaskButton.addEventListener("click", () => {
        taskDialog.close();
    });
};

export { hideElements, revealElements, removeElements, loadTasksByDate, loadProjectsToSidebar, loadSections, openTask };