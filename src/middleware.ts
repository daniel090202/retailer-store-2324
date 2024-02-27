import { withAuth } from "next-auth/middleware";

const config = { matcher: ["/:path*"] };

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      if (token?.accessToken) {
        return true;
      }

      return false;
    },
  },
  pages: {
    error: "/auth/error",
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
});

export { config };
