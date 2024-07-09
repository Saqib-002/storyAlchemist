"use server";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
type AmountType = {
  [key: string]: number;
};

const AMOUNT: AmountType = {
  Basic: 5,
  Pro: 10,
  Org: 15,
};

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
export async function getUserById(params: any) {
  try {
    await connectToDatabase();
    const { userId } = params;
    const user = await User.findById(userId);
    return JSON.stringify(user);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function deductUserCredits(params: any) {
  try {
    await connectToDatabase();
    const { userId } = params;
    const user = await User.updateOne(
      { _id: userId },
      { $inc: { credits: -3 } }
    );
    revalidatePath("/dashboard");
    return JSON.stringify(user);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function incUserCredits(params: {
  userId: string;
  subPackage: string;
}) {
  try {
    await connectToDatabase();
    const { userId, subPackage } = params;
    const user = await User.updateOne(
      { _id: userId },
      { $inc: { credits: AMOUNT[subPackage] } }
    );
    revalidatePath("/dashboard");
    return JSON.stringify(user);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
