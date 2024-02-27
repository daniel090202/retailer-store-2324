import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

import StoreProvider from "@/lib/redux/StoreProvider";
import NextAuthProviders from "@/lib/next-auth/NextAuthProviders";
import AutoLogoutProvider from "@/lib/next-auth/AutoLogoutProvider";
import RoutesHandlingContext from "@/context/RoutesHandlingContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Retailer store",
  description: "A cloth website management for retailers.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextAuthProviders>
          <RoutesHandlingContext>
            <AutoLogoutProvider>
              <Toaster />
              <StoreProvider>
                <Header>
                  <NavBar />
                </Header>
                {children}
                <Footer />
              </StoreProvider>
            </AutoLogoutProvider>
          </RoutesHandlingContext>
        </NextAuthProviders>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
