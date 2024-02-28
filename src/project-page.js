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

    const addEvents = function() {
        const enableAddTask = function() {
            Array.from(document.querySelectorAll(".add-task-button")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                console.log(sectionName);
                Array.from(taskInfoModals).forEach(element => removeElements(element));
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                revealElements(currentModal);
            }));
        };

        const enableCancelAddTask = function() {
            Array.from(document.querySelectorAll(".cancel-add-task")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                removeElements(currentModal);
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };

        const enableConfirmAddTask = function() {
            Array.from(document.querySelectorAll(".confirm-add-task")).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                const taskName = document.querySelector(`.${sectionName}.task-name`);
                const description = document.querySelector(`.${sectionName}.description`);
                const priority = document.querySelector(`.${sectionName}.priority`);
                const dueDate = document.querySelector(`.${sectionName}.due-date`);
                const newTask = TaskManager.createTask(taskName.value, description.value, dueDate.value, priority.value, "not done");
                TaskManager.addTask(newTask, projectName, sectionName.replace(/-/g, " "));
                console.log(TaskManager.allTasks);
                loadSections(projectSections, projectName);
                makeTasksClickable();
                enableAddTask();
                enableCancelAddTask();
                enableConfirmAddTask();
                enableDeleteTask();
                removeElements(currentModal);
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };

        const enableDeleteTask = function() {
            Array.from(document.querySelectorAll(".delete-task")).forEach((button) => button.addEventListener("click", (e) => {
                let taskid = Array.from(e.target.classList)[0];
                TaskManager.deleteTask(TaskManager.getTaskById(taskid));
                loadSections(projectSections, projectName);
                makeTasksClickable();
                enableAddTask();
                enableCancelAddTask();
                enableConfirmAddTask();
                enableDeleteTask();
                e.preventDefault();
            }));
        };

        const makeTasksClickable = function() {
            Array.from(document.querySelectorAll(".task")).forEach(task => task.addEventListener("click", (e) => {
                openTask(TaskManager.getTaskById(Array.from(e.target.classList)[0]));
                e.preventDefault();
            }))
        };

        loadSections(projectSections, projectName);
        makeTasksClickable();
        enableAddTask();
        enableCancelAddTask();
        enableConfirmAddTask();
        enableDeleteTask();

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
            loadSections(projectSections, projectName);
            makeTasksClickable();
            enableAddTask();
            enableCancelAddTask();
            enableConfirmAddTask();
            enableDeleteTask();
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
            const taskName = document.querySelector(`.${sectionName}.task-name`);
            const description = document.querySelector(`.${sectionName}.description`);
            const priority = document.querySelector(`.${sectionName}.priority`);
            const dueDate = document.querySelector(`.${sectionName}.due-date`);

            taskName.value = "";
            description.value = "";
            priority.value = "";
            dueDate.value = "";
    };
};

export default init;