import {loadCurrentMonth, loadPastMonth, loadFutureMonth, revealElements, removeElements, openTask } from "./dom";
import { isBefore, isAfter, isToday, isTomorrow, isThisMonth, getMonth, add, sub, format, endOfWeek } from "date-fns";
import TaskManager from "./tasks";

const init = function() {
    const today = format(new Date(), "yyyy-MM-dd");
    const taskDialog = document.querySelector("#task-dialog");

    loadCurrentMonth(today);

    const addEvents = function() {
        const enableSwitchMonths = function() {
            const previousMonthButton = document.querySelector("#previous-month");
            const nextMonthButton = document.querySelector("#next-month");

            previousMonthButton.addEventListener("click", () => {
                const pageMonth = document.querySelector("#month-page").getAttribute("data-month");
                if (isThisMonth(sub(pageMonth, {months: 1}))) {
                    loadCurrentMonth(today)
                } else if (isBefore(pageMonth, add(today, {months: 1}))) {
                    loadPastMonth(today, sub(pageMonth, {months: 1}));
                } else {
                    loadFutureMonth(today, sub(pageMonth, {months: 1}));
                }

                enableSwitchMonths();
                enableDeleteTask();
                enableAddTask();
                enableCancelAddTask();
                enableConfirmAddTask();
                makeTasksClickable();
            });

            nextMonthButton.addEventListener("click", () => {
                const pageMonth = document.querySelector("#month-page").getAttribute("data-month");
                if (isThisMonth(add(pageMonth, {months: 1}))) {
                    loadCurrentMonth(today);
                } else if (isBefore(pageMonth, sub(today, {months: 1}))) {
                    loadPastMonth(today, add(pageMonth, {months: 1}));
                } else {
                    loadFutureMonth(today, add(pageMonth, {months: 1}));
                };

                enableSwitchMonths();
                enableDeleteTask();
                enableAddTask();
                enableCancelAddTask();
                enableConfirmAddTask();
                makeTasksClickable();
            });
        };

        const enableDeleteTask = function() {
            Array.from(document.querySelectorAll(".delete-task")).forEach(button => button.addEventListener("click", (e) => {
                const taskid = e.target.getAttribute("data-task-id");
                TaskManager.deleteTask(TaskManager.getTaskById(taskid));
                reloadFlow();
                e.preventDefault();
            }));
        };

        const enableAddTask = function() {
            Array.from(document.querySelectorAll(".add-task-button")).forEach(button => button.addEventListener("click", (e) => {
                revealElements(document.querySelector(`[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="task-info-modal"]`));
                removeElements(document.querySelector(`[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="add-task-button"]`));
                e.preventDefault();
            }))
        };

        const enableCancelAddTask = function() {
            Array.from(document.querySelectorAll(".cancel-add-task")).forEach(button => button.addEventListener("click", (e) => {
                revealElements(document.querySelector(`[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="add-task-button"]`));
                removeElements(document.querySelector(`[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="task-info-modal"]`));
                resetModal(e.target.getAttribute("data-due-date"));
                e.preventDefault();
            }))
        };

        const enableConfirmAddTask = function() {
            Array.from(document.querySelectorAll(".confirm-add-task")).forEach(button => button.addEventListener("click", (e) => {
                const dataDueDate = e.target.getAttribute("data-due-date");
                const taskName = document.querySelector(`[data-due-date="${dataDueDate}"][class~="task-name"]`);
                const description = document.querySelector(`[data-due-date="${dataDueDate}"][class~="description"]`);
                const priority = document.querySelector(`[data-due-date="${dataDueDate}"][class~="priority"]`);

                if (!((dataDueDate === "this-week") || (dataDueDate === "this-month"))) {
                    const task = TaskManager.createTask(taskName.value, description.value, dataDueDate, priority.value, "not done");
                    TaskManager.addTask(task, "projectless", "sectionless");
                } else {
                    const dueDate = document.querySelector(`[data-due-date="${dataDueDate}"][class~="due-date"]`);
                    const task = TaskManager.createTask(taskName.value, description.value, dueDate.value, priority.value, "not done");
                    TaskManager.addTask(task, "projectless", "sectionless");
                };

                reloadFlow();
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
                const newDueDate = document.querySelector("#edit-task-due-date").value
                const newPriority = document.querySelector("#edit-task-priority").value;
                const selectedOption = Array.from(selection.children)[selection.selectedIndex];
                const newProject = selectedOption.getAttribute("data-project-name");
                const newSection = selectedOption.getAttribute("data-section-name");

                TaskManager.editTask(task, newTitle, newDescription, newDueDate, newPriority);
                TaskManager.moveTask(task, newProject, newSection);
                reloadFlow();
                taskDialog.close();
                e.preventDefault();
            });
        };

        const reloadFlow = function() {
            const pageMonth = document.querySelector("#month-page").getAttribute("data-month");
            (isThisMonth(pageMonth)) ? loadCurrentMonth(today) : loadFutureMonth(today, pageMonth);
            enableSwitchMonths();
            enableDeleteTask();
            enableAddTask();
            enableCancelAddTask();
            enableConfirmAddTask();
            makeTasksClickable();
        };

        reloadFlow();
    }

    addEvents();

    const resetModal = function(dataDueDate) {
        const taskName = document.querySelector(`[data-due-date="${dataDueDate}"][class~="task-name"]`);
        const description = document.querySelector(`[data-due-date="${dataDueDate}"][class~="description"]`);
        const priority = document.querySelector(`[data-due-date="${dataDueDate}"][class~="priority"]`);
        
        taskName.value = "";
        description.value = "";
        priority.value = "";

        if ((dataDueDate === "this-week") || (dataDueDate === "this-month")) {
            const dueDate = document.querySelector(`[data-due-date="${dataDueDate}"][class~="due-date"]`);
            dueDate.value = "";
        };
    };
};

export default init;