"use client";

import Image from "next/image";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, increment, decrement, getQuantity } = useCart();
  const quantity = getQuantity(product.id);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-[var(--background)]">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-3">
        <p className="mb-1 text-xs uppercase tracking-wide text-[var(--muted)]">
          {product.category}
        </p>

        <h3 className="mb-2 line-clamp-2 min-h-[2.75rem] text-sm font-medium leading-snug text-[var(--foreground)]">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <p className="font-semibold text-[var(--accent)]">
            ${product.price.toFixed(2)}
          </p>

          {quantity === 0 ? (
            <button
              onClick={() => addToCart(product)}
              aria-label={`Add ${product.title} to cart`}
              className="cursor-pointer rounded-full border border-[var(--card-border)] p-1.5 transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
            >
              <ShoppingCart size={14} />
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-full border border-[var(--card-border)] px-1">
              <button
                onClick={() => decrement(product.id)}
                aria-label={`Decrease quantity of ${product.title}`}
                className="cursor-pointer rounded-full p-1 transition-colors hover:bg-[var(--background)]"
              >
                <Minus size={12} />
              </button>

              <span className="w-4 text-center text-xs font-medium">
                {quantity}
              </span>

              <button
                onClick={() => increment(product.id)}
                aria-label={`Increase quantity of ${product.title}`}
                className="cursor-pointer rounded-full p-1 transition-colors hover:bg-[var(--background)]"
              >
                <Plus size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
