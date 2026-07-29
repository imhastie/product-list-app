import Image from "next/image";
import { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col hover:shadow-md transition-shadow">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
        className="object-cover rounded-md mb-2 w-full h-40"
      />
      <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
      <p className="text-blue-600 font-bold mt-1">${product.price}</p>
    </div>
  );
}