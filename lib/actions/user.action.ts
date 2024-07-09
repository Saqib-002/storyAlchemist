"use server";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function createUser(userData: any) {
  try {
    await connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getUserByEmail(params: any) {
  try {
    await connectToDatabase();
    const { email } = params;
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
