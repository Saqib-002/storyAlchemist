"use server";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
type AmountType = {
  [key: string]: number;
};

const AMOUNT: AmountType = {
  price_1Pa56zSDEORYZxmyUmdvTjOB: 50,
  price_1PaY7SSDEORYZxmyQQvxjXlL: 150,
  price_1PaY7vSDEORYZxmyzLvR5piK: 350,
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
export async function updateUser({ userId, updateData }: any) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findByIdAndUpdate(userId, updateData);
    return JSON.stringify(updatedUser);
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
  priceId: string;
}) {
  try {
    await connectToDatabase();
    const { userId, priceId } = params;
    const user = await User.updateOne(
      { _id: userId },
      { $inc: { credits: AMOUNT[priceId] } }
    );
    revalidatePath("/dashboard");
    return JSON.stringify(user);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
