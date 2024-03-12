import "./project-page-style.css";
import {
  revealElements,
  removeElements,
  changeSidebarHighlight,
  loadSections,
  openTask,
  requiredFieldAlert,
} from "./dom";
import PlusIcon from "./images/plus.svg";
import TaskManager from "./tasks";
import { format } from "date-fns";
import initSidebar from "./sidebar";

const init = function(projectName) {
  const projectButton = document.querySelector(
    `[data-project-name="${projectName}"][class~="sidebar-project"]`,
  );
  const renderProjectPage = function(projectName) {
    const todayContent = document.querySelector("#today-content");
    const upcomingContent = document.querySelector("#upcoming-content");
    const projectContent = document.querySelector("#project-content");

    todayContent.innerHTML = "";
    upcomingContent.innerHTML = "";
    projectContent.innerHTML = `
        <input type="text" id="project-title" value="${projectName}" autocomplete="off">
        <div id="project-container">
            <div id="project-sections"></div>
            <div id="add-section">
                <button data-open="add section modal" id="add-section-button">
                    <img data-open="add section modal" id="add-section-button-img" src="${PlusIcon}" alt="Plus">
                    <p data-open="add section modal">Add section</p>
                </button>
                <div data-open="add section modal" id="section-info-modal" class="removed">
                    <form data-open="add section modal">
                        <input data-open="add section modal" id="section-name" type="text" placeholder="Section Name" autocomplete="off"/>
                        <button data-open="add section modal" id="confirm-add-section" disabled>OK<div id="message"></div></button>
                        <button data-open="add section modal" id="cancel-add-section">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    `;
  };

  renderProjectPage(projectName);
  changeSidebarHighlight(projectButton);

  const projectTitle = document.querySelector("#project-title");
  const addSectionButton = document.querySelector("#add-section-button");
  const sectionInfoModal = document.querySelector("#section-info-modal");
  const cancelAddSectionButton = document.querySelector("#cancel-add-section");
  const confirmAddSectionButton = document.querySelector(
    "#confirm-add-section",
  );
  const sectionName = document.querySelector("#section-name");
  const projectSections = document.querySelector("#project-sections");
  const taskInfoModals = document.querySelectorAll(
    ".project-page-task-info-modal",
  );
  const taskDialog = document.querySelector("#task-dialog");

  const addEvents = function() {
    const enableAddTask = function() {
      Array.from(document.querySelectorAll(".add-task-button")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            Array.from(taskInfoModals).forEach((element) =>
              removeElements(element),
            );
            removeElements(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="add-task-button"]`,
              ),
            );
            revealElements(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="project-page-task-info-modal"]`,
              ),
            );
            document
              .querySelector(
                `[data-section-name="${sectionName}"][class~="task-name"]`,
              )
              .focus();
            document
              .querySelector(
                `[data-section-name="${e.target.getAttribute("data-section-name")}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
            enableClickOutTaskModal();
            e.preventDefault();
          }),
      );
    };

    const enableCancelAddTask = function() {
      Array.from(document.querySelectorAll(".cancel-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            removeElements(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="project-page-task-info-modal"]`,
              ),
            );
            revealElements(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="add-task-button"]`,
              ),
            );
            resetTaskModal(sectionName);
            e.preventDefault();
          }),
      );
    };

    const enableConfirmAddTask = function() {
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            const taskName = document.querySelector(
              `[data-section-name="${sectionName}"][class~="task-name"]`,
            );
            const description = document.querySelector(
              `[data-section-name="${sectionName}"][class~="description"]`,
            );
            const priority = document.querySelector(
              `[data-section-name="${sectionName}"][class~="priority"]`,
            );
            const dueDate = document.querySelector(
              `[data-section-name="${sectionName}"][class~="due-date"]`,
            );

            const newTask = TaskManager.createTask(
              taskName.value,
              description.value,
              dueDate.value,
              priority.value,
              "not done",
            );

            TaskManager.addTask(newTask, projectName, sectionName);
            reloadFlow();
            removeElements(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="project-page-task-info-modal"]`,
              ),
            );
            revealElements(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="add-task-button"]`,
              ),
            );
            resetTaskModal(sectionName);
            e.preventDefault();
          }),
      );
    };

    const enableDeleteTask = function() {
      Array.from(document.querySelectorAll(".delete-task")).forEach((button) =>
        button.addEventListener("click", (e) => {
          TaskManager.deleteTask(
            TaskManager.getTaskById(e.target.getAttribute("data-task-id")),
          );
          reloadFlow();
          e.preventDefault();
        }),
      );
    };

    const enableDeleteSection = function() {
      Array.from(document.querySelectorAll(".delete-section-button")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            TaskManager.deleteSection(projectName, sectionName);
            reloadFlow();
            e.preventDefault();
          }),
      );
    };

    const enableClickOutTaskModal = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add task modal") {
          Array.from(
            document.querySelectorAll(".project-page-task-info-modal"),
          ).forEach((modal) => {
            removeElements(modal);
            resetTaskModal(modal.getAttribute("data-section-name"));
            revealElements(
              document.querySelector(
                `[data-section-name="${modal.getAttribute("data-section-name")}"][class~="add-task-button"]`,
              ),
            );
          });
          e.preventDefault();
        }
      });
    };

    const enableClickOutSectionModal = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add section modal") {
          removeElements(sectionInfoModal);
          revealElements(addSectionButton);
          resetSectionModal();
        }
        e.preventDefault();
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
          reloadFlow();
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
      enableDeleteSection();
      enableCompleteTask();
      Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
        element.addEventListener("input", (e) => {
          const sectionName = e.target.getAttribute("data-section-name");
          if (e.target.value !== "") {
            document
              .querySelector(
                `[data-section-name="${sectionName}"][class~="confirm-add-task"]`,
              )
              .removeAttribute("disabled");
          } else {
            document
              .querySelector(
                `[data-section-name="${sectionName}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
          }
        }),
      );
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) => {
          const sectionName = button.getAttribute("data-section-name");
          requiredFieldAlert(
            button,
            `[data-section-name="${sectionName}"][class="message"]`,
            "Please fill in task name",
          );
        },
      );
      Array.from(document.querySelectorAll(".section-name")).forEach(
        (element) =>
          element.addEventListener("change", (e) => {
            if (
              !TaskManager.checkRepeatedSectionName(
                projectName,
                e.target.value,
              ) &&
              e.target.value !== ""
            ) {
              const oldSectionName = e.target.getAttribute("data-section-name");
              TaskManager.changeSectionName(
                projectName,
                oldSectionName,
                e.target.value,
              );
              e.target.blur();
              init(projectName);
            } else {
              const oldSectionName = e.target.getAttribute("data-section-name");
              e.target.value = oldSectionName;
              e.target.blur();
            }
            e.preventDefault();
          }),
      );
    };

    reloadFlow();

    addSectionButton.addEventListener("click", () => {
      removeElements(addSectionButton);
      revealElements(sectionInfoModal);
      sectionName.focus();
      confirmAddSectionButton.setAttribute("disabled", "");
      enableClickOutSectionModal();
    });

    cancelAddSectionButton.addEventListener("click", (e) => {
      removeElements(sectionInfoModal);
      revealElements(addSectionButton);
      resetSectionModal();
      e.preventDefault();
    });

    confirmAddSectionButton.addEventListener("click", (e) => {
      TaskManager.createSection(projectName, sectionName.value);
      reloadFlow();
      removeElements(sectionInfoModal);
      revealElements(addSectionButton);
      resetSectionModal();
      e.preventDefault();
    });
  };

  addEvents();

  const resetSectionModal = function() {
    sectionName.value = "";
  };

  const resetTaskModal = function(sectionName) {
    const taskName = document.querySelector(
      `[data-section-name="${sectionName}"][class~="task-name"]`,
    );
    const description = document.querySelector(
      `[data-section-name="${sectionName}"][class~="description"]`,
    );
    const priority = document.querySelector(
      `[data-section-name="${sectionName}"][class~="priority"]`,
    );
    const dueDate = document.querySelector(
      `[data-section-name="${sectionName}"][class~="due-date"]`,
    );

    taskName.value = "";
    description.value = "";
    priority.value = "1";
    dueDate.value = format(new Date(), "yyyy-MM-dd");
  };

  sectionName.addEventListener("input", () => {
    if (
      sectionName.value !== "" &&
      !TaskManager.checkRepeatedSectionName(projectName, sectionName.value)
    ) {
      confirmAddSectionButton.removeAttribute("disabled");
    } else {
      confirmAddSectionButton.setAttribute("disabled", "");
    }
  });
  requiredFieldAlert(
    confirmAddSectionButton,
    "#message",
    "Please fill in section name",
  );

  projectTitle.addEventListener("change", (e) => {
    if (
      !TaskManager.checkRepeatedProjectName(projectTitle.value) &&
      projectTitle.value !== ""
    ) {
      TaskManager.changeProjectName(projectName, projectTitle.value);
      e.target.blur();
      initSidebar();
      init(projectTitle.value);
    } else {
      projectTitle.value = projectName;
      e.target.blur();
    }
    e.preventDefault();
  });
};

export default init;
