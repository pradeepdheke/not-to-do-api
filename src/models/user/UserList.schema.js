import mongoose from 'mongoose';

const UserListSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        default: "",
        minlength: [3, "Cannot be less than 3 characters!!!"],
       max: 30,
},

    lname: {
        type: String,
        required: true,
        default: "",
        minlength: [3, "Cannot be less than 3 characters!!!"],
       max: 30,
},

email: {
type: String,
required: true,
default: "",
minlength: [3, "Cannot be less than 3 characters!!!"],
max: 30,
},

password: {
type: String,
required: true,
default: "",
minlength: [3, "Cannot be less than 3 characters!!!"],
max: 30,
},

});


const UserList = mongoose.model("User", UserListSchema);
export default UserList;
