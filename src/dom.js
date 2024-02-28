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
                <button class="${task.id} task">
                    <p class="${task.id}">${task.title}</p>
                    <p class="${task.id}">${task.priority}</p>
                    <p>${TaskManager.getTaskProjectAndSection(task).projectName}&middot${TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button class="${task.id} delete-task">Delete</button>
            </div>
        `;
    });
};

const loadTasksBySection = function(container, projectName, sectionName) {
    container.innerHTML = "";
    TaskManager.filterTaskBySection(projectName, sectionName).forEach((task) => {
        container.innerHTML += `
            <div>
                <button class="${task.id} task">
                    <p class="${task.id}">${task.title}</p>
                    <p class="${task.id}">${task.priority}</p>
                </button>
                <button class="${task.id} delete-task">Delete</button>
            </div>
        `
    });
};

const loadProjectsToSidebar = function(container) {
    container.innerHTML = "";
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <div class="sidebar-project">
                <button class="sidebar-project-name">${TaskManager.allTasks[i].projectName}</button>
                <button class="delete-project">Delete</button>
            </div>
        `;
    };
};

const loadProjectsToDropdown = function(task) {
    const select = document.querySelectorAll(".dropdown-projects");
    const container = Array.from(select).filter(element => (Array.from(element.classList)[0] == task.id))[0]
    container.innerHTML = `
        <option class="dropdown-project-name" value="projectless">None</option>
    `;
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <option class="dropdown-project-name" value="${TaskManager.allTasks[i].projectName} sectionless">${TaskManager.allTasks[i].projectName}</option>
        `
        for (let j=0; j<TaskManager.allTasks[i].sections.length; j++) {
            container.innerHTML += `
                <option class="dropdown-section-name" value="${TaskManager.allTasks[i].projectName} ${TaskManager.allTasks[i].sections[j].sectionName}">${TaskManager.allTasks[i].sections[j].sectionName}</option>
            `
        };
    };

    const options = document.querySelectorAll(".dropdown-project-name, .dropdown-section-name");
    Array.from(options).forEach(option => {
        const [projectName, sectionName] = option.getAttribute("value").split(/ (.*)/);
        if ((projectName === TaskManager.getTaskProjectAndSection(task).projectName) && (sectionName === TaskManager.getTaskProjectAndSection(task).sectionName)) {
            option.setAttribute("selected", true);
        };
    });
};

const loadSections = function(container, project) {
    let sections = TaskManager.getProject(project).sections;
    container.innerHTML = "";
    for (let i=1; i<sections.length; i++) {
        container.innerHTML += `
            <div class="section">
                <p>${sections[i].sectionName}</p>
                <button class="${sections[i].sectionName.replace(/ /g, "-")} add-task-button">
                    <img class="${sections[i].sectionName.replace(/ /g, "-")}" src=${PlusIcon} alt="Plus">
                </button>
                <div id="${sections[i].sectionName.replace(/ /g, "-")}-tasks"></div>
                <div class="${sections[i].sectionName.replace(/ /g, "-")} task-info-modal removed">
                    <form>
                        <input class="${sections[i].sectionName.replace(/ /g, "-")} task-name" type="text" placeholder="Task name" />
                        <input class="${sections[i].sectionName.replace(/ /g, "-")} description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input class="${sections[i].sectionName.replace(/ /g, "-")} priority" type="number" min="1" max="5" />
                        <input class="${sections[i].sectionName.replace(/ /g, "-")} due-date" type="text" placeholder="Due Date" />
                        <button class="${sections[i].sectionName.replace(/ /g, "-")} cancel-add-task">Cancel</button>
                        <button class="${sections[i].sectionName.replace(/ /g, "-")} confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
        `
        const tasks = document.querySelector(`#${sections[i].sectionName.replace(/ /g, "-")}-tasks`);
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
            <select class="${task.id} dropdown-projects">
            </select>
        </div>
        <button id="close-task">Close</button>
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