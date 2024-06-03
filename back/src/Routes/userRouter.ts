import {Router} from "express";
import { register, getAllUsers, getUserById, loginUser } from "../Controllers/userControllers";
const userRouter: Router= Router();

userRouter.get("/",getAllUsers );
userRouter.get("/:id", getUserById);
userRouter.post("/register", register);
userRouter.post("/login", loginUser);

export default userRouter;


