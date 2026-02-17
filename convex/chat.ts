import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getCurrentUser } from "./users";

export const getMessages = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query("messages").order("desc").take(50);
    return messages.reverse();
  },
});

export const sendMessage = mutation({
  args: {
    body: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to sendMessage");
    }

    const user = await getCurrentUser(ctx);

    // Fallback to identity name if user is not in DB yet (e.g. webhook lag)
    const authorName =
      user?.firstName ||
      user?.username ||
      identity.givenName ||
      identity.name ||
      "Anonymous";

    await ctx.db.insert("messages", {
      user: authorName,
      body: args.body,
    });
  },
});