import { withAuth } from "next-auth/middleware";

const config = { matcher: ["/:path*"] };

export default withAuth({
  pages: {
    error: "/auth/error",
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
});

export { config };
