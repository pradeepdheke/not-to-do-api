import mongoose from 'mongoose';

const TaskListSchema = new mongoose.Schema({
    user_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    task: {
        type: String,
        required: true,
        default: "",
        minlength: [3, "Cannot be less than 3 characters!!!"],
       max: 30,
},

hr: {
    type: Number,
    required: true,
},
    
});


const TaskList = mongoose.model("Task", TaskListSchema);
export default TaskList;