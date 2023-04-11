
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/loginFacebook", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))