import jwt from "jsonwebtoken"
import {asyncHandler } from "./asyncHandler.js";
import { User } from "../models/user.model.js";

export const verifyToken = asyncHandler(async (req , res , next) => {
  const token =
req.cookies?.accessToken ||
req.headers.authorization?.replace("Bearer ", "");

if (!token) {
throw new ApiError(401, "Access Token is missing or expired");
}

// 2️⃣ Verify token
const decoded = jwt.verify(token, process.env.ACCESSTOKEN_SECRETKEY);

// 3️⃣ Attach user to req
const user = await User.findById(decoded._id);
if (!user) {
throw new ApiError(401, "User not found with this token");
}

req.user = user;
next(); // continue to controller

})