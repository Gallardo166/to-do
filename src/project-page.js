import { hideElements, revealElements, removeElements, loadTasksByDate, loadProjects, loadSections } from "./dom";
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
            console.log(TaskManager.allTasks);
            loadSections(projectSections, projectName);
            enableAddTask();
            enableCancelAddTask();
            enableConfirmAddTask();
            removeElements(sectionInfoModal);
            revealElements(addSectionContainer);
            resetSectionModal();
            e.preventDefault();
        });

        const enableAddTask = function() {
            const addTaskButtons = document.querySelectorAll(".add-task-button");
            Array.from(addTaskButtons).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                console.log(sectionName);
                Array.from(taskInfoModals).forEach(element => removeElements(element));
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                revealElements(currentModal);
            }));
        };

        const enableCancelAddTask = function() {
            const cancelAddTaskButtons = document.querySelectorAll(".cancel-add-task");
            Array.from(cancelAddTaskButtons).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                removeElements(currentModal);
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };

        const enableConfirmAddTask = function() {
            const confirmAddTaskButtons = document.querySelectorAll(".confirm-add-task");
            Array.from(confirmAddTaskButtons).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                const taskName = document.querySelector(`.${sectionName}.task-name`);
                const description = document.querySelector(`.${sectionName}.description`);
                const priority = document.querySelector(`.${sectionName}.priority`);
                const dueDate = document.querySelector(`.${sectionName}.due-date`);
                const newTask = TaskManager.createTask(taskName.value, description.value, dueDate.value, priority.value, "not done");
                TaskManager.addTask(newTask, projectName, sectionName);
                loadSections(projectSections, projectName);
                enableAddTask();
                enableCancelAddTask();
                enableConfirmAddTask();
                removeElements(currentModal);
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };
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