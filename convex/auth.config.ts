// convex/auth.config.ts
import type { AuthConfig } from "convex/server";

const authConfig: AuthConfig = {
  providers: [
    {
      // Issuer URL from your Clerk "convex" JWT template
      // Make sure CLERK_JWT_ISSUER_DOMAIN is set in the Convex dashboard
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
      applicationID: "convex",
    },
  ],
};

export default authConfig;