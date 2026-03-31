import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kkaturi2003:abgk1234@cluster0.mhqwgqy.mongodb.net/food-del').then(()=>console.log("DB connected"));
}