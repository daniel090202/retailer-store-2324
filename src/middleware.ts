// import { getSession } from "next-auth/react";
import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
