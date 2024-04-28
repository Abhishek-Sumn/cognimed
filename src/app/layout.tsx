import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocContextProvider from "../context/docProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognimed",
  description: "Developed By Abhishek Suman ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DocContextProvider>
        <body className={inter.className}>{children}</body>
      </DocContextProvider>

    </html>
  );
}
