import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="text-center text-gray-500 py-10">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}