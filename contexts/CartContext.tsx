"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";

interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  count: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, count: items.length }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}