import { compareDesc } from "date-fns";

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

    saveTasks: function() {
        localStorage.setItem("allTasks", JSON.stringify(TaskManager.allTasks));
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

    resetTaskId: function() {
        this.allTasks[0].forEach(task => task.id = this.allTasks[0].indexOf(task));
        this.saveTasks();
    },

    deleteTask: function(task) {
        this.allTasks[0].splice(task.id, 1);
        let { projectName , sectionName } = this.getTaskProjectAndSection(task);
        this.getSection(projectName, sectionName).tasks.splice(this.getSection(projectName, sectionName).tasks.indexOf(task), 1);
        this.resetTaskId();
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

    moveTask: function(task, targetProjectName, targetSectionName) {
        this.deleteTask(task);
        this.addTask(task, targetProjectName, targetSectionName);
        this.saveTasks();
    },

    editTask: function(task, newTitle, newDescription, newDueDate, newPriority) {
        task.title = newTitle;
        task.description = newDescription;
        task.dueDate = newDueDate;
        task.priority = newPriority;
        this.saveTasks();
    },
};

export default TaskManager;