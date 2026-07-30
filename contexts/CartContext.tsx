"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  increment: (productId: number) => void;
  decrement: (productId: number) => void;
  getQuantity: (productId: number) => number;
  count: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increment = (productId: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  };

  const decrement = (productId: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === productId ? { ...i, quantity: i.quantity - 1 } : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  const getQuantity = (productId: number) =>
    items.find((i) => i.id === productId)?.quantity ?? 0;

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, increment, decrement, getQuantity, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
