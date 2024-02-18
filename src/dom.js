import pubsub from "./pubsub";
import TaskManager from "./tasks";

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

const loadTasks = function(container, filter) {
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

const loadProjects = function(container) {
    container.innerHTML = "";
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <div class="project">
                <p>${TaskManager.allTasks[i].projectName}</p>
                <button class="delete-project">Delete</button>
            </div>
        `;
    };
};

export { hideElements, revealElements, removeElements, loadTasks, loadProjects };