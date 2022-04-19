import UserListSchema from './UserList.schema.js';


// insert a user
export const insertUser = (obj) => {
    return UserListSchema(obj).save()
};

// read all user

export const getUsers = () => {
    return UserListSchema.find();
};

// get single user

export const getSingleUser = _id => {
    return UserListSchema.findById(_id);
};

// delete a user
export const deleteUser = _id => {
    return UserListSchema.findByIdAndDelete(_id);
}