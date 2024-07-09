"use server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Subscription from "@/database/subscription.model";

export async function createSubscription(params: any) {
  try {
    await connectToDatabase();
    const { user, priceId } = params;
    const now = new Date(); // Get the current date

    // Add one month (months are 0-indexed, January is 0)
    const expiry = now.setMonth(now.getMonth() + 1);

    const newSubscription = await Subscription.create({
      user,
      priceId,
      expiry,
    });
    revalidatePath("/pricing");
    return JSON.stringify(newSubscription);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getActiveSubscription(params: any) {
  try {
    await connectToDatabase();
    const { user, subPackage } = params;
    const today = new Date(); // Get the current date
    const query = {
      user,
      expiry: { $gt: today },
      subPackage,
    };

    const subscription = await Subscription.find(query);
    revalidatePath("/");
    console.log(subscription);
    return JSON.stringify(subscription);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
