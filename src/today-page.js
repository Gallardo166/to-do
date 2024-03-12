import "./today-page-style.css";
import PlusIcon from "./images/plus.svg";
import Hamster from "./images/hamster.png";
import TaskManager from "./tasks";
import {
  revealElements,
  removeElements,
  changeSidebarHighlight,
  loadTasksByDate,
  loadProjectsToDropdown,
  openTask,
  requiredFieldAlert,
} from "./dom";
import { format, isToday } from "date-fns";

const init = function() {
  const today = format(new Date(), "yyyy-MM-dd");

  const renderTodayPageEmpty = function() {
    const todayContent = document.querySelector("#today-content");
    const upcomingContent = document.querySelector("#upcoming-content");
    const projectContent = document.querySelector("#project-content");

    upcomingContent.innerHTML = "";
    projectContent.innerHTML = "";
    todayContent.innerHTML = `
        <h1 id="today-title">Today</h1>
        <div id="today-task-container"></div>
        <div id="add-task-container" data-open="add task modal">
            <button id="add-task-button" data-open="add task modal">
                <div id="add-task-button-img-container" data-open="add task modal">
                    <img id="add-task-button-img" src="${PlusIcon}" alt="Plus" data-open="add task modal">
                </div>
                <p id="add-task-label" data-open="add task modal">Add task</p>
            </button>
        </div>
        <div data-open="add task modal" id="info-modal" class="removed">
            <form data-open="add task modal" id="task-info-modal">
                <input data-open="add task modal" id="task-name" type="text" placeholder="Task name" autocomplete="off" required="true" />
                <hr data-open="add task modal">
                <textarea data-open="add task modal" id="description" placeholder="Description" autocomplete="off" required></textarea>
                <div data-open="add task modal" id="task-extra-info">
                    <div data-open="add task modal" id="priority-container">
                        <label data-open="add task modal" for="priority">Priority:</label>
                        <input data-open="add task modal" id="priority" type="number" min="1" max="5" value="1"/>
                    </div>
                    <select data-open="add task modal" id="select-project"></select>
                </div>
                <div data-open="add task modal" id="task-info-modal-buttons">
                    <button class="submit" id="confirm-add-task" disabled data-open="add task modal">OK<div id="message"></div></button>
                    <button id="cancel-add-task" data-open="add task modal">Cancel</button>
                </div>
            </form>
        </div>
        <div id="no-task">
            <div id="no-task-image">
                <img src="${Hamster}">
            </div>
            <div id="no-task-text">
                <p>What's happening today?</p>
            </div>
        </div>
    `;
  };

  renderTodayPageEmpty();

  const todayButton = document.querySelector("#today");
  const addTaskButton = document.querySelector("#add-task-button");
  const confirmButton = document.querySelector("#confirm-add-task");
  const cancelButton = document.querySelector("#cancel-add-task");
  const addTaskContainer = document.querySelector("#add-task-container");
  const infoModal = document.querySelector("#info-modal");
  const todayTaskContainer = document.querySelector("#today-task-container");
  const noTask = document.querySelector("#no-task");
  const taskDialog = document.querySelector("#task-dialog");
  const taskName = document.querySelector("#task-name");
  const description = document.querySelector("#description");
  const priority = document.querySelector("#priority");
  const project = document.querySelector("#select-project");

  changeSidebarHighlight(todayButton);

  const addEvents = function() {
    const enableDelete = function() {
      Array.from(document.querySelectorAll(".delete-task")).forEach((button) =>
        button.addEventListener("click", (e) => {
          const taskid = e.target.getAttribute("data-task-id");
          TaskManager.deleteTask(TaskManager.getTaskById(taskid));
          loadTasksByDate(todayTaskContainer, isToday);
          makeTasksClickable();
          enableDelete();
          enableCompleteTask();
          if (TaskManager.filterTaskByDate(isToday).length === 0) {
            revealElements(noTask);
          }
          e.preventDefault();
        }),
      );
    };

    const enableClickOut = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add task modal") {
          revealElements(addTaskContainer);
          resetModal();
          removeElements(infoModal);
          if (TaskManager.filterTaskByDate(isToday).length === 0) {
            revealElements(noTask);
          }
        }
      });
    };

    const makeTasksClickable = function() {
      Array.from(document.querySelectorAll(".task")).forEach((task) =>
        task.addEventListener("click", (e) => {
          openTask(
            TaskManager.getTaskById(e.target.getAttribute("data-task-id")),
          );
          enableConfirmEditTask(
            TaskManager.getTaskById(e.target.getAttribute("data-task-id")),
          );
          e.preventDefault();
        }),
      );
    };

    const enableCompleteTask = function() {
      Array.from(document.querySelectorAll(".checkbox")).forEach((button) =>
        button.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-checked")) {
            TaskManager.completeTask(e.target.getAttribute("data-task-id"));
            e.target.setAttribute("data-checked", "done");
          } else {
            TaskManager.uncompleteTask(e.target.getAttribute("data-task-id"));
            e.target.removeAttribute("data-checked");
          }
        }),
      );
    };

    const enableConfirmEditTask = function(task) {
      const confirmEditTaskButton =
        document.querySelector("#confirm-edit-task");
      const selection = document.querySelector("#dropdown-projects");

      confirmEditTaskButton.addEventListener("click", (e) => {
        const newTitle = document.querySelector("#edit-task-title").value;
        const newDescription = document.querySelector(
          "#edit-task-description",
        ).value;
        const newDueDate = document.querySelector("#edit-task-due-date").value;
        const newPriority = document.querySelector("#edit-task-priority").value;
        const selectedOption = Array.from(selection.children)[
          selection.selectedIndex
        ];
        const newProject = selectedOption.getAttribute("data-project-name");
        const newSection = selectedOption.getAttribute("data-section-name");

        TaskManager.editTask(
          task,
          newTitle,
          newDescription,
          newDueDate,
          newPriority,
          task.status,
          newProject,
          newSection,
        );
        loadTasksByDate(todayTaskContainer, isToday);
        makeTasksClickable();
        enableDelete();
        enableCompleteTask();
        if (TaskManager.filterTaskByDate(isToday).length === 0) {
          revealElements(noTask);
        }
        taskDialog.close();
        e.preventDefault();
      });
    };

    if (TaskManager.filterTaskByDate(isToday).length > 0) {
      removeElements(noTask);
      loadTasksByDate(todayTaskContainer, isToday);
      makeTasksClickable();
      enableDelete();
      enableCompleteTask();
    }

    addTaskButton.addEventListener("click", () => {
      removeElements(addTaskContainer);
      removeElements(noTask);
      revealElements(infoModal);
      taskName.focus();
      confirmButton.setAttribute("disabled", "");
      loadProjectsToDropdown(project);
      enableClickOut();
    });

    confirmButton.addEventListener("click", (e) => {
      const taskInfo = getTaskInfo();
      const task = TaskManager.createTask(
        taskInfo.title,
        taskInfo.description,
        taskInfo.dueDate,
        taskInfo.priority,
        taskInfo.status,
      );
      const selectedOption = Array.from(project.children)[
        project.selectedIndex
      ];
      const taskProject = selectedOption.getAttribute("data-project-name");
      const taskSection = selectedOption.getAttribute("data-section-name");
      TaskManager.addTask(task, taskProject, taskSection);
      loadTasksByDate(todayTaskContainer, isToday);
      makeTasksClickable();
      enableDelete();
      enableCompleteTask();
      revealElements(addTaskContainer);
      removeElements(infoModal);
      resetModal();
      e.preventDefault();
    });

    taskName.addEventListener("input", () => {
      if (taskName.value !== "") {
        confirmButton.removeAttribute("disabled");
      } else {
        confirmButton.setAttribute("disabled", "");
      }
    });

    cancelButton.addEventListener("click", (e) => {
      revealElements(addTaskContainer);
      resetModal();
      removeElements(infoModal);
      if (TaskManager.filterTaskByDate(isToday).length === 0) {
        revealElements(noTask);
      }
      e.preventDefault();
    });

    const getTaskInfo = function() {
      return {
        title: taskName.value,
        description: description.value,
        dueDate: today,
        priority: priority.value,
        status: "not done",
      };
    };

    const resetModal = function() {
      taskName.value = "";
      description.value = "";
      priority.value = "1";
    };
  };

  addEvents();
  requiredFieldAlert(confirmButton, "#message", "Please fill in task name");
};

export default init;
