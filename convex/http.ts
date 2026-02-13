// convex/http.ts
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { Webhook } from "svix";

// Secret from Clerk Webhooks page; must be set in Convex dashboard
const webhookSecret = process.env.CLERK_WEBHOOK_SECRET!;

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const event = await validateRequest(request);
    if (!event) {
      return new Response("Error occurred", { status: 400 });
    }

    switch (event.type) {
      case "user.created":
      case "user.updated": {
        await ctx.runMutation(internal.users.upsertFromClerk, {
          clerkId: event.data.id,
          email: event.data.email_addresses[0]?.email_address || "",
          firstName: event.data.first_name,
          lastName: event.data.last_name,
          imageUrl: event.data.image_url,
          username: event.data.username,
        });
        break;
      }
      case "user.deleted": {
        await ctx.runMutation(internal.users.deleteUser, {
          clerkId: event.data.id!,
        });
        break;
      }
      default: {
        console.log("ignored Clerk webhook event", event.type);
      }
    }

    return new Response(null, { status: 200 });
  }),
});

// Validate and parse the Clerk webhook using svix
async function validateRequest(req: Request): Promise<any | null> {
  const payloadString = await req.text();
  const svixHeaders = {
    "svix-id": req.headers.get("svix-id")!,
    "svix-timestamp": req.headers.get("svix-timestamp")!,
    "svix-signature": req.headers.get("svix-signature")!,
  };

  const wh = new Webhook(webhookSecret);
  try {
    return wh.verify(payloadString, svixHeaders) as any;
  } catch (error) {
    console.error("Error verifying webhook event", error);
    return null;
  }
}

export default http;