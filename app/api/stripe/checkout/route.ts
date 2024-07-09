import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
export async function POST(request: Request) {
  try {
    // you can implement some basic check here like, is user valid or not
    const data = await request.json();
    const priceId = data.priceId;
    const userId = data.userId;
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${process.env.NEXT_BASE_URL}/pricing`,
        cancel_url: `${process.env.NEXT_BASE_URL}/pricing`,
        metadata: {
          userId,
          priceId,
        },
      });
    return Response.json({ result: checkoutSession, ok: true });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server", status: 500 });
  }
}
