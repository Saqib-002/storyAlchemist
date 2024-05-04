import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { createUser } from "@/lib/actions/user.action";

export async function POST(request: Request) {
  try {
    const { email, username, lastName, firstName, password } =
      await request.json();
    const hashedPassword = await hash(password, 10);
    const user = {
      email,
      username,
      lastName,
      firstName,
      password: hashedPassword,
    };
    console.log(user);
    const newUser = await createUser(user);
    console.log(newUser);
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
