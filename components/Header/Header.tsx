"use client";
import { Moon, Sun, ShoppingCart } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useCart } from "@/contexts/CartContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { count } = useCart();

  return (
    <header className="border-b border-[var(--card-border)] bg-[var(--card)] sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-semibold text-[var(--foreground)]">Store</span>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-[var(--background)] transition-colors text-[var(--foreground)]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Cart"
            className="relative p-2 rounded-lg hover:bg-[var(--background)] transition-colors text-[var(--foreground)]"
          >
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[var(--accent)] text-[var(--accent-foreground)] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}