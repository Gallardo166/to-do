import { hideElements, revealElements, removeElements, loadTasksByDate, loadProjects, loadSections, openTask } from "./dom";
import PlusIcon from "./images/plus.svg";
import TaskManager from "./tasks";
import { format } from "date-fns";

const init = function(projectName) {
    const renderProjectPage = function(projectName) {
        const todayContent = document.querySelector("#today-content");
        const upcomingContent = document.querySelector("#upcoming-content");
        const projectContent = document.querySelector("#project-content");

        todayContent.innerHTML = "";
        upcomingContent.innerHTML = "";
        projectContent.innerHTML = `
            <h1>${projectName}</h1>
            <div id="sectionless"></div>
            <div id="project-sections"></div>
            <div id="add-section">
                <button id="add-section-button">
                    <img id="add-section-button-img" src="${PlusIcon}" alt="Plus">
                </button>
            </div>
            <div id="section-info-modal" class="removed">
                <form>
                    <input id="section-name" type="text" placeholder="Section Name" />
                    <button id="cancel-add-section">Cancel</button>
                    <button id="confirm-add-section">OK</button>
                </form>
            </div>
        `
    };

    renderProjectPage(projectName);

    const addSectionButton = document.querySelector("#add-section-button");
    const sectionInfoModal = document.querySelector("#section-info-modal");
    const addSectionContainer = document.querySelector("#add-section");
    const cancelAddSectionButton = document.querySelector("#cancel-add-section");
    const confirmAddSectionButton = document.querySelector("#confirm-add-section");
    const sectionName = document.querySelector("#section-name");
    const projectSections = document.querySelector("#project-sections");
    const taskInfoModals = document.querySelectorAll(".task-info-modal");
    const taskDialog = document.querySelector("#task-dialog");

    const addEvents = function() {
        const enableAddTask = function() {
            Array.from(document.querySelectorAll(".add-task-button")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = e.target.getAttribute("data-section-name");
                Array.from(taskInfoModals).forEach(element => removeElements(element));
                removeElements(document.querySelector(`[data-section-name="${sectionName}"][class~="add-task-button"]`));
                revealElements(document.querySelector(`[data-section-name="${sectionName}"][class~="task-info-modal"]`));
            }));
        };

        const enableCancelAddTask = function() {
            Array.from(document.querySelectorAll(".cancel-add-task")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = e.target.getAttribute("data-section-name");
                removeElements(document.querySelector(`[data-section-name="${sectionName}"][class~="task-info-modal"]`));
                revealElements(document.querySelector(`[data-section-name="${sectionName}"][class~="add-task-button"]`));
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };

        const enableConfirmAddTask = function() {
            Array.from(document.querySelectorAll(".confirm-add-task")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = e.target.getAttribute("data-section-name");
                const taskName = document.querySelector(`[data-section-name="${sectionName}"][class~="task-name"]`);
                const description = document.querySelector(`[data-section-name="${sectionName}"][class~="description"]`);
                const priority = document.querySelector(`[data-section-name="${sectionName}"][class~="priority"]`);
                const dueDate = document.querySelector(`[data-section-name="${sectionName}"][class~="due-date"]`);

                const newTask = TaskManager.createTask(taskName.value, description.value, dueDate.value, priority.value, "not done");

                TaskManager.addTask(newTask, projectName, sectionName);
                reloadFlow();
                removeElements(document.querySelector(`[data-section-name="${sectionName}"][class~="task-info-modal"]`));
                revealElements(document.querySelector(`[data-section-name="${sectionName}"][class~="add-task-button"]`));
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };

        const enableDeleteTask = function() {
            Array.from(document.querySelectorAll(".delete-task")).forEach((button) => button.addEventListener("click", (e) => {
                TaskManager.deleteTask(TaskManager.getTaskById(e.target.getAttribute("data-task-id")));
                reloadFlow();
                e.preventDefault();
            }));
        };

        const makeTasksClickable = function() {
            Array.from(document.querySelectorAll(".task")).forEach(task => task.addEventListener("click", (e) => {
                openTask(TaskManager.getTaskById(e.target.getAttribute("data-task-id")));
                enableConfirmEditTask(TaskManager.getTaskById(e.target.getAttribute("data-task-id")));
                e.preventDefault();
            }))
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
            loadSections(projectSections, projectName);
            makeTasksClickable();
            enableAddTask();
            enableCancelAddTask();
            enableConfirmAddTask();
            enableDeleteTask();
        }

        reloadFlow();

        addSectionButton.addEventListener("click", () => {
            removeElements(addSectionContainer);
            revealElements(sectionInfoModal);
        });

        cancelAddSectionButton.addEventListener("click", (e) => {
            removeElements(sectionInfoModal);
            revealElements(addSectionContainer);
            resetSectionModal();
            e.preventDefault();
        });

        confirmAddSectionButton.addEventListener("click", (e) => {
            TaskManager.createSection(projectName, sectionName.value);
            reloadFlow();
            removeElements(sectionInfoModal);
            revealElements(addSectionContainer);
            resetSectionModal();
            e.preventDefault();
        });
    };

    addEvents();

    const resetSectionModal = function() {
        sectionName.value = "";
    };

    const resetTaskModal = function(sectionName) {
            const taskName = document.querySelector(`[data-section-name="${sectionName}"][class~="task-name"]`);
            const description = document.querySelector(`[data-section-name="${sectionName}"][class~="description"]`);
            const priority = document.querySelector(`[data-section-name="${sectionName}"][class~="priority"]`);
            const dueDate = document.querySelector(`[data-section-name="${sectionName}"][class~="due-date"]`);

            taskName.value = "";
            description.value = "";
            priority.value = "";
            dueDate.value = format(new Date(), "yyyy-MM-dd");
    };
};

export default init;