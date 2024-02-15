import pubsub from "./pubsub";
import TaskManager from "./tasks";

const hideElements = function(container) {
    container.classList.add("hidden");
}

const revealElements = function(container) {
    container.classList.remove("hidden");
}

const loadTasks = function(container, filter) {
    container.innerHTML = "";
    console.log("tests");
    TaskManager.filterTaskByDate(filter).forEach((task) => {
        container.innerHTML += `
            <div class="task">
                <p>${task.title}</p>
                <p>${task.description}</p>
                <p>${task.priority}</p>
            </div>
        `;
    });
};

export { hideElements, revealElements, loadTasks };