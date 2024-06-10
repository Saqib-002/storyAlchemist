import { model, models, Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  joinedAt: Date;
}

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    required: [true, "must provide a username."],
    unique: [true, "must be unique."],
  },
  email: {
    type: String,
    required: [true, "must provide a email."],
    unique: [true, "must be unique."],
  },
  password: {
    type: String,
  },
  joinedAt: { type: Date, default: Date.now },
});
const User = models.User || model("User", UserSchema);
export default User;
