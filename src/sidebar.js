import { hideElements, revealElements, removeElements, loadTasks, loadProjects } from "./dom";
import TaskManager from "./tasks";

const closeSidebar = function() {
    const sidebar = document.querySelector("#sidebar");
    removeElements(sidebar);
}

const openSidebar = function() {
    const sidebar = document.querySelector("#sidebar");
    revealElements(sidebar);
}

const addEvents = function() {
    const closeSidebarButton = document.querySelector("#sidebar-toggle-close");
    const openSidebarButton = document.querySelector("#sidebar-toggle-open");
    const addProjectButton = document.querySelector("#add-project");
    const cancelAddProjectButton = document.querySelector("#cancel-add-project");
    const addProjectModal = document.querySelector("#add-project-modal");
    const projectList = document.querySelector("#projects-list")
    const confirmAddProjectButton = document.querySelector("#confirm-add-project");
    const projectName = document.querySelector("#project-name");

    closeSidebarButton.addEventListener("click", () => {
        closeSidebar();
        revealElements(openSidebarButton);
    });

    openSidebarButton.addEventListener("click", () => {
        openSidebar();
        hideElements(openSidebarButton);
    });

    addProjectButton.addEventListener("click", () => {
        revealElements(addProjectModal);
    });

    cancelAddProjectButton.addEventListener("click", (e) => {
        removeElements(addProjectModal);
        projectName.value = "";
        e.preventDefault();
    });

    confirmAddProjectButton.addEventListener("click", (e) => {
        removeElements(addProjectModal);
        projectName.value = "";
        TaskManager.createProject(projectName.value);
        loadProjects(projectList);
        enableDelete();
        e.preventDefault();
    });

    const enableDelete = function() {
        const deleteProjectButtons = document.querySelectorAll(".delete-project");

        Array.from(deleteProjectButtons).forEach(button => button.addEventListener("click", (e) => {
            console.log("test");
            TaskManager.deleteProject(e.target.previousElementSibling.value);
            loadProjects(projectList);
            enableDelete();
            e.preventDefault();
        }))
    };
}

const init = function() {
    addEvents();
}

export default init;