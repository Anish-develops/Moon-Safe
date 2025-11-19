import User from "../models/user.model.js";
import { AsyncHandler } from "../utils/async_handler.js";
import {ApiError} from "../utils/api_error.js";
import { ApiResponse } from "../utils/api_response.js";


const registerUser = AsyncHandler(async (req, res) => {
    const { username, phoneNumber, email, fullName, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(400).json(
            new ApiError(400, null, "User with given email or username already exists" , [])
        );
    }
    if (!username || !phoneNumber || !email || !password) {
        return res.status(400).json(
            new ApiError(400, null, "Required fields are missing", [])
        );
    }
    const user = new User({
        username,
        phoneNumber,
        email,
        fullName,
        password,
    });
    await user.save({validateBeforeSave: true});
    
    const createdUser = await User.findById(user._id).select("-password -__v");
    if(!createdUser){
        return res.status(500).json(
            new ApiError(500, null, "User creation failed", [])
        );
    }   
    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    ); 
});


const fetchUser = AsyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json(
            new ApiError(400, null, "Email is required to fetch user", [])
        );
    }
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
        return res.status(404).json(
            new ApiError(404, null, "User not found", [])
        );
    }
    return res.status(200).json(
        new ApiResponse(200, user, "User fetched successfully")
    );
});

export { registerUser, fetchUser
}

