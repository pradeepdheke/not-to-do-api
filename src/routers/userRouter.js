import express from 'express';
import {deleteUser, getUsers, insertUser, getUserById, updateUserPassword, } from '../models/user/UserList.model.js'
const router = express.Router()

// replace the fakeUsers with th real ones from database
const fakeUsers = [];

// user api end points

router.get("/", async (req, res) => {
    const result = await getUsers();

    
    res.json({
        status: "success",
        message: "You made a get call",
        users: result,
    });
    
});

router.get("/:_id", async (req, res) => {
    const {_id} = req.params
    const result = await getUserById(_id);

    
    res.json({
        status: "success",
        message: "You made a get call",
        users: result,
    });
    
});

router.post("/", async (req, res) => {

try {

    const result = await insertUser(req.body);
    console.log(result);
    
    res.json({
        status: "success",
        message: "Your new user has been added",
        user: result
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
        
        const result = await deleteUser(_id);
        
        console.log(result);
        
        if (result?._id) {

         return   res.json({
                status : "success",
                message: "The user has been deleted",
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

    router.patch("/", async (req, res) => {
        console.log(req.body);
        const result = await updateUserPassword(req.body);
        res.json({status: "success", result}); 
     });

export default router;