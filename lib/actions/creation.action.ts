"use server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Creation from "@/database/creation.model";

export async function createCreation(params: any) {
  try {
    await connectToDatabase();
    const newCreation = await Creation.create({ ...params });
    revalidatePath("/dashboard");
    return JSON.stringify(newCreation);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getConsumedCredits(params: any) {
  try {
    await connectToDatabase();
    const currentMonth = new Date().getMonth() + 1;
    const creation = await Creation.find({
      userId: params.userId,
      // Filter based on month (current month)
      $expr: { $eq: [{ $month: "$createdAt" }, currentMonth] },
    });
    const totalCreditsConsumed = creation.reduce(
      (acc: any, doc: any) => acc + doc.creditsConsumed,
      0
    );
    return totalCreditsConsumed;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getCreationsDataForThisMonth(params: any) {
  try {
    await connectToDatabase();
    const currentMonth = new Date().getMonth() + 1;
    const creations = await Creation.find({
      userId: params.userId,
      // Filter based on month (current month)
      $expr: { $eq: [{ $month: "$createdAt" }, currentMonth] },
    });
    const today = new Date();
    const currentMon = today.getMonth(); // 0-indexed month number (Jan = 0)

    // Create an array with all days of the current month
    const allDays = Array(
      new Date(today.getFullYear(), currentMon + 1, 0).getDate()
    )
      .fill(0)
      .map(
        (_, i) =>
          new Date(today.getFullYear(), currentMon, i + 1)
            .toLocaleString()
            .split(",")[0]
      ); // YYYY-MM-DD format
    const consumedCredits = Array(allDays.length).fill(0);
    creations.forEach((item) => {
      const itemDate = item.createdAt.toLocaleString().split(",")[0];
      const matchingIndex = allDays.indexOf(itemDate);

      if (matchingIndex !== -1) {
        consumedCredits[matchingIndex] += item.creditsConsumed;
      }
    });

    return {
      allDays,
      consumedCredits,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
