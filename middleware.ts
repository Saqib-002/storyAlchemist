import { withAuth } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };

export default withAuth({
  pages: {
    signIn: "/sign-in",
  },
});
