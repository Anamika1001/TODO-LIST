// require the library

const mongoose= require('mongoose');

// Create task schema
const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
})

// Create model using schema
const Task = mongoose.model('Task', taskSchema);

// export Task for further use
module.exports = Task;