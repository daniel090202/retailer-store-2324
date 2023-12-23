import PropTypes from "prop-types";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header/page";
import NavBar from "@/components/NavBar/page";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Retailer Store",
  description: "A cloth website management for retailers.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header>
          <NavBar />
        </Header>
        {children}
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { metadata };
export default RootLayout;
