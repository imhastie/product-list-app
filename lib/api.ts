import { Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not set.",
  );
}

export async function fetchProducts(
  query: string = "",
): Promise<{ products: Product[] }> {
  const url = query
    ? `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`
    : `${BASE_URL}/products`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
