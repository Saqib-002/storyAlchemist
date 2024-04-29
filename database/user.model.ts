import { model, models, Schema } from "mongoose";

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
    required: [true, "must provide a username."],
  },
  lastName: {
    type: String,
    required: [true, "must provide a username."],
  },
  username: {
    type: String,
    required: [true, "must provide a username."],
    unique: [true, "must be unique."],
  },
  email: {
    type: String,
    required: [true, "must provide a username."],
    unique: [true, "must be unique."],
  },
  password: {
    type: String,
    required: [true, "must provide a username."],
  },
  joinedAt: { type: Date, default: Date.now },
});
const User = models.User || model("User", UserSchema);
export default User;
