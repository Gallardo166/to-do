const TaskManager = {
    tasks: [],

    addTask: function(task) {
        this.tasks.push(task);
    },

    filterTaskByDate: function(filter) {
        return this.tasks.filter((task) => (task.dueDate === filter));
    },

    createTask: function(title, description, dueDate, priority) {
        return { title, description, dueDate, priority };
    }
};

export default TaskManager;