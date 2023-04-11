import  jwt from 'jsonwebtoken'

const generateAccessToken =(userId) => {
    return jwt.sign({userId},process.env.JWT_ACCESS_TOKEN_SECRET,{expiresIn:'3h'})
}

const generateRefreshToken = (userId) => {
    return jwt.sign({userId},process.env.JWT_REFRESH_TOKEN,{expiresIn:'7d'})
}

export {generateAccessToken,generateRefreshToken}