import PropTypes from "prop-types";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { getServerSession } from "next-auth";

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import StoreProvider from "@/lib/redux/StoreProvider";
import NextAuthProviders from "@/lib/next-auth/NextAuthProviders";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Retailer store",
  description: "A cloth website management for retailers.",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = async (props: Props) => {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextAuthProviders session={session}>
          <Toaster />
          <StoreProvider>
            <Header>
              <NavBar />
            </Header>
            {props.children}
            <Footer />
          </StoreProvider>
        </NextAuthProviders>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { metadata };
export default RootLayout;
