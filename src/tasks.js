const TaskManager = {

    // project system to be implemented next
    // alltasks: [
    //     {
    //         projectName: project1,
    //         sections: [
    //             {
    //                 sectionName: section1,
    //                 tasks: [],
    //             },
    //             {
    //                 sectionName: sectionless,
    //                 tasks: [],
    //             }
    //         ]
    //     },
    //     {
    //         projectName: projectless,
    //         tasks: [],
    //     }
    
    // ],

    tasks: [],

    addTask: function(task) {
        this.tasks.push(task);
        task.id = this.tasks.indexOf(task);
    },

    deleteTask: function(id) {
        this.tasks.splice(id, 1);
        this.tasks.forEach(task => task.id = this.tasks.indexOf(task))
    },

    filterTaskByDate: function(filter) {
        return this.tasks.filter((task) => (task.dueDate === filter));
    },

    createTask: function(title, description, dueDate, priority, status) {
        return { title, description, dueDate, priority, status };
    },
};

export default TaskManager;