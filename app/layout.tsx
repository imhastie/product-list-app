import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Product List App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}