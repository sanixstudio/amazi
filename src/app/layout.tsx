import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazi AI solution",
  description:
    "Amazi AI solution for generating AI based Chat, Images, Video and more...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ModalProvider />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
