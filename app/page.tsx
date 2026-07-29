"use client";
import { useState, useCallback } from "react";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { ProductList } from "@/components/ProductList/ProductList";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const [query, setQuery] = useState("");
  const { products, isLoading, isError } = useProducts(query);

  const handleSearch = useCallback((q: string) => setQuery(q), []);

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="mb-6 max-w-md">
        <SearchBar onSearch={handleSearch} />
      </div>

      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage message="Something went wrong. Please try again." />}
      {!isLoading && !isError && <ProductList products={products} />}
    </main>
  );
}