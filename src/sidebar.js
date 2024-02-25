import { hideElements, revealElements, removeElements, loadTasks, loadProjects } from "./dom";
import TaskManager from "./tasks";
import initProjectPage from "./project-page";
import initTodayPage from "./today-page";

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
        TaskManager.createProject(projectName.value);
        loadProjects(projectList);
        enableDelete();
        makeProjectsClickable();
        initProjectPage(projectName.value);
        projectName.value = "";
        e.preventDefault();
    });

    const enableDelete = function() {
        const deleteProjectButtons = document.querySelectorAll(".delete-project");

        Array.from(deleteProjectButtons).forEach(button => button.addEventListener("click", (e) => {
            TaskManager.deleteProject(e.target.previousElementSibling.textContent);
            initTodayPage();
            loadProjects(projectList);
            enableDelete();
            makeProjectsClickable();
            e.preventDefault();
        }));
    };

    const makeProjectsClickable = function() {
        const projects = document.querySelectorAll(".project-name");
        Array.from(projects).forEach(element => element.addEventListener("click", (e) => {
            initProjectPage(e.target.textContent);
        }));
    };
};

const init = function() {
    addEvents();
}

export default init;