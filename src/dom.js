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
            <div class="task">
                <p>${task.title}</p>
                <p>${task.description}</p>
                <p>${task.priority}</p>
                <button class="delete-today" id=delete-${task.id}>Delete</button>
            </div>
        `;
    });
};

const loadTasksBySection = function(container, projectName, sectionName) {
    container.innerHTML = "";
    TaskManager.filterTaskBySection(projectName, sectionName).forEach((task) => {
        container.innerHTML += `
            <div class="task">
                <p>${task.title}</p>
                <p>${task.priority}</p>
            </div>
        `
    });
};

const loadProjects = function(container) {
    container.innerHTML = "";
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <div class="project">
                <button class="project-name">${TaskManager.allTasks[i].projectName}</button>
                <button class="delete-project">Delete</button>
            </div>
        `;
    };
};

const loadSections = function(container, project) {
    let sections = TaskManager.getProject(project).sections;
    container.innerHTML = "";
    for (let i=1; i<sections.length; i++) {
        container.innerHTML += `
            <div class="section">
                <p>${sections[i].sectionName}</p>
                <button class="${sections[i].sectionName} add-task-button">
                    <img class="${sections[i].sectionName}" src=${PlusIcon} alt="Plus">
                </button>
                <div id="${sections[i].sectionName}-tasks"></div>
                <div class="${sections[i].sectionName} task-info-modal removed">
                    <form>
                        <input class="${sections[i].sectionName} task-name" type="text" placeholder="Task name" />
                        <input class="${sections[i].sectionName} description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input class="${sections[i].sectionName} priority" type="number" min="1" max="5" />
                        <input class="${sections[i].sectionName} due-date" type="text" placeholder="Due Date" />
                        <button class="${sections[i].sectionName} cancel-add-task">Cancel</button>
                        <button class="${sections[i].sectionName} confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
        `
        const tasks = document.querySelector(`#${sections[i].sectionName}-tasks`);
        loadTasksBySection(tasks, project, sections[i].sectionName);
    };
};

export { hideElements, revealElements, removeElements, loadTasksByDate, loadProjects, loadSections };