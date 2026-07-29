# Product List App

A responsive product listing page with search, built with Next.js. Fetches products from a public API and handles the usual loading/error states.

## Stack

- Next.js (App Router) + TypeScript
- SWR for data fetching/caching
- Tailwind for styling

## Notes on a few decisions

- Search is debounced (400ms) so it's not firing a request on every keystroke.
- Using SWR's `keepPreviousData` so the grid doesn't flash empty between searches.
- `next/image` for the thumbnails instead of `<img>`, mostly for the lazy-loading.
- There's an error boundary around the product grid, separate from the fetch error state. SWR's error only covers the network call failing — the boundary catches anything that blows up during render (bad data shape, etc).
- API calls are isolated in `lib/api.ts`, fetching/caching logic in `hooks/useProducts.ts`. `page.tsx` just wires things together, no fetch logic in components.

## Structure

```
app/
  page.tsx
components/
  ProductList/
    ProductList.tsx
    ProductCard.tsx
  SearchBar/
    SearchBar.tsx
  ui/
    LoadingSpinner.tsx
    ErrorMessage.tsx
    ErrorBoundary.tsx
hooks/
  useProducts.ts
lib/
  api.ts
types/
  product.ts
```

## Running it

```bash
git clone https://github.com/imhastie/product-list-app.git
cd product-list-app
npm install
```

Add a `.env.local`:

```
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

```bash
npm run dev
```

## If I had more time

- Pagination — fine for now since the dataset's small, wouldn't scale as-is
- Category/price filters
- Tests around `useProducts` and the components
- Skeleton loaders instead of a spinner
