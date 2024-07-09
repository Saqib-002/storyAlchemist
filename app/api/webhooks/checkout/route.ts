import Stripe from "stripe";
import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { createSubscription } from "@/lib/actions/subscription.action";
type METADATA = {
  userId: string;
  priceId: string;
};
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const endpointSecret = process.env.STRIPE_SECRET_WEBHOOK_KEY!;
  const sig = headers().get("stripe-signature") as string;
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return new Response(`Webhook Error: ${err}`, {
      status: 400,
    });
  }

  const eventType = event.type;
  if (
    eventType !== "checkout.session.completed" &&
    eventType !== "checkout.session.async_payment_succeeded"
  )
    return Response.json({ error: "Server Error" });
  const data = event.data.object;
  const metadata = data.metadata as METADATA;
  const userId = metadata.userId;
  const priceId = metadata.priceId;
  const created = data.created;
  const currency = data.currency;
  const customerDetails = data.customer_details;
  const amount = data.amount_total;
  const transactionDetails = {
    userId,
    priceId,
    created,
    currency,
    customerDetails,
    amount,
  };
  console.log(transactionDetails);
  try {
    await createSubscription({ user: userId, priceId });
    return Response.json({ error: "Server Error" });
  } catch (error) {
    return Response.json({ error: "Server Error" });
  }
}
// stripe listen --forward-to localhost:3000/api/webhooks/checkout --skip-verify
// whsec_bc3a2847ed58af82b4312e365672284b90a6ce2c36958e96e112b26d7d227db0
