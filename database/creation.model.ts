import { model, models, Schema, Document } from "mongoose";

export interface ICreation extends Document {
  user: Schema.Types.ObjectId;
  createdAt: Date;
  creditsConsumed: number;
}

const CreationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  creditsConsumed: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now },
});
const Creation = models.Creation || model("Creation", CreationSchema);
export default Creation;
