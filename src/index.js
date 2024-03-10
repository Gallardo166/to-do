import TaskManager from "./tasks";
import initTodayPage from "./today-page";
import initSidebar from "./sidebar";

TaskManager.allTasks = TaskManager.fetchTasks();
TaskManager.makeObjectsEqual();
initTodayPage();
initSidebar();