import mongoose from 'mongoose'

// connect with mongoose DB

async function connectDB(){
    mongoose.connection.on("connected" , ()=> console.log("DataBase connected Successfully"))

    await mongoose.connect(`${process.env.MONGODB_URI}/LMS`)
}

export default connectDB