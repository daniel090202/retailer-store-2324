import PropTypes from "prop-types";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import StoreProvider from "@/lib/redux/StoreProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Retailer store",
  description: "A cloth website management for retailers.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster />
        <StoreProvider>
          <Header>
            <NavBar />
          </Header>
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { metadata };
export default RootLayout;
