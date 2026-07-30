"use client";
import { useState, useCallback } from "react";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { ProductList } from "@/components/ProductList/ProductList";
import { LoadingSpinner } from "@/components/UI/LoadingSpinner";
import { ErrorMessage } from "@/components/UI/ErrorMessage";
import { ErrorBoundary } from "@/components/UI/ErrorBoundary";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const [query, setQuery] = useState("");
  const { products, isLoading, isError } = useProducts(query);

  const handleSearch = useCallback((q: string) => setQuery(q), []);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight mb-6">
          Products
        </h1>
        <div className="mb-8 max-w-sm">
          <SearchBar onSearch={handleSearch} />
        </div>

        {isLoading && <LoadingSpinner />}
        {isError && (
          <ErrorMessage message="Something went wrong. Please try again." />
        )}
        {!isLoading && !isError && (
          <ErrorBoundary>
            <ProductList products={products} />
          </ErrorBoundary>
        )}
      </div>
    </main>
  );
}
