import "./style.css";
import TaskManager from "./tasks";
import { createTask } from "./tasks";
import pubsub from "./pubsub";
import initTodayPage from "./today-page";
import initSidebar from "./sidebar";
import { add, getMonth, format, isBefore, endOfWeek } from "date-fns";

TaskManager.allTasks = TaskManager.fetchTasks();
initTodayPage();
initSidebar();