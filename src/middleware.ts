import { getSession } from "next-auth/react";
import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    const requestForNextAuth = {
      headers: {
        cookie: request.headers.get("cookie") ?? undefined,
      },
    };

    const session = await getSession({ req: requestForNextAuth });

    if (session) {
      const url = "/users/me";

      const response = await fetch(
        process.env.NEXT_PUBLIC_SERVER_BASE_URL + url,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${session.accessToken}` },
        }
      );

      if (response?.status === 200) {
        return NextResponse.next();
      } else {
        const url = request.nextUrl.clone();

        url.search = new URLSearchParams(`callbackUrl=${url}`).toString();
        url.pathname = `/auth/login`;

        return NextResponse.redirect(url);
      }
    } else {
      const url = request.nextUrl.clone();

      url.search = new URLSearchParams(`callbackUrl=${url}`).toString();
      url.pathname = `/auth/login`;

      return NextResponse.redirect(url);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (token?.accessToken) return true;

        return false;
      },
    },
    pages: {
      signIn: "/auth/login",
      signOut: "/auth/logout",
    },
  }
);

export const config = { matcher: ["/:path*"] };
