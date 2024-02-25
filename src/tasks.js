const TaskManager = {

    allTasks: [
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
    ],

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
        console.log(this.allTasks);
    },

    createSection: function(projectName, sectionName) {
        this.getProject(projectName).sections.push({
            sectionName: sectionName,
            tasks: []
        });
    },

    createTask: function(title, description, dueDate, priority, status) {
        return { title, description, dueDate, priority, status };
    },

    addTask: function(task, projectName, sectionName) {
        this.allTasks[0].push(task);
        this.getSection(projectName, sectionName).tasks.push(task);
        this.resetTaskId();
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
    },

    deleteTask: function(task) {
        this.allTasks[0].splice(task.id, 1);
        let { projectName , sectionName } = this.getTaskProjectAndSection(task);''
        this.getSection(projectName, sectionName).tasks.splice(task.id, 1);
        this.resetTaskId();
    },

    deleteProject: function(projectName) {
        this.allTasks.splice(this.allTasks.indexOf(this.getProject(projectName)), 1);
    },

    filterTaskByDate: function(date) {
        return this.allTasks[0].filter((task) => (task.dueDate === date));
    },

    filterTaskBySection: function(projectName, sectionName) {
        return this.getSection(projectName, sectionName).tasks;
    },

    moveTask: function(task, targetProjectName, targetSectionName) {
        this.deleteTask(task);
        this.addTask(task, targetProjectName, targetSectionName);
    },

};

export default TaskManager;