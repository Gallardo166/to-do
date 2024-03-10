import "./sidebar-style.css";
import { hideElements, revealElements, removeElements, loadTasks, loadProjectsToSidebar, requiredFieldAlert } from "./dom";
import TaskManager from "./tasks";
import initProjectPage from "./project-page";
import initTodayPage from "./today-page";
import initUpcomingPage from "./upcoming-page";
import { format, add } from "date-fns";

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
    const todayButton = document.querySelector("#today");
    const upcomingButton = document.querySelector("#upcoming");

    closeSidebarButton.addEventListener("click", () => {
        closeSidebar();
        revealElements(openSidebarButton);
    });

    openSidebarButton.addEventListener("click", () => {
        openSidebar();
        hideElements(openSidebarButton);
    });

    todayButton.addEventListener("click", (e) => {
        initTodayPage();
        e.preventDefault();
    });

    upcomingButton.addEventListener("click", (e) => {
        initUpcomingPage();
        e.preventDefault();
    });

    addProjectButton.addEventListener("click", () => {
        revealElements(addProjectModal);
        projectName.focus();
        confirmAddProjectButton.setAttribute("disabled", "");
    });

    cancelAddProjectButton.addEventListener("click", (e) => {
        removeElements(addProjectModal);
        projectName.value = "";
        e.preventDefault();
    });

    confirmAddProjectButton.addEventListener("click", (e) => {
        removeElements(addProjectModal);
        TaskManager.createProject(projectName.value);
        loadProjectsToSidebar(projectList);
        enableDelete();
        enableClickOut();
        makeProjectsClickable();
        initProjectPage(projectName.value);
        projectName.value = "";
        e.preventDefault();
    });

    projectName.addEventListener("input", (e) => {
        if (e.target.value !== "" && !TaskManager.checkRepeatedProjectName(e.target.value)) {
            confirmAddProjectButton.removeAttribute("disabled");
        } else confirmAddProjectButton.setAttribute("disabled", "");
    });

    const enableDelete = function() {
        const deleteProjectButtons = document.querySelectorAll(".delete-project");

        Array.from(deleteProjectButtons).forEach(button => button.addEventListener("click", (e) => {
            TaskManager.deleteProject(e.target.getAttribute("data-project-name"));
            initTodayPage();
            loadProjectsToSidebar(projectList);
            enableDelete();
            enableClickOut();
            makeProjectsClickable();
            e.preventDefault();
        }));
    };

    const enableClickOut = function() {
        document.addEventListener("click", (e) => {
            if (e.target.getAttribute("data-open") !== "add project modal") {
                removeElements(addProjectModal);
                projectName.value = "";
            };
        });
    };

    const makeProjectsClickable = function() {
        const projects = document.querySelectorAll(".sidebar-project-name");
        Array.from(projects).forEach(element => element.addEventListener("click", (e) => {
            initProjectPage(e.target.getAttribute("data-project-name"));
        }));
    };

    loadProjectsToSidebar(projectList);
    enableDelete();
    enableClickOut();
    makeProjectsClickable();
};

const init = function() {
    const confirmAddProjectButton = document.querySelector("#confirm-add-project")
    const date = document.querySelector("#date");
    date.textContent = format(new Date(), "dd");

    addEvents();
    requiredFieldAlert(confirmAddProjectButton, "#sidebar-message", "Project names can't be empty or same")
};

export default init;