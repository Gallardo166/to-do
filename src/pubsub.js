var pubsub = {
    events: {},
    emit: function(eventName, dataOne, dataTwo, dataThree) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((fn) => fn(dataOne, dataTwo, dataThree));
        };
    },
    on: function(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
};

export default pubsub;