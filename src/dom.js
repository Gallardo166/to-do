import pubsub from "./pubsub";
import TaskManager from "./tasks";
import PlusIcon from "./images/plus.svg";
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

const loadTasksByDate = function(container, filter, comparison) {
    container.innerHTML = "";
    TaskManager.filterTaskByDate(filter, comparison).forEach((task) => {
        container.innerHTML += `
            <div>
                <button data-task-id="${task.id}" class="task">
                    <p data-task-id="${task.id}">${task.title}</p>
                    <p data-task-id="${task.id}">${task.priority}</p>
                    <p data-task-id="${task.id}">${(TaskManager.getTaskProjectAndSection(task).projectName === "projectless") ? "No project" : TaskManager.getTaskProjectAndSection(task).projectName}${(TaskManager.getTaskProjectAndSection(task).sectionName === "sectionless") ? "" : " &middot " + TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button data-task-id="${task.id}" class="delete-task">Delete</button>
            </div>
        `;
    });
};

const loadSortedTasksByDate = function(container, filter, comparison) {
    container.innerHTML = "";
    TaskManager.sortTaskByDate(TaskManager.filterTaskByDate(filter, comparison)).forEach((task) => {
        container.innerHTML += `
            <div>
                <button data-task-id="${task.id}" class="task">
                    <p data-task-id="${task.id}">${task.title}</p>
                    <p data-task-id="${task.id}">${task.priority}</p>
                    <p data-task-id="${task.id}">${format(task.dueDate, "d MMM")}</p>
                    <p data-task-id="${task.id}">${(TaskManager.getTaskProjectAndSection(task).projectName === "projectless") ? "No project" : TaskManager.getTaskProjectAndSection(task).projectName}${(TaskManager.getTaskProjectAndSection(task).sectionName === "sectionless") ? "" : " &middot " + TaskManager.getTaskProjectAndSection(task).sectionName}</p>
                </button>
                <button data-task-id="${task.id}" class="delete-task">Delete</button>
            </div>
        `;
    });
};

const loadTasksBySection = function(container, projectName, sectionName) {
    container.innerHTML = "";
    TaskManager.filterTaskBySection(projectName, sectionName).forEach((task) => {
        container.innerHTML += `
            <div>
                <button data-task-id="${task.id}" class="task">
                    <p data-task-id="${task.id}">${task.title}</p>
                    <p data-task-id="${task.id}">${task.priority}</p>
                </button>
                <button data-task-id="${task.id}" class="delete-task">Delete</button>
            </div>
        `;
    });
};

const loadProjectsToSidebar = function(container) {
    container.innerHTML = "";
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        container.innerHTML += `
            <div class="sidebar-project">
                <button data-project-name="${TaskManager.allTasks[i].projectName}" class="sidebar-project-name">${TaskManager.allTasks[i].projectName}</button>
                <button data-project-name="${TaskManager.allTasks[i].projectName}" class="delete-project">Delete</button>
            </div>
        `;
    };
};

const loadProjectsToDropdown = function(task) {
    const select = document.querySelector("#dropdown-projects");
    select.innerHTML = `
        <option data-project-name="projectless" data-section-name="sectionless" class="dropdown-project-name">No projects</option>
    `;
    for (let i=2; i<TaskManager.allTasks.length; i++) {
        select.innerHTML += `
            <option data-project-name="${TaskManager.allTasks[i].projectName}" data-section-name="sectionless" class="dropdown-project-name">${TaskManager.allTasks[i].projectName}</option>
        `
        for (let j=1; j<TaskManager.allTasks[i].sections.length; j++) {
            select.innerHTML += `
                <option data-project-name="${TaskManager.allTasks[i].projectName}" data-section-name="${TaskManager.allTasks[i].sections[j].sectionName}" class="dropdown-section-name">${TaskManager.allTasks[i].sections[j].sectionName}</option>
            `
        };
    };

    const options = document.querySelectorAll(".dropdown-project-name, .dropdown-section-name");
    Array.from(options).forEach(option => {
        if ((option.getAttribute("data-project-name") === TaskManager.getTaskProjectAndSection(task).projectName) && (option.getAttribute("data-section-name") === TaskManager.getTaskProjectAndSection(task).sectionName)) {
            option.setAttribute("selected", true);
        };
    });
};

const loadSections = function(container, project) {
    let sections = TaskManager.getProject(project).sections;
    container.innerHTML = "";
    for (let i=0; i<sections.length; i++) {
        container.innerHTML += `
            <div class="section">
                <p>${sections[i].sectionName}</p>
                <button data-section-name="${sections[i].sectionName}" class="add-task-button">
                    <img data-section-name="${sections[i].sectionName}" src=${PlusIcon} alt="Plus">
                </button>
                <div data-section-name="${sections[i].sectionName}" class="tasks"></div>
                <div data-section-name="${sections[i].sectionName}" class="task-info-modal removed">
                    <form>
                        <input data-section-name="${sections[i].sectionName}" class="task-name" type="text" placeholder="Task name" />
                        <input data-section-name="${sections[i].sectionName}" class="description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input data-section-name="${sections[i].sectionName}" class="priority" type="number" min="1" max="5" />
                        <input data-section-name="${sections[i].sectionName}" class="due-date" type="date" value="${format(new Date(), "yyyy-MM-dd")}" min="${format(new Date(), "yyyy-MM-dd")}"/>
                        <button data-section-name="${sections[i].sectionName}" class="cancel-add-task">Cancel</button>
                        <button data-section-name="${sections[i].sectionName}" class="confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
        `;
        const tasks = document.querySelector(`[data-section-name="${sections[i].sectionName}"][class~="tasks"]`);
        loadTasksBySection(tasks, project, sections[i].sectionName);
    };
};

const openTask = function(task) {
    const taskDialog = document.querySelector("#task-dialog");
    taskDialog.innerHTML = `
            <input type="text" style="position:fixed; left: -100000000000px" />
            <input type="text" id="edit-task-title" value="${task.title}" />
            <textarea id="edit-task-description">${task.description}</textarea>
            <div id="other-task-info">
                <input type="date" id="edit-task-due-date" value="${format(task.dueDate, "yyyy-MM-dd")}" min="${format(new Date(), "yyyy-MM-dd")}"/>
                <input type="range" id="edit-task-priority" value="${task.priority}" min="1" max="5" />
                <select data-task-id="${task.id}" id="dropdown-projects">
                </select>
            </div>
            <button id="close-task">Cancel</button>
            <button id="confirm-edit-task">OK</button>
    `;
    
    loadProjectsToDropdown(task);
    taskDialog.showModal();
    enableCloseTask(taskDialog);
};

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
        <button id="previous-month"><</button>
        <h1>${format(today, "MMMM yyyy")}</h1>
        <button id="next-month">></button>
        <div id="overdue">
            <p>Overdue</p>
            <div id="overdue-tasks">
            </div>
        </div>
        <div id="month-page" data-month="${format(today, "MMMM yyyy")}">
            <div id="today">
                <p>${format(today, "d MMM")} &middot Today</p>
                <div id="today-tasks"></div>
                <button data-due-date="${today}" class="add-task-button">
                    <img data-due-date="${today}" src=${PlusIcon} alt="Plus">
                </button>
                <div data-due-date="${today}" class="task-info-modal removed">
                    <form>
                        <input data-due-date="${today}" class="task-name" type="text" placeholder="Task name" />
                        <input data-due-date="${today}" class="description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input data-due-date="${today}" class="priority" type="number" min="1" max="5" />
                        <button data-due-date="${today}" class="cancel-add-task">Cancel</button>
                        <button data-due-date="${today}" class="confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
            <div id="tomorrow">
                <p>${format(tomorrow, "d MMM")} &middot Tomorrow</p>
                <div id="tomorrow-tasks"></div>
                <button data-due-date="${tomorrow}" class="add-task-button">
                    <img data-due-date="${tomorrow}" src=${PlusIcon} alt="Plus">
                </button>
                <div data-due-date="${tomorrow}" class="task-info-modal removed">
                    <form>
                        <input data-due-date="${tomorrow}" class="task-name" type="text" placeholder="Task name" />
                        <input data-due-date="${tomorrow}" class="description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input data-due-date="${tomorrow}" class="priority" type="number" min="1" max="5" />
                        <button data-due-date="${tomorrow}" class="cancel-add-task">Cancel</button>
                        <button data-due-date="${tomorrow}" class="confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
            <div id="this-week">
                <p>This Week</p>
                <div id="this-week-tasks"></div>
                <button data-due-date="this-week" class="add-task-button">
                    <img data-due-date="this-week" src=${PlusIcon} alt="Plus">
                </button>
                <div data-due-date="this-week" class="task-info-modal removed">
                    <form>
                        <input data-due-date="this-week" class="task-name" type="text" placeholder="Task name" />
                        <input data-due-date="this-week" class="description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input data-due-date="this-week" class="priority" type="number" min="1" max="5" />
                        <input data-due-date="this-week" class="due-date" type="date" value="${today}" min="${today}" max="${format(endOfWeek(today, {weekStartsOn: 1}), "yyyy-MM-dd")}" />
                        <button data-due-date="this-week" class="cancel-add-task">Cancel</button>
                        <button data-due-date="this-week" class="confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
            <div id="this-month">
                <p>This Month</p>
                <div id="this-month-tasks"></div>
                <button data-due-date="this-month" class="add-task-button">
                    <img data-due-date="this-month" src=${PlusIcon} alt="Plus">
                </button>
                <div data-due-date="this-month" class="task-info-modal removed">
                    <form>
                        <input data-due-date="this-month" class="task-name" type="text" placeholder="Task name" />
                        <input data-due-date="this-month" class="description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input data-due-date="this-month" class="priority" type="number" min="1" max="5" />
                        <input data-due-date="this-month" class="due-date" type="date" value="${today}" min="${today}" max="${format(endOfMonth(today), "yyyy-MM-dd")}" />
                        <button data-due-date="this-month" class="cancel-add-task">Cancel</button>
                        <button data-due-date="this-month" class="confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
        </div>
    `;

    const overdueTaskContainer = document.querySelector("#overdue-tasks");
    const todayTaskContainer = document.querySelector("#today-tasks");
    const tomorrowTaskContainer = document.querySelector("#tomorrow-tasks");
    const thisWeekTaskContainer = document.querySelector("#this-week-tasks");
    const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

    loadSortedTasksByDate(overdueTaskContainer, isBefore, today);
    loadTasksByDate(todayTaskContainer, isToday);
    loadTasksByDate(tomorrowTaskContainer, isTomorrow);
    loadSortedTasksByDate(thisWeekTaskContainer, isThisWeek);
    loadSortedTasksByDate(thisMonthTaskContainer, isThisMonth);
};

const loadPastMonth = function(today, month) {
    document.querySelector("#upcoming-content").innerHTML = `
        <button id="previous-month"><</button>
        <h1>${format(month, "MMMM yyyy")}</h1>
        <button id="next-month">></button>
        <div id="overdue">
            <p>Overdue</p>
            <div id="overdue-tasks">
            </div>
        </div>
        <div id="month-page" data-month="${format(month, "MMMM yyyy")}">
            <p>This Month</p>
            <div id="this-month-tasks"></div>
        </div>
    `;

    const overdueTaskContainer = document.querySelector("#overdue-tasks");
    const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

    loadSortedTasksByDate(overdueTaskContainer, isBefore, today);
    loadSortedTasksByDate(thisMonthTaskContainer, isSameMonth, month);
}

const loadFutureMonth = function(today, month) {
    document.querySelector("#upcoming-content").innerHTML = `
        <button id="previous-month"><</button>
        <h1>${format(month, "MMMM yyyy")}</h1>
        <button id="next-month">></button>
        <div id="overdue">
            <p>Overdue</p>
            <div id="overdue-tasks">
            </div>
        </div>
        <div id="month-page" data-month="${format(month, "MMMM yyyy")}">
            <p>This Month</p>
            <div id="this-month-tasks"></div>
            <button data-due-date="${month}" class="add-task-button">
                <img data-due-date="${month}" src=${PlusIcon} alt="Plus">
            </button>
            <div data-due-date="${month}" class="task-info-modal removed">
                <form>
                    <input data-due-date="${month}" class="task-name" type="text" placeholder="Task name" />
                    <input data-due-date="${month}" class="description" type="text" placeholder="Description" />
                    <label for="priority">Priority</label>
                    <input data-due-date="${month}" class="priority" type="number" min="1" max="5" />
                    <input data-due-date="${month}" class="due-date" type="date" value="${format(add(today, {months: 1}), "yyyy-MM-dd")}" min="${format(startOfMonth(today), "yyyy-MM-dd")}" max="${format(endOfMonth(today), "yyyy-MM-dd")}" />
                    <button data-due-date="${month}" class="cancel-add-task">Cancel</button>
                    <button data-due-date="${month}" class="confirm-add-task">OK</button>
                </form>
            </div>
        </div>
    `;

    const overdueTaskContainer = document.querySelector("#overdue-tasks");
    const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

    loadSortedTasksByDate(overdueTaskContainer, isBefore, today);
    loadSortedTasksByDate(thisMonthTaskContainer, isSameMonth, month);
};

export { hideElements, revealElements, removeElements, loadTasksByDate, loadSortedTasksByDate, loadProjectsToSidebar, loadSections, loadCurrentMonth, loadPastMonth, loadFutureMonth, openTask };