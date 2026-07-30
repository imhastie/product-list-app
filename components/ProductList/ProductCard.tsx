"use client";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative border border-[var(--card-border)] rounded-xl overflow-hidden bg-[var(--card)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
      <div className="aspect-square bg-[var(--background)] overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <button
        onClick={() => addToCart(product)}
        aria-label={`Add ${product.title} to cart`}
        className="absolute top-2 right-2 bg-[var(--card)] border border-[var(--card-border)] p-1.5 rounded-full hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
      >
        <ShoppingCart size={14} />
      </button>

      <div className="p-3">
        <p className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-[var(--foreground)] line-clamp-2 mb-2 leading-snug">
          {product.title}
        </h3>
        <p className="text-[var(--accent)] font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
