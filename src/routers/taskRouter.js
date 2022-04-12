import express from 'express'
const router = express.Router()

// replace the fakeTasks with th real ones from database
const fakeTasks = [];

// task api end points

router.get("/", (req, res) => {

    
    res.json({
        status: "success",
        message: "You made a get call",
        tasks: fakeTasks,
    });
    
});

router.post("/", (req, res) => {
fakeTasks.push(req.body);

    res.json({
        status: "success",
        message: "Your new task has been added"
    })

})

router.delete("/", (req, res) => {
    res.json({
        message: "You made a delete call"
    })

});

export default router;