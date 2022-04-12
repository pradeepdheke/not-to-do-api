import express from 'express';
import {getTasks, insertTask} from '../models/task/TaskList.model.js'
const router = express.Router()

// replace the fakeTasks with th real ones from database
const fakeTasks = [];

// task api end points

router.get("/", async (req, res) => {
    const result = await getTasks();

    
    res.json({
        status: "success",
        message: "You made a get call",
        tasks: fakeTasks,
    });
    
});

router.post("/", async (req, res) => {

try {

    const result = await insertTask(req.body);
    console.log(result);
    
    res.json({
        status: "success",
        message: "Your new task has been added"
    });
} catch {
    res.json({
        status: "error",
        message: error.message
    });
}

})

router.delete("/", (req, res) => {
    res.json({
        message: "You made a delete call"
    })

});

export default router;