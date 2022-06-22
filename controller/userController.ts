import express, {Request, Response} from 'express'

export async function test(req:Request,res:Response){
  try {
    return res.status(200).json({ message: "test successful" });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong creating the user", error });
  }
}

export default { test };
