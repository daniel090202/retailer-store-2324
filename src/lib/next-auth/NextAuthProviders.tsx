"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface Props {
  session: any;
  children: ReactNode;
}

const NextAuthProviders = ({ session, children }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextAuthProviders;
