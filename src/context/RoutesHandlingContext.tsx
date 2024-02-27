"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

import { getCurrentUser } from "@/services";

import { User } from "@/models";

const RoutesHandlingContext = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const session = useSession();
  const currentPage = usePathname();

  useEffect(() => {
    const authenticateUser = async () => {
      if (session.status === "authenticated") {
        const {
          accessToken,
        }: {
          accessToken: string;
        } = session?.data;

        const authenticatedUser: User | undefined = await getCurrentUser(
          accessToken
        );

        if (authenticatedUser === undefined) {
          await signOut();
        }
      }
    };

    authenticateUser();
  }, [router, session, currentPage, session.status, session.data]);

  return <div>{children}</div>;
};

export default RoutesHandlingContext;
