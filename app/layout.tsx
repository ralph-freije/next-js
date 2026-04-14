import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import type { ReactNode } from "react";
import ScrollToTop from "./components/ScrollToTop";
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow pt-[80px]">{children}</main>
        <Footer />
         <ScrollToTop />
      </body>
    </html>
  );
}