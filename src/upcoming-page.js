import "./upcoming-page-style.css";
import {
  changeSidebarHighlight,
  loadCurrentMonth,
  loadPastMonth,
  loadFutureMonth,
  revealElements,
  removeElements,
  openTask,
  loadProjectsToDropdown,
  requiredFieldAlert,
} from "./dom";
import { isBefore, isThisMonth, add, sub, format } from "date-fns";
import TaskManager from "./tasks";

const init = function() {
  const today = format(new Date(), "yyyy-MM-dd");
  const upcomingButton = document.querySelector("#upcoming");
  const taskDialog = document.querySelector("#task-dialog");

  loadCurrentMonth(today);
  changeSidebarHighlight(upcomingButton);

  const addEvents = function() {
    const enableSwitchMonths = function() {
      const previousMonthButton = document.querySelector("#previous-month");
      const nextMonthButton = document.querySelector("#next-month");

      previousMonthButton.addEventListener("click", () => {
        const pageMonth = document
          .querySelector("#month-page")
          .getAttribute("data-month");
        if (isThisMonth(sub(pageMonth, { months: 1 }))) {
          loadCurrentMonth(today);
        } else if (isBefore(pageMonth, add(today, { months: 1 }))) {
          loadPastMonth(today, sub(pageMonth, { months: 1 }));
        } else {
          loadFutureMonth(today, sub(pageMonth, { months: 1 }));
        }

        enableSwitchMonths();
        enableDeleteTask();
        enableAddTask();
        enableCancelAddTask();
        enableConfirmAddTask();
        makeTasksClickable();
        enableCompleteTask();
        Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
          element.addEventListener("input", (e) => {
            const dataDueDate = e.target.getAttribute("data-due-date");
            if (e.target.value !== "") {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .removeAttribute("disabled");
            } else {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .setAttribute("disabled", "");
            }
          }),
        );
        Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
          (button) => {
            const dataDueDate = button.getAttribute("data-due-date");
            requiredFieldAlert(
              button,
              `[data-due-date="${dataDueDate}"][class="message"]`,
              "Please fill in task name",
            );
          },
        );
        Array.from(document.querySelectorAll(".task")).length == 0
          ? revealElements(document.querySelector("#image-container"))
          : removeElements(document.querySelector("#image-container"));
      });

      nextMonthButton.addEventListener("click", () => {
        const pageMonth = document
          .querySelector("#month-page")
          .getAttribute("data-month");
        if (isThisMonth(add(pageMonth, { months: 1 }))) {
          loadCurrentMonth(today);
        } else if (isBefore(pageMonth, sub(today, { months: 1 }))) {
          loadPastMonth(today, add(pageMonth, { months: 1 }));
        } else {
          loadFutureMonth(today, add(pageMonth, { months: 1 }));
        }

        enableSwitchMonths();
        enableDeleteTask();
        enableAddTask();
        enableCancelAddTask();
        enableConfirmAddTask();
        makeTasksClickable();
        enableCompleteTask();
        Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
          element.addEventListener("input", (e) => {
            const dataDueDate = e.target.getAttribute("data-due-date");
            if (e.target.value !== "") {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .removeAttribute("disabled");
            } else {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .setAttribute("disabled", "");
            }
          }),
        );
        Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
          (button) => {
            const dataDueDate = button.getAttribute("data-due-date");
            requiredFieldAlert(
              button,
              `[data-due-date="${dataDueDate}"][class="message"]`,
              "Please fill in task name",
            );
          },
        );
        Array.from(document.querySelectorAll(".task")).length == 0
          ? revealElements(document.querySelector("#image-container"))
          : removeElements(document.querySelector("#image-container"));
      });
    };

    const enableDeleteTask = function() {
      Array.from(document.querySelectorAll(".delete-task")).forEach((button) =>
        button.addEventListener("click", (e) => {
          const taskid = e.target.getAttribute("data-task-id");
          TaskManager.deleteTask(TaskManager.getTaskById(taskid));
          reloadFlow();
          e.preventDefault();
        }),
      );
    };

    const enableClickOut = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add task modal") {
          Array.from(
            document.querySelectorAll(".upcoming-page-task-info-modal"),
          ).forEach((modal) => {
            removeElements(modal);
            resetModal(modal.getAttribute("data-due-date"));
            revealElements(
              document.querySelector(
                `[data-due-date="${modal.getAttribute("data-due-date")}"][class~="add-task-button"]`,
              ),
            );
            if (document.querySelectorAll(".task").length === 0) {
              revealElements(document.querySelector("#image-container"));
            }
          });
          e.preventDefault();
        }
      });
    };

    const enableAddTask = function() {
      Array.from(document.querySelectorAll(".add-task-button")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            revealElements(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="upcoming-page-task-info-modal"]`,
              ),
            );
            removeElements(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="add-task-button"]`,
              ),
            );
            removeElements(document.querySelector("#image-container"));
            loadProjectsToDropdown(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="select-project"]`,
              ),
            );
            document
              .querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="task-name"]`,
              )
              .focus();
            document
              .querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
            enableClickOut();
            e.preventDefault();
          }),
      );
    };

    const enableCancelAddTask = function() {
      Array.from(document.querySelectorAll(".cancel-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            revealElements(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="add-task-button"]`,
              ),
            );
            removeElements(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="upcoming-page-task-info-modal"]`,
              ),
            );
            if (document.querySelectorAll(".task").length === 0) {
              revealElements(document.querySelector("#image-container"));
            }
            resetModal(e.target.getAttribute("data-due-date"));
            e.preventDefault();
          }),
      );
    };

    const enableConfirmAddTask = function() {
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const dataDueDate = e.target.getAttribute("data-due-date");
            const taskName = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="task-name"]`,
            );
            const description = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="description"]`,
            );
            const priority = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="priority"]`,
            );
            const project = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="select-project"]`,
            );
            const selectedOption = Array.from(project.children)[
              project.selectedIndex
            ];
            const taskProject =
              selectedOption.getAttribute("data-project-name");
            const taskSection =
              selectedOption.getAttribute("data-section-name");

            if (
              !(dataDueDate === "this-week" || dataDueDate === "this-month")
            ) {
              const task = TaskManager.createTask(
                taskName.value,
                description.value,
                dataDueDate,
                priority.value,
                "not done",
              );
              TaskManager.addTask(task, taskProject, taskSection);
            } else {
              const dueDate = document.querySelector(
                `[data-due-date="${dataDueDate}"][class~="due-date"]`,
              );
              const task = TaskManager.createTask(
                taskName.value,
                description.value,
                dueDate.value,
                priority.value,
                "not done",
              );
              TaskManager.addTask(task, taskProject, taskSection);
            }

            reloadFlow();
            e.preventDefault();
          }),
      );
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

    const reloadFlow = function() {
      const pageMonth = document
        .querySelector("#month-page")
        .getAttribute("data-month");
      isThisMonth(pageMonth)
        ? loadCurrentMonth(today)
        : loadFutureMonth(today, pageMonth);
      enableSwitchMonths();
      enableDeleteTask();
      enableAddTask();
      enableCancelAddTask();
      enableConfirmAddTask();
      makeTasksClickable();
      enableCompleteTask();
      Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
        element.addEventListener("input", (e) => {
          const dataDueDate = e.target.getAttribute("data-due-date");
          if (e.target.value !== "") {
            document
              .querySelector(
                `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
              )
              .removeAttribute("disabled");
          } else {
            document
              .querySelector(
                `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
          }
        }),
      );
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) => {
          const dataDueDate = button.getAttribute("data-due-date");
          requiredFieldAlert(
            button,
            `[data-due-date="${dataDueDate}"][class="message"]`,
            "Please fill in task name",
          );
        },
      );
      Array.from(document.querySelectorAll(".task")).length == 0
        ? revealElements(document.querySelector("#image-container"))
        : removeElements(document.querySelector("#image-container"));
    };

    reloadFlow();
  };
  addEvents();

  const resetModal = function(dataDueDate) {
    const taskName = document.querySelector(
      `[data-due-date="${dataDueDate}"][class~="task-name"]`,
    );
    const description = document.querySelector(
      `[data-due-date="${dataDueDate}"][class~="description"]`,
    );
    const priority = document.querySelector(
      `[data-due-date="${dataDueDate}"][class~="priority"]`,
    );

    taskName.value = "";
    description.value = "";
    priority.value = "1";

    if (dataDueDate === "this-week" || dataDueDate === "this-month") {
      const dueDate = document.querySelector(
        `[data-due-date="${dataDueDate}"][class~="due-date"]`,
      );
      dueDate.value = today;
    }
  };
};

export default init;
