import ratelimit from "../config/upstash"

const rateLimiter= async (_,res,next)=>{
    try {
        const {success} = await ratelimit.limit("my-rate-limit");
        if(!success){
            return res.status(429).json({message:"Too many requests, please try again later"});
        }
        next();
    } catch (error) {
        console.log("Error in rateLimiter middleware", error);
    }
}

export default rateLimiter;