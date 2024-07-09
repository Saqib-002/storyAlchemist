import { model, models, Schema, Document } from "mongoose";

export interface ISubscription extends Document {
  user: Schema.Types.ObjectId;
  priceId: string;
  amount: number;
  subscribedAt: Date;
  expiry: Date;
}

const SubscriptionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  priceId: {
    type: String,
  },
  amount: {
    type: Number,
  },
  subscribedAt: { type: Date, default: Date.now },
  expiry: { type: Date, default: Date.now },
});
const Subscription =
  models.Subscription || model("Subscription", SubscriptionSchema);
export default Subscription;
