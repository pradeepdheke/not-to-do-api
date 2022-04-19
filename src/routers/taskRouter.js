import express from 'express';
import {deleteTask, getTasks, insertTask} from '../models/task/TaskList.model.js'
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
        message: error.message,
    });
}

})

router.delete("/:_id", async (req, res) => {
    // we need _id to delete the item from db
    try {

        const {_id} = req.params;
        console.log(_id);
        
        const result = await deleteTask(_id);
        
        console.log(result);
        
        if (result?._id) {

         return   res.json({
                status : "success",
                message: "The ticket has been deleted",
                result,
            });
        }
        res.json({
            status : "success",
            message: "There is nothing to delete",
            result, 
        });
            
        } catch (error) {
        res.json({
            status: "error",
            message: error.message,
        })

    }
        
    });

export default router;