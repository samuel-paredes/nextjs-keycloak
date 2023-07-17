import NavBar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProviderWrapper from "@/utils/session-provider-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS keycloak",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </SessionProviderWrapper>
  );
};

export default RootLayout;
