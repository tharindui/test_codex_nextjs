# Next.js Car Auction + Cart + Checkout App

This project is a **Next.js App Router** demo that includes:
- Cars in auction list page.
- Product details and add-to-cart page.
- Checkout page.

It uses **Tailwind CSS**, **TypeScript**, **ESLint**, and a layered structure aligned with **clean architecture** + **atomic design principles**.

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint (Next.js + TypeScript rules)
- Storybook (component development + docs)
- Vitest + Testing Library (unit testing)
- TanStack React Query (API caching, deduplication, and request state)

## Project Structure

```txt
src/
  app/
    api/               # Next.js API routes (hardcoded JSON delivery)
    auctions/          # Page 1: Cars in auction
    shop/              # Page 2: Products + add to cart + details
    checkout/          # Page 3: Checkout
  application/
    use-cases/         # Use-case layer
  domain/
    entities/          # Domain entities
  infrastructure/
    data/              # Hardcoded JSON data source
    repositories/      # Repository implementations
  contexts/            # React context (cart state)
  components/
    atoms/
    molecules/
    organisms/
    templates/
```

## Routing (App Router)
- `/auctions`: Cars auction list.
- `/shop`: Products with details and add-to-cart.
- `/checkout`: Checkout flow.
- `/api/cars`: API endpoint serving auction cars from hardcoded JSON.
- `/api/products`: API endpoint serving products from hardcoded JSON.

## Architecture Notes

### Clean Architecture Mapping
- **Domain**: Pure business entities (`CartItem`).
- **Application**: Use-cases (`getAuctions`, `getProducts`).
- **Infrastructure**: Hardcoded JSON and repository implementations.
- **Presentation**: Next.js pages + React components.

### Atomic Design Mapping
- **Atoms**: Small reusable UI units (`Button`, `Card`).
- **Molecules**: Combined atoms (`PriceTag`).
- **Organisms**: Complex sections (`AuctionGrid`, `ProductGrid`, `CartSummary`).
- **Templates**: Page-level shell (`PageShell`).

### State Management
- Uses `CartContext` for global cart state where needed (`/shop` and `/checkout`).

### API Request Optimization (React Query)
- Uses TanStack React Query for client-side API caching and request deduplication.
- Query hooks (`useAuctionsQuery`, `useProductsQuery`) centralize API access and loading/error states.
- Query client defaults are configured in `QueryProvider` (retries + disabled refetch on window focus).


### Why `'use client'` Appears in Some Files
- Next.js App Router uses **Server Components by default**.
- Files that use React hooks/state/context (for example `CartContext`, interactive cart controls, and checkout actions) must opt into Client Components with `'use client'`.
- This keeps most rendering server-first while enabling interactivity only where needed.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Lint & Typecheck

```bash
npm run lint
npm run typecheck
```


## Recent Changes

- Added Storybook setup for component-driven development with configs in `.storybook/main.ts` and `.storybook/preview.ts`.
- Added Vitest + Testing Library setup for unit testing with `vitest.config.ts` and `vitest.setup.ts`.
- Added initial stories for atomic components:
  - `src/components/atoms/Button.stories.tsx`
  - `src/components/atoms/Card.stories.tsx`
  - `src/components/molecules/PriceTag.stories.tsx`
- Added initial unit tests for testable areas:
  - `src/contexts/CartContext.test.tsx`
  - `src/infrastructure/repositories/catalog.repository.test.ts`
- Added React Query provider and query hooks for optimized API requests and caching.
- Added npm scripts:
  - `npm run storybook`
  - `npm run build-storybook`
  - `npm run test`
  - `npm run test:watch`

## Storybook

Run Storybook locally:

```bash
npm run storybook
```

Create static Storybook build:

```bash
npm run build-storybook
```

Stories are colocated with components (for example `Button.stories.tsx`, `Card.stories.tsx`, and `PriceTag.stories.tsx`).

## Unit Tests (Vitest)

Run tests once:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Current testable areas include:
- `CartContext` behavior (add/update quantity and total calculations).
- Catalog repository read paths (`getCarAuctions`, `getProducts`).

## Best Practices Included
- Type-safe models.
- Server components by default; client components only where interactivity is needed.
- Separation of concerns with layered folders.
- Centralized context usage.
- API routes for frontend data access.
- Tailwind utility-first styling.
