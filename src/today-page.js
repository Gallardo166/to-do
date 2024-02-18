import PlusIcon from "./images/plus.svg";
import TaskManager from "./tasks";
import { hideElements, revealElements, removeElements, loadTasks } from "./dom";
import pubsub from "./pubsub";

const init = function() {
    const renderTodayPageEmpty = function() {
        const todayContent = document.querySelector("#today-content");
        todayContent.innerHTML += `
            <h1>Today</h1>
            <div id="today-task-container"></div>
            <div id="add-task-container">
                <button id="add-task-button">
                    <img id="add-task-button-img" src="${PlusIcon}" alt="Plus">
                    <p id="add-task-label">Add task</p>
                </button>
            </div>
            <div id="info-modal" class="removed">
                <form id="task-info-modal">
                    <input id="task-name" type="text" placeholder="Task name" />
                    <input id="description" type="text" placeholder="Description" />
                    <label for="priority">Priority</label>
                    <input id="priority" type="number" min="1" max="5" />
                    <button id="cancel-add-task">Cancel</button>
                    <button id="confirm-add-task">OK</button>
                </form>
            </div>
            <div id="no-task">
                <div id="no-task-image"></div>
                <div id="no-task-text"></div>
                    <p>What's happening today?</p>
                    <p>Click + to add a task.</p>
                </div>
            </div>
        `;
    };

    renderTodayPageEmpty();

    const addTaskButton = document.querySelector("#add-task-button");
    const confirmButton = document.querySelector("#confirm-add-task");
    const cancelButton = document.querySelector("#cancel-add-task");
    const addTaskContainer = document.querySelector("#add-task-container");
    const infoModal = document.querySelector("#info-modal");
    const todayTaskContainer = document.querySelector("#today-task-container");
    const noTask = document.querySelector("#no-task");

    const addEvents = function() {
        addTaskButton.addEventListener("click", () => {
            removeElements(addTaskContainer);
            removeElements(noTask);
            revealElements(infoModal);
        });

        confirmButton.addEventListener("click", (e) => {
            let taskInfo = getTaskInfo();
            let task = TaskManager.createTask(taskInfo.title, taskInfo.description, taskInfo.dueDate, taskInfo.priority, taskInfo.status);
            TaskManager.addTask(task, "projectless", "sectionless");

            loadTasks(todayTaskContainer, "today");
            enableDelete();
            revealElements(addTaskContainer);
            removeElements(infoModal);
            resetModal();
            e.preventDefault();

            console.log(TaskManager.allTasks)
        });

        cancelButton.addEventListener("click", (e) => {
            revealElements(addTaskContainer);
            resetModal();
            removeElements(infoModal);
            if (TaskManager.filterTaskByDate("today").length === 0) {
                revealElements(noTask);
            };
            e.preventDefault();
        });

        const enableDelete = function() {
            Array.from(document.querySelectorAll(".delete-today")).forEach(button => button.addEventListener("click", (e) => {
                let taskid = e.target.id.split("-")[1];
                TaskManager.deleteTask(TaskManager.getTaskById(taskid));

                loadTasks(todayTaskContainer, "today");
                enableDelete();
                if (TaskManager.filterTaskByDate("today").length === 0) {
                    revealElements(noTask);
                };
            }))
        };
    };

    addEvents();

    let taskName = document.querySelector("#task-name");
    let description = document.querySelector("#description");
    let priority = document.querySelector("#priority");

    const getTaskInfo = function() {
        return { title: taskName.value, description: description.value, dueDate: "today", priority: priority.value, status: "not done" };
    };

    const resetModal = function() {
        taskName.value = "";
        description.value = "";
        priority.value = "";
    };
};

export default init;