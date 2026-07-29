import useSWR from "swr";
import { fetchProducts } from "@/lib/api";

export function useProducts(query: string) {
  const { data, error, isLoading } = useSWR(
    ["products", query],
    () => fetchProducts(query),
    { keepPreviousData: true }
  );

  return {
    products: data?.products ?? [],
    isLoading,
    isError: !!error,
  };
}