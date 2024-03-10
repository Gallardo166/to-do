import pubsub from "./pubsub";
import TaskManager from "./tasks";
import PlusIcon from "./images/plus.svg";
import Wrench from "./images/hammer-wrench.svg";
import CloseIcon from "./images/close.svg";
import Bookmark from "./images/bookmark.svg";
import Text from "./images/text.svg";
import Mouse from "./images/mouse.png";
import WalkingMouse from "./images/walkingmouse.png";
import { isBefore, isToday, isTomorrow, isThisWeek, isThisMonth, isSameMonth, endOfWeek, startOfMonth, endOfMonth, format, add } from "date-fns";

const hideElements = function(container) {
    container.classList.add("hidden");
};

const revealElements = function(container) {
    container.classList.remove("hidden");
    container.classList.remove("removed");
};

const removeElements = function(container) {
    container.classList.add("removed");
};

const changeSidebarHighlight = function(highlightedElement) {
    Array.from(document.querySelectorAll(".menu")).forEach(element => element.classList.remove("highlighted"));
    highlightedElement.classList.add("highlighted");
};

const loadTasksByDate = function(container, filter, comparison) {
    container.innerHTML = "";
    TaskManager.filterTaskByDate(filter, comparison).forEach((task) => {
        container.innerHTML += `
            <div data-open="task-dialog" class="task-container" data-task>
                <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                    <div data-task-id="${task.id}" class="checkbox"></div>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                    <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${Bookmark}" />
                    <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-project">${(TaskManager.getTaskProjectAndSection(task).projectName === "projectless") ? "No project" : TaskManager.getTaskProjectAndSection(task).projectName}${(TaskManager.getTaskProjectAndSection(task).sectionName === "sectionless") ? "" : " &middot " + TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                    <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${CloseIcon}" alt="Delete" />
                </button>
            </div>
        `;
        if (task.status === "done") {document.querySelector(`[data-task-id="${task.id}"][class~="checkbox"]`).setAttribute("data-checked", "done")};
    });
};

const loadSortedTasksByDate = function(container, filter, comparison) {
    container.innerHTML = "";
    const sortedTasks = TaskManager.sortTaskByDate(TaskManager.filterTaskByDate(filter, comparison));
    const overdueTasks = TaskManager.filterOverdueTasks(sortedTasks);
    const notOverdueTasks = TaskManager.filterNotOverdueTasks(sortedTasks);

    overdueTasks.forEach((task) => {
        container.innerHTML += `
            <div data-open="task-dialog" class="task-container overdue">
                <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                    <div data-task-id="${task.id}" class="checkbox"></div>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                    <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${Bookmark}" />
                    <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-project due-date">${format(task.dueDate, "d MMM")}, ${(TaskManager.getTaskProjectAndSection(task).projectName === "projectless") ? "No project" : TaskManager.getTaskProjectAndSection(task).projectName}${(TaskManager.getTaskProjectAndSection(task).sectionName === "sectionless") ? "" : " &middot " + TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                    <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${CloseIcon}" alt="Delete" />
                </button>
            </div>
        `;
    });

    notOverdueTasks.forEach((task) => {
        container.innerHTML += `
            <div data-open="task-dialog" class="task-container">
                <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                    <div data-task-id="${task.id}" class="checkbox"></div>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                    <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${Bookmark}" />
                    <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-project due-date">${format(task.dueDate, "d MMM")}, ${(TaskManager.getTaskProjectAndSection(task).projectName === "projectless") ? "No project" : TaskManager.getTaskProjectAndSection(task).projectName}${(TaskManager.getTaskProjectAndSection(task).sectionName === "sectionless") ? "" : " &middot " + TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                    <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${CloseIcon}" alt="Delete" />
                </button>
            </div>
        `;
        if (task.status === "done") {
            Array.from(document.querySelectorAll(`[data-task-id="${task.id}"][class~="checkbox"]`)).forEach(button => button.setAttribute("data-checked", "done"))
        };
    })
};

const loadOverdueSortedTasksByDate = function(container) {
    container.innerHTML = "";
    const overdueTasks = TaskManager.filterOverdueTasks(TaskManager.allTasks[0]);
    const sortedOverdueTasks = TaskManager.sortTaskByDate(overdueTasks);
    sortedOverdueTasks.forEach((task) => {
        container.innerHTML += `
            <div data-open="task-dialog" class="task-container" data-task>
                <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                    <div data-task-id="${task.id}" class="checkbox"></div>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                    <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${Bookmark}" />
                    <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-project due-date">${format(task.dueDate, "d MMM")}, ${(TaskManager.getTaskProjectAndSection(task).projectName === "projectless") ? "No project" : TaskManager.getTaskProjectAndSection(task).projectName}${(TaskManager.getTaskProjectAndSection(task).sectionName === "sectionless") ? "" : " &middot " + TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                    <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${CloseIcon}" alt="Delete" />
                </button>
            </div>
        `;
    });
};

const loadProjectsToSidebar = function(container) {
    container.innerHTML = "";
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <div data-project-name="${TaskManager.allTasks[i].projectName}" class="menu sidebar-project">
                <button data-project-name="${TaskManager.allTasks[i].projectName}" class="menu sidebar-project-name">
                    <img data-project-name="${TaskManager.allTasks[i].projectName}" src=${Wrench} alt="Project">
                    <p data-project-name="${TaskManager.allTasks[i].projectName}">${TaskManager.allTasks[i].projectName}<p>
                </button>
                <button data-project-name="${TaskManager.allTasks[i].projectName}" class="delete-project">
                    <img data-project-name="${TaskManager.allTasks[i].projectName}" src="${CloseIcon}" alt="Delete" class="delete-project-icon">
                </button>
            </div>
        `;
    };
};

const loadProjectsToDropdown = function(container, task) {
    container.innerHTML = `
        <option data-project-name="projectless" data-section-name="sectionless" class="dropdown-project-name">No projects</option>
    `;
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <option data-project-name="${TaskManager.allTasks[i].projectName}" data-section-name="sectionless" class="dropdown-project-name">${TaskManager.allTasks[i].projectName}</option>
        `
        for (let j=1; j<TaskManager.allTasks[i].sections.length; j++) {
            container.innerHTML += `
                <option data-project-name="${TaskManager.allTasks[i].projectName}" data-section-name="${TaskManager.allTasks[i].sections[j].sectionName}" class="dropdown-section-name">&nbsp &#x25B8 ${TaskManager.allTasks[i].sections[j].sectionName}</option>
            `
        };
    };

    if (task) {
        const options = document.querySelectorAll(".dropdown-project-name, .dropdown-section-name");
        Array.from(options).forEach(option => {
            if ((option.getAttribute("data-project-name") === TaskManager.getTaskProjectAndSection(task).projectName) && (option.getAttribute("data-section-name") === TaskManager.getTaskProjectAndSection(task).sectionName)) {
                option.setAttribute("selected", true);
            };
        });
    };
};

const loadTasksBySection = function(container, projectName, sectionName) {
    container.innerHTML = "";
    const sortedTasks = TaskManager.sortTaskByDate(TaskManager.filterTaskBySection(projectName, sectionName));
    const overdueTasks = TaskManager.filterOverdueTasks(sortedTasks);
    const notOverdueTasks = TaskManager.filterNotOverdueTasks(sortedTasks);
    overdueTasks.forEach((task) => {
        container.innerHTML += `
            <div data-open="task-dialog" class="task-container overdue">
                <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                    <div data-task-id="${task.id}" class="checkbox"></div>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                    <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${Bookmark}" />
                    <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="due-date">${format(task.dueDate, "d MMM")}</p>
                </button>
                <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                    <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${CloseIcon}" alt="Delete" />
                </button>
            </div>
        `;
        if (task.status === "done") {document.querySelector(`[data-task-id="${task.id}"][class~="checkbox"]`).setAttribute("data-checked", "done")};
    });
    notOverdueTasks.forEach((task) => {
        container.innerHTML += `
            <div data-open="task-dialog" class="task-container">
                <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                    <div data-task-id="${task.id}" class="checkbox"></div>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                    <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${Bookmark}" />
                    <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                    <p data-open="task-dialog" data-task-id="${task.id}" class="due-date">${format(task.dueDate, "d MMM")}</p>
                </button>
                <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                    <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${CloseIcon}" alt="Delete" />
                </button>
            </div>
        `;
        if (task.status === "done") {document.querySelector(`[data-task-id="${task.id}"][class~="checkbox"]`).setAttribute("data-checked", "done")};
    });
};

const loadSections = function(container, projectName) {
    let sections = TaskManager.getProject(projectName).sections;
    container.innerHTML = "";
    for (let i=1; i<sections.length; i++) {
        container.innerHTML += `
            <div class="section">
                <div class="section-header">
                    <input data-section-name="${sections[i].sectionName}" type="text" value="${sections[i].sectionName}" class="section-name" autocomplete="off">
                    <button data-section-name="${sections[i].sectionName}" class="delete-section-button">
                        <img data-section-name="${sections[i].sectionName}" src="${CloseIcon}" alt="Close" />
                    </button>
                </div>
                <div data-section-name="${sections[i].sectionName}" class="tasks"></div>
                <button data-open="add task modal" data-section-name="${sections[i].sectionName}" class="add-task-button">
                    <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="add-task-button-img-container">
                        <img data-open="add task modal" data-section-name="${sections[i].sectionName}" src=${PlusIcon} class="add-task-button-img" alt="Plus">
                    </div>
                    <p data-open="add task modal" data-section-name="${sections[i].sectionName}" class="add-task-label">Add task</p>
                </button>
                <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="project-page-task-info-modal removed">
                    <form data-open="add task modal">
                        <input data-open="add task modal" data-section-name="${sections[i].sectionName}" class="task-name" type="text" placeholder="Task name" />
                        <hr data-open="add task modal">
                        <textarea data-open="add task modal" data-section-name="${sections[i].sectionName}" class="description" placeholder="Description"></textarea>
                        <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="extra-task-info">
                            <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="priority-container">
                                <label data-open="add task modal" for="priority">Priority</label>
                                <input data-open="add task modal" data-section-name="${sections[i].sectionName}" class="priority" type="number" value="1" min="1" max="5" />
                            </div>
                            <input data-open="add task modal" data-section-name="${sections[i].sectionName}" class="due-date" type="date" value="${format(new Date(), "yyyy-MM-dd")}" min="${format(new Date(), "yyyy-MM-dd")}"/>
                        </div>
                        <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="task-info-modal-buttons">
                            <button data-open="add task modal" data-section-name="${sections[i].sectionName}" class="confirm-add-task" disabled>OK<div data-section-name="${sections[i].sectionName}" class="message"></div></button>
                            <button data-open="add task modal" data-section-name="${sections[i].sectionName}" class="cancel-add-task">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        const taskContainer = document.querySelector(`[data-section-name="${sections[i].sectionName}"][class~="tasks"]`);
        loadTasksBySection(taskContainer, projectName, sections[i].sectionName);
    };
    container.innerHTML += `
        <div class="section">
            <p>No section</p>
            <div data-section-name="sectionless" class="tasks"></div>
            <button data-open="add task modal" data-section-name="sectionless" class="add-task-button">
                <div data-open="add task modal" data-section-name="sectionless" class="add-task-button-img-container">
                    <img data-open="add task modal" data-section-name="sectionless" src=${PlusIcon} alt="Plus" class="add-task-button-img">
                </div>
                <p data-open="add task modal" data-section-name="sectionless" class="add-task-label">Add task</p>
            </button>
            <div data-open="add task modal" data-section-name="sectionless" class="project-page-task-info-modal removed">
                <form data-open="add task modal">
                    <input data-open="add task modal" data-section-name="sectionless" class="task-name" type="text" placeholder="Task name" />
                    <hr data-open="add task modal">
                    <textarea data-open="add task modal" data-section-name="sectionless" class="description" placeholder="Description"></textarea>
                    <div data-open="add task modal" data-section-name="sectionless" class="extra-task-info">
                            <div data-open="add task modal" data-section-name="sectionless" class="priority-container">
                                <label data-open="add task modal" for="priority">Priority</label>
                                <input data-open="add task modal" data-section-name="sectionless" class="priority" type="number" value="1" min="1" max="5" />
                            </div>
                            <input data-open="add task modal" data-section-name="sectionless" class="due-date" type="date" value="${format(new Date(), "yyyy-MM-dd")}" min="${format(new Date(), "yyyy-MM-dd")}"/>
                        </div>
                    <div data-open="add task modal" data-section-name="sectionless" class="task-info-modal-buttons">
                        <button data-open="add task modal" data-section-name="sectionless" class="confirm-add-task" disabled>OK<div data-section-name="sectionless" class="message"></div></button>
                        <button data-open="add task modal" data-section-name="sectionless" class="cancel-add-task">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    loadTasksBySection(document.querySelector(`[data-section-name="sectionless"][class~="tasks"]`), projectName, "sectionless");
};

const openTask = function(task) {
    const taskDialog = document.querySelector("#task-dialog");
    const taskDialogContainer = document.querySelector("#task-dialog-container");
    taskDialogContainer.innerHTML = `
            <input data-open="task-dialog" type="text" style="position:fixed; left: -100000000000px" />
            <input data-open="task-dialog" type="text" id="edit-task-title" value="${task.title}" />
            <div data-open="task-dialog" id="edit-task-description-container">
            <img data-open="task-dialog" src="${Text}" alt="Text" id="edit-task-description-icon" class="removed"/>
            <textarea data-open="task-dialog" id="edit-task-description" placeholder="Description">${task.description}</textarea>
            </div>
            <div data-open="task-dialog" id="other-task-info">
                <label for="edit-task-due-date">Due date:</label>
                <input data-open="task-dialog" type="date" id="edit-task-due-date" value="${format(task.dueDate, "yyyy-MM-dd")}" min="${format(new Date(), "yyyy-MM-dd")}"/>
                <label for="edit-task-priority">Priority:</label>
                <input data-open="task-dialog" type="range" id="edit-task-priority" value="${task.priority}" min="1" max="5" />
                <div id="scale"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div></div>
                <select data-open="task-dialog" data-task-id="${task.id}" id="dropdown-projects">
                </select>
                <button data-open="task-dialog" id="confirm-edit-task">OK</button>
            </div>
            <button data-open="task-dialog" id="close-task">
                <img data-open"task-dialog" id="close-task-icon" src="${CloseIcon}" alt="Close" />
            </button>
            <div data-open="task-dialog" class="empty"></div>
            <img src="${Mouse}" />
    `;
    
    const editTaskDescriptionIcon = document.querySelector("#edit-task-description-icon");
    const editTaskDescription = document.querySelector("#edit-task-description");
    loadProjectsToDropdown(document.querySelector("#dropdown-projects"), task);
    taskDialog.showModal();

    editTaskDescriptionIcon.addEventListener("click", () => editTaskDescription.focus());
    if (editTaskDescription.value === "") {revealElements(editTaskDescriptionIcon)};

    editTaskDescription.style.height = editTaskDescription.scrollHeight + 3 + 'px';
    editTaskDescription.addEventListener("input", (e) => {
        if (editTaskDescription.value !== "") {
            removeElements(editTaskDescriptionIcon);
        } else revealElements(editTaskDescriptionIcon);
        editTaskDescription.style.height="";
        editTaskDescription.style.height = editTaskDescription.scrollHeight + 3 + 'px';
    });

    enableCloseTask(taskDialog);
    enableClickOut(taskDialog);
};

const enableClickOut = function(taskDialog) {
    document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "task-dialog") {
            taskDialog.close();
        }
    })
}

const enableCloseTask = function(taskDialog) {
    const closeTaskButton = document.querySelector("#close-task");
    closeTaskButton.addEventListener("click", () => {
        taskDialog.close();
    });
};

const loadCurrentMonth = function(today) {
    const tomorrow = format(add(today, {days: 1}), "yyyy-MM-dd");

    document.querySelector("#today-content").innerHTML = "";
    document.querySelector("#project-content").innerHTML = "";
    document.querySelector("#upcoming-content").innerHTML =  `
        <div id="month-title">
            <button id="previous-month"><</button>
            <h1>${format(today, "MMMM yyyy")}</h1>
            <button id="next-month">></button>
        </div>
        <div id="upcoming-container">
            <div id="overdue">
                <p>Overdue</p>
                <div id="overdue-tasks">
                </div>
            </div>
            <div id="month-page" data-month="${format(today, "MMMM yyyy")}">
                <div id="today">
                    <p>${format(today, "d MMM")} &middot Today</p>
                    <div id="today-tasks"></div>
                    <button data-open="add task modal" data-due-date="${today}" class="add-task-button">
                        <div data-open="add task modal" data-due-date="${today}" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="${today}" src=${PlusIcon} class="add-task-button-img" alt="Plus">
                        </div>
                        <p data-open="add task modal" data-due-date="${today}" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="${today}" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="${today}" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="${today}" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="${today}" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="${today}" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="${today}" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <select data-open="add task modal" data-due-date="${today}" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="${today}" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="${today}" disabled class="confirm-add-task">OK<div data-due-date="${today}" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="${today}" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="tomorrow">
                    <p>${format(tomorrow, "d MMM")} &middot Tomorrow</p>
                    <div id="tomorrow-tasks"></div>
                    <button data-open="add task modal" data-due-date="${tomorrow}" class="add-task-button">
                        <div data-open="add task modal" data-due-date="${tomorrow}" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="${tomorrow}" src=${PlusIcon} class="add-task-button-img" alt="Plus">
                        </div>
                         <p data-open="add task modal" data-due-date="${tomorrow}" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="${tomorrow}" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="${tomorrow}" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="${tomorrow}" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="${tomorrow}" class="extra-task-info">
                                <div data-open="add task modal" data-due-dat3="${tomorrow}" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="${tomorrow}" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <select data-open="add task modal" data-due-date="${tomorrow}" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="${tomorrow}" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="${tomorrow}" disabled class="confirm-add-task">OK<div data-due-date="${tomorrow}" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="${tomorrow}" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="this-week">
                    <p>This Week</p>
                    <div id="this-week-tasks"></div>
                    <button data-open="add task modal" data-due-date="this-week" class="add-task-button">
                        <div data-open="add task modal" data-due-date="this-week" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="this-week" src=${PlusIcon} class="add-task-button-img" alt="Plus">
                        </div>
                        <p data-open="add task modal" data-due-date="this-week" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="this-week" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="this-week" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="this-week" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="this-week" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="this-week" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="this-week" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <input data-open="add task modal" data-due-date="this-week" class="due-date" type="date" value="${today}" min="${today}" max="${format(endOfWeek(today, {weekStartsOn: 1}), "yyyy-MM-dd")}" />
                                <select data-open="add task modal" data-due-date="this-week" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="this-week" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="this-week" disabled class="confirm-add-task">OK<div data-due-date="this-week" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="this-week" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="this-month">
                    <p>This Month</p>
                    <div id="this-month-tasks"></div>
                    <button data-open="add task modal" data-due-date="this-month" class="add-task-button">
                        <div data-open="add task modal" data-due-date="this-month" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="this-month" src=${PlusIcon} class="add-task-button-img" alt="Plus">
                        </div>
                        <p data-open="add task modal" data-due-date="this-month" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="this-month" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="this-month" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="this-month" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="this-month" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="this-month" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="this-month" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <input data-open="add task modal" data-due-date="this-month" class="due-date" type="date" value="${today}" min="${today}" max="${format(endOfMonth(today), "yyyy-MM-dd")}" />
                                <select data-open="add task modal" data-due-date="this-month" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="this-month" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="this-month" disabled class="confirm-add-task">OK<div data-due-date="this-month" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="this-month" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="image-container">
                <img src="${WalkingMouse}" />
                <p>Nothing here!</p>
            </div>
        </div>
    `;

    const overdueContainer = document.querySelector("#overdue");
    const overdueTaskContainer = document.querySelector("#overdue-tasks");
    const todayTaskContainer = document.querySelector("#today-tasks");
    const tomorrowTaskContainer = document.querySelector("#tomorrow-tasks");
    const thisWeekTaskContainer = document.querySelector("#this-week-tasks");
    const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

    if (TaskManager.filterOverdueTasks(TaskManager.allTasks[0]).length > 0) {
        revealElements(overdueContainer);
    } else (removeElements(overdueContainer));
    loadOverdueSortedTasksByDate(overdueTaskContainer);
    loadTasksByDate(todayTaskContainer, isToday);
    loadTasksByDate(tomorrowTaskContainer, isTomorrow);
    loadSortedTasksByDate(thisWeekTaskContainer, isThisWeek, { weekStartsOn: 1 });
    loadSortedTasksByDate(thisMonthTaskContainer, isThisMonth);
};

const loadPastMonth = function(today, month) {
    document.querySelector("#upcoming-content").innerHTML = `
        <div id="month-title">
            <button id="previous-month"><</button>
            <h1>${format(month, "MMMM yyyy")}</h1>
            <button id="next-month">></button>
        </div>
        <div id="upcoming-container">
            <div id="overdue">
                <p>Overdue</p>
                <div id="overdue-tasks">
                </div>
            </div>
            <div id="month-page" data-month="${format(month, "MMMM yyyy")}">
                <p>This Month</p>
                <div id="this-month-tasks"></div>
            </div>
            <div id="image-container">
                <img src="${WalkingMouse}" />
                <p>Nothing here!</p>
            </div>
        </div>
    `;

    const overdueContainer = document.querySelector("#overdue");
    const overdueTaskContainer = document.querySelector("#overdue-tasks");
    const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

    if (TaskManager.filterOverdueTasks(TaskManager.allTasks[0]).length > 0) {
        revealElements(overdueContainer);
    } else (removeElements(overdueContainer));
    loadOverdueSortedTasksByDate(overdueTaskContainer);
    loadSortedTasksByDate(thisMonthTaskContainer, isSameMonth, month);
}

const loadFutureMonth = function(today, month) {
    document.querySelector("#upcoming-content").innerHTML = `
        <div id="month-title">
            <button id="previous-month"><</button>
            <h1>${format(month, "MMMM yyyy")}</h1>
            <button id="next-month">></button>
        </div>
        <div id="upcoming-container">
            <div id="overdue">
                <p>Overdue</p>
                <div id="overdue-tasks">
                </div>
            </div>
            <div id="month-page" data-month="${format(month, "MMMM yyyy")}">
                <div id="this-month">
                    <p>This Month</p>
                    <div id="this-month-tasks"></div>
                    <button data-open="add task modal" data-due-date="${month}" class="add-task-button">
                        <img data-open="add task modal" data-due-date="${month}" src=${PlusIcon} alt="Plus">
                    </button>
                    <div data-open="add task modal" data-due-date="${month}" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="${month}" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="${month}" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="${month}" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="${month}" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="${month}" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <input data-open="add task modal" data-due-date="${month}" class="due-date" type="date" value="${today}" min="${today}" max="${format(endOfMonth(today), "yyyy-MM-dd")}" />
                                <select data-open="add task modal" data-due-date="${month}" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="${month}" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="${month}" disabled class="confirm-add-task">OK<div data-due-date="${month}" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="${month}" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="image-container">
            <img src="${WalkingMouse}" />
            <p>Nothing here!</p>
        </div>
    `;

    const overdueContainer = document.querySelector("#overdue");
    const overdueTaskContainer = document.querySelector("#overdue-tasks");
    const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

    if (TaskManager.filterOverdueTasks(TaskManager.allTasks[0]).length > 0) {
        revealElements(overdueContainer);
    } else (removeElements(overdueContainer));
    loadOverdueSortedTasksByDate(overdueTaskContainer);
    loadSortedTasksByDate(thisMonthTaskContainer, isSameMonth, month);
};

const customCursor = function(selector, message, e) {
    const customMessage = document.querySelector(selector);
    customMessage.textContent = message;
    customMessage.style.top = e.clientY + "px";
    customMessage.style.left = e.clientX + "px";
};

const requiredFieldAlert = function(button, selector, message) {
    button.addEventListener("mousemove", (e) => {
        customCursor(selector, message, e);
    });
};

export { hideElements, revealElements, removeElements, changeSidebarHighlight, loadTasksByDate, loadSortedTasksByDate, loadProjectsToSidebar, loadProjectsToDropdown, loadSections, loadCurrentMonth, loadPastMonth, loadFutureMonth, openTask, requiredFieldAlert };