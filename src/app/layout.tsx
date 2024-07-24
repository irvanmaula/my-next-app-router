"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname, useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
});
const disableNavbar = ["/login", "/register"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {!disableNavbar.includes(pathName) && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
