import "./style.css";
import TaskManager from "./tasks";
import { createTask } from "./tasks";
import pubsub from "./pubsub";
import init from "./today-page";

init();

TaskManager.moveTask({task: true}, "projectless", "sectionless");
console.log(TaskManager.allTasks);