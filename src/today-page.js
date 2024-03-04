import PlusIcon from "./images/plus.svg";
import TaskManager from "./tasks";
import { hideElements, revealElements, removeElements, loadTasksByDate, openTask } from "./dom";
import pubsub from "./pubsub";
import { format, formatDistance, subDays, isToday } from "date-fns";

const init = function() {
    const today = format(new Date(), "yyyy-MM-dd");

    const renderTodayPageEmpty = function() {
        const todayContent = document.querySelector("#today-content");
        const upcomingContent = document.querySelector("#upcoming-content");
        const projectContent = document.querySelector("#project-content");

        upcomingContent.innerHTML = "";
        projectContent.innerHTML = "";
        todayContent.innerHTML = `
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
    const taskDialog = document.querySelector("#task-dialog");

    const addEvents = function() {
        const enableDelete = function() {
            Array.from(document.querySelectorAll(".delete-task")).forEach(button => button.addEventListener("click", (e) => {
                const taskid = e.target.getAttribute("data-task-id");
                TaskManager.deleteTask(TaskManager.getTaskById(taskid));
                loadTasksByDate(todayTaskContainer, isToday);
                makeTasksClickable();
                enableDelete();
                if (TaskManager.filterTaskByDate(today).length === 0) {
                    revealElements(noTask);
                };
                e.preventDefault();
            }));
        };

        const makeTasksClickable = function() {
            Array.from(document.querySelectorAll(".task")).forEach(task => task.addEventListener("click", (e) => {
                openTask(TaskManager.getTaskById(e.target.getAttribute("data-task-id")));
                enableConfirmEditTask(TaskManager.getTaskById(e.target.getAttribute("data-task-id")));
                e.preventDefault();
            }));
        };

        const enableConfirmEditTask = function(task) {
            const confirmEditTaskButton = document.querySelector("#confirm-edit-task");
            const selection = document.querySelector("#dropdown-projects");

            confirmEditTaskButton.addEventListener("click", (e) => {
                const newTitle = document.querySelector("#edit-task-title").value;
                const newDescription = document.querySelector("#edit-task-description").value;
                const newDueDate = document.querySelector("#edit-task-due-date").value;
                const newPriority = document.querySelector("#edit-task-priority").value;
                const selectedOption = Array.from(selection.children)[selection.selectedIndex];
                const newProject = selectedOption.getAttribute("data-project-name");
                const newSection = selectedOption.getAttribute("data-section-name");

                TaskManager.editTask(task, newTitle, newDescription, newDueDate, newPriority);
                TaskManager.moveTask(task, newProject, newSection);
                loadTasksByDate(todayTaskContainer, isToday);
                makeTasksClickable();
                enableDelete();
                if (TaskManager.filterTaskByDate(isToday).length === 0) {
                    revealElements(noTask);
                };
                taskDialog.close();
                e.preventDefault();
            });
        };

        if (TaskManager.filterTaskByDate(isToday).length > 0) {
            removeElements(noTask);
            loadTasksByDate(todayTaskContainer, isToday);
            makeTasksClickable();
            enableDelete();
        };

        addTaskButton.addEventListener("click", () => {
            removeElements(addTaskContainer);
            removeElements(noTask);
            revealElements(infoModal);
        });

        confirmButton.addEventListener("click", (e) => {
            let taskInfo = getTaskInfo();
            let task = TaskManager.createTask(taskInfo.title, taskInfo.description, taskInfo.dueDate, taskInfo.priority, taskInfo.status);
            TaskManager.addTask(task, "projectless", "sectionless");

            loadTasksByDate(todayTaskContainer, isToday);
            makeTasksClickable();
            enableDelete();
            revealElements(addTaskContainer);
            removeElements(infoModal);
            resetModal();
            e.preventDefault();
        });

        cancelButton.addEventListener("click", (e) => {
            revealElements(addTaskContainer);
            resetModal();
            removeElements(infoModal);
            if (TaskManager.filterTaskByDate(isToday).length === 0) {
                revealElements(noTask);
            };
            e.preventDefault();
        });
    };

    addEvents();

    let taskName = document.querySelector("#task-name");
    let description = document.querySelector("#description");
    let priority = document.querySelector("#priority");

    const getTaskInfo = function() {
        return { title: taskName.value, description: description.value, dueDate: today, priority: priority.value, status: "not done" };
    };

    const resetModal = function() {
        taskName.value = "";
        description.value = "";
        priority.value = "";
    };
};

export default init;