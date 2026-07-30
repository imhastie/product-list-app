"use client";
import { useState, useEffect } from "react";

export function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => onSearch(value), 400);
    return () => clearTimeout(timeout);
  }, [value, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      aria-label="Search products"
      className="w-full px-4 py-2.5 border border-[var(--card-border)] rounded-lg text-sm text-[var(--foreground)] bg-[var(--card)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
    />
  );
}
