import jwt from "jsonwebtoken";

const generateWebToken = (userId,res) => {
    const token = jwt.sign({ userId }, process.env.SECRETKEY, { expiresIn: "5d" }); // Token will expire in 1 hour
    res.cookie("token",token,{
        httpOnly:true, //xss attack se bachayega
        secure:true,
        sameSite:"strict" //csrf attack se bachayega
    })

};

export default generateWebToken