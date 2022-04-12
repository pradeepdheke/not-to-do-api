import mongoose from 'mongoose';

const mongoClient = () => {
    try {
        
        const conn = mongoose.connect(process.env.MONGO_URL);

        if(conn) {
            console.log("MongoDB is connected")
        }

    } catch (error) {
        console.log(error)
    }
};

export default mongoClient;