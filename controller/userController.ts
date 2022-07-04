import express, {Request, Response} from 'express'
import bcrypt from "bcrypt";
import User from "../models/User";
import generateToken from "../passport/authentificator";
import { UserType } from "../types";


export async function test(req:Request,res:Response){
  try {
    return res.status(200).json({ message: "test successful" });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong creating the user", error });
  }
}

export const register = async (req:Request,res:Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      registrationDate: new Date().toISOString(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    
    return res.status(200).json({ message: "User Created" });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong creating the user", error });
  }
};

export const login = async (req:Request,res:Response) => {
  //check if the user exists with that email
  const user = await User.findOne({ email: req.body.email });

  if (user === null) {
    return res.status(404).json({ message: "User with that email was not found" });
  }

  try {
    const checkPassword = await bcrypt.compare(req.body.password, user.password);

    if (checkPassword) {
      //password is matching
      //Generate JWT token here
      const token = await generateToken(user);

      // send httpOnly 🍪
      return res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        })
        .json({
          message: "Login successful",
          // we are sending the user as an object with only selected keys
          user: { username: user.username }, // later I might want to send more keys here
          token
        });
    } else {
      return res.status(400).json({ message: "Passwords not matching" });
    }
  } catch (error) {
    console.log("the error ", error);
    return res.status(400).json({ message: "General error upon signing in." });
  }
};

export const logout = async (req:Request,res:Response) => {
  // Remove the httpOnly cookie
  res
    .clearCookie("jwt", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({ message: "Logout successful" }); // saying we want to send a JSON object
  //.redirect("/");
};

export const getUserById = async (req:Request,res:Response) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json( user );
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error });
  }
};

export const followUser = async (req:Request,res:Response) => {
  const user = req.user as UserType;
  try {
    const userToFollow = await User.findById(req.params.id);
    const updatedUser = await User.findByIdAndUpdate(user._id,
      { $push: { _following: userToFollow._id } } 
    )
    return res.status(200).json( updatedUser );
  } catch (error) {
    return res.status(400).json({ message: "Error happened", error: error });
  }
};

export default { test, register, login, logout, getUserById, followUser };