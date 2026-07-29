const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts(query: string = ""): Promise<{ products: Product[] }> {
  const url = query
    ? `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`
    : `${BASE_URL}/products`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}