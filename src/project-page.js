import { hideElements, revealElements, removeElements, loadTasksByDate, loadProjects, loadSections, openTask } from "./dom";
import PlusIcon from "./images/plus.svg";
import TaskManager from "./tasks";

const init = function(projectName) {
    const renderProject = function(projectName) {
        const todayContent = document.querySelector("#today-content");
        todayContent.innerHTML = "";
        const projectContent = document.querySelector("#project-content");
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

    renderProject(projectName);

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
                const taskInfoModal = document.querySelector(`[data-section-name="${sectionName}"][class~="task-info-modal"]`);
                revealElements(taskInfoModal);
            }));
        };

        const enableCancelAddTask = function() {
            Array.from(document.querySelectorAll(".cancel-add-task")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = e.target.getAttribute("data-section-name");
                const taskInfoModal = document.querySelector(`[data-section-name="${sectionName}"][class~="task-info-modal"]`);
                removeElements(taskInfoModal);
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };

        const enableConfirmAddTask = function() {
            Array.from(document.querySelectorAll(".confirm-add-task")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = e.target.getAttribute("data-section-name");
                const currentModal = document.querySelector(`[data-section-name="${sectionName}"][class~="task-info-modal"]`);
                const taskName = document.querySelector(`[data-section-name="${sectionName}"][class~="task-name"]`);
                const description = document.querySelector(`[data-section-name="${sectionName}"][class~="description"]`);
                const priority = document.querySelector(`[data-section-name="${sectionName}"][class~="priority"]`);
                const dueDate = document.querySelector(`[data-section-name="${sectionName}"][class~="due-date"]`);
                const newTask = TaskManager.createTask(taskName.value, description.value, dueDate.value, priority.value, "not done");

                TaskManager.addTask(newTask, projectName, sectionName);
                reloadFlow();
                removeElements(currentModal);
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
                const selectedOption = Array.from(selection.children)[selection.selectedIndex];
                const newProject = selectedOption.getAttribute("data-project-name");
                const newSection = selectedOption.getAttribute("data-section-name");
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
            dueDate.value = "";
    };
};

export default init;