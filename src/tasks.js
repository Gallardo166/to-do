import { compareDesc, isBefore, format, sub } from "date-fns";

const TaskManager = {

    fetchTasks: function() {
        if (!localStorage.getItem("allTasks")) {
            return [
                [],
                {
                    projectName: "projectless",
                    sections: [
                        {
                            sectionName: "sectionless",
                            tasks: [],
                        },
                    ],
                },
            ];
        } else {
            return JSON.parse(localStorage.getItem("allTasks"));
        };
    },

    makeObjectsEqual: function() {
        this.allTasks[0].forEach(task => {
            let { projectName, sectionName } = this.getTaskProjectAndSection(task);
            this.getSection(projectName, sectionName).tasks.splice(this.getSectionTaskId(task, projectName, sectionName), 1, task);
        });
        this.saveTasks();
    },

    saveTasks: function() {
        localStorage.setItem("allTasks", JSON.stringify(this.allTasks));
    },

    createProject: function(projectName) {
        let newProject = {
            projectName: `${projectName}`,
            sections: [
                {
                    sectionName: "sectionless",
                    tasks: [],
                },
            ],
        };
        this.allTasks.push(newProject);
        this.saveTasks();
    },

    createSection: function(projectName, sectionName) {
        this.getProject(projectName).sections.push({
            sectionName: sectionName,
            tasks: []
        });
        this.saveTasks();
    },

    createTask: function(title, description, dueDate, priority, status) {
        return { title, description, dueDate, priority, status };
    },

    addTask: function(task, projectName, sectionName) {
        this.allTasks[0].push(task);
        this.getSection(projectName, sectionName).tasks.push(task);
        this.resetTaskId();
        this.saveTasks();
    },

    containsObject: function(object, array) {
        for (let i=0; i<array.length; i++) {
            if (JSON.stringify(array[i]) === JSON.stringify(object)) {return true}
        }
        return false;
    },

    getTaskById: function(id) {
        return this.allTasks[0][id];
    },

    getProject: function(projectName) {
        return this.allTasks.filter((project) => (project.projectName === projectName))[0];
    },

    getSection: function(projectName, sectionName) {
        return this.getProject(projectName).sections.filter((section) => (section.sectionName === sectionName))[0];
    },

    getTaskProjectAndSection: function(task) {
        for (let i=1; i<this.allTasks.length; i++) {
            for (let j=0; j<this.allTasks[i].sections.length; j++) {
                if (this.containsObject(task, this.allTasks[i].sections[j].tasks)) {
                    return {projectName: this.allTasks[i].projectName, sectionName: this.allTasks[i].sections[j].sectionName};
                };
            };
        };
    },

    getSectionTaskId: function(task, projectName, sectionName) {
        for (let i=0; i<this.getSection(projectName, sectionName).tasks.length; i++) {
            if (this.getSection(projectName, sectionName).tasks[i].id === task.id) {
                return i;
            };
        };
    },

    checkRepeatedProjectName: function(projectName) {
        for (let i=1; i<this.allTasks.length; i++) {
            if (projectName === this.allTasks[i].projectName) {return true};
        };
        return false;
    },

    checkRepeatedSectionName: function(projectName, sectionName) {
        for (let i=0; i<this.getProject(projectName).sections.length; i++) {
            if (sectionName === this.getProject(projectName).sections[i]) {return true};
        };
        return false;
    },

    resetTaskId: function() {
        this.allTasks[0].forEach(task => task.id = this.allTasks[0].indexOf(task));
        this.saveTasks();
    },

    deleteTask: function(task) {
        this.allTasks[0].splice(task.id, 1);
        let { projectName , sectionName } = this.getTaskProjectAndSection(task);
        this.getSection(projectName, sectionName).tasks.splice(this.getSectionTaskId(task, projectName, sectionName), 1);
        this.resetTaskId();
        this.saveTasks();
    },

    deleteSection: function(projectName, sectionName) {
        for (let i=0; i<this.getSection(projectName, sectionName).tasks.length; i++) {
            this.deleteTask(this.getSection(projectName, sectionName).tasks[i]);
        };
        this.getProject(projectName).sections.splice(this.getProject(projectName).sections.indexOf(this.getSection(projectName, sectionName)), 1);
        this.saveTasks();
    },

    deleteProject: function(projectName) {
        for (let i=0; i<this.getProject(projectName).sections.length; i++) {
            for (let j=0; j<this.getProject(projectName).sections[i].tasks.length; j++) {
                this.deleteTask(this.getProject(projectName).sections[i].tasks[j]);
            };
        };
        this.allTasks.splice(this.allTasks.indexOf(this.getProject(projectName)), 1);
        this.saveTasks();
    },

    filterTaskByDate: function(filter, comparison) {
        return this.allTasks[0].filter((task) => (filter(task.dueDate, comparison)));
    },

    sortTaskByDate: function(array) {
        const compareDate = function(a, b) {
            if (compareDesc(a.dueDate, b.dueDate) > 0) {
                return -1;
            } else if (compareDesc(a.dueDate, b.dueDate) < 0) {
                return 1;
            }
            return 0;
        };

        return array.sort(compareDate);
    },

    filterTaskBySection: function(projectName, sectionName) {
        return this.getSection(projectName, sectionName).tasks;
    },

    filterTaskByStatus: function(array) {
        return {done: array.filter((task) => (task.status === "done")), notDone: array.filter((task) => (task.status === "not done"))};
    },

    filterOverdueTasks: function(array) {
        const today = format(new Date(), "yyyy-MM-dd");
        return this.filterTaskByStatus(array).notDone.filter(task => (isBefore(task.dueDate, today)));
    },

    filterNotOverdueTasks: function(array) {
        const today = format(new Date(), "yyyy-MM-dd");
        return array.filter(task => (!isBefore(task.dueDate, today) || (task.status === "done")));
    },

    editTask: function(task, newTitle, newDescription, newDueDate, newPriority, newStatus, newProject, newSection) {
        let { projectName , sectionName } = this.getTaskProjectAndSection(task);
        const newTask = this.createTask(newTitle, newDescription, newDueDate, newPriority, newStatus);
        newTask.id = task.id;
        this.allTasks[0].splice(this.allTasks[0].indexOf(task), 1, newTask);
        this.getSection(projectName, sectionName).tasks.splice(this.getSectionTaskId(task, projectName, sectionName), 1, newTask);

        if (!((this.getTaskProjectAndSection(newTask).projectName === newProject) && (this.getTaskProjectAndSection(newTask).sectionName === newSection))) {
            this.deleteTask(newTask);
            this.addTask(newTask, newProject, newSection);
            this.saveTasks();
        };
        this.saveTasks();
    },

    changeProjectName: function(oldProjectName, newProjectName) {
        const oldProject = this.getProject(oldProjectName);
        oldProject.projectName = newProjectName;
        this.saveTasks();
    },

    changeSectionName: function(projectName, oldSectionName, newSectionName) {
        const oldSection = this.getSection(projectName, oldSectionName);
        oldSection.sectionName = newSectionName;
        this.saveTasks();
    },

    completeTask: function(taskid) {
        const task = TaskManager.getTaskById(taskid);
        TaskManager.editTask(task, task.title, task.description, task.dueDate, task.priority, "done", TaskManager.getTaskProjectAndSection(task).projectName, TaskManager.getTaskProjectAndSection(task).sectionName);
    },

    uncompleteTask: function(taskid) {
        const task = TaskManager.getTaskById(taskid);
        TaskManager.editTask(task, task.title, task.description, task.dueDate, task.priority, "not done", TaskManager.getTaskProjectAndSection(task).projectName, TaskManager.getTaskProjectAndSection(task).sectionName);
    },
};

export default TaskManager;