import  mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type :String,
        unique:true,
        lowercase:true
    },
   
    service :{type:String},
    serviceId :{type:String},
    fullName:{
        type:String,
        required:true
    }},{
        timestamps:true
    })



const User = mongoose.model("User",userSchema);

export default User;