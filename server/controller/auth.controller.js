import User from "../model/users.model.js"
import  {generateAccessToken,generateRefreshToken} from "../helper/auth.js"

const registerWithFacebook = async function (req,res){
   
        const {id,name,email} = req.body
        try{
            const checkId = await User.findOne({serviceId : id})
            console.log("user",checkId)
            if(checkId){
                const accessToken = generateAccessToken(checkId._id)
                const refreshToken = generateRefreshToken(checkId._id)
                return res.json({
                    accessToken,refreshToken
                })
            }else{
                const newUser = new User({serviceId : id , fullName : name, email :email})
                const result = await newUser.save()
                console.log(result)
                const accessToken = generateAccessToken(result._id)
                const refreshToken = generateRefreshToken(result._id)
                return res.json({
                    accessToken,refreshToken
                })
            }
        }catch(error){
             console.log(error)
        }
    }

const login = async function (req,res){
       const {email} = req.body;
       console.log("email-------------" , email)
       try{
         
        const checkId = await User.findOne({email : email})
        console.log("user",checkId)
        if(checkId){
            return res.json({message : "user Logged in"})
        }else{
           return res.json ({message : "user not found, you must register first"})
        }
        }catch(error){
            console.log(error)
        }
    }

export {registerWithFacebook,login}