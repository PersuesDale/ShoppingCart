# Shopping Cart Application

A responsive shopping cart application built with React and TypeScript. The application fetches product data from a public API and allows users to search, filter, sort, manage cart quantities, and complete a checkout flow.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- pnpm
- Zustand
- TanStack Query
- Zod
- React Router
- Browser Local Storage

## Setup Instructions

Clone the repository:

```bash
git clone https://github.com/PersuesDale/ShoppingCart.git
```

Navigate into the project:

```bash
cd ShoppingCart
```

Install dependencies:

```bash
pnpm install
```

## Commands to Run the Application

Start the development server:

```bash
pnpm dev
```

Open the local URL displayed by Vite in your browser.

To create a production build:

```bash
pnpm build
```

To preview the production build:

```bash
pnpm preview
```

## API Used

Product information is fetched from the DummyJSON Products API.

The API provides product information including:

- Product title
- Product images
- Description
- Category
- Price
- Rating

## Features

### Product Listing

- Fetches products from a public API
- Displays products in a responsive grid
- Displays product image, title, category, price, and rating
- Add products to the cart
- Skeleton loading
- API error handling
- Empty result handling

### Search and Filtering

- Search products by title
- Filter products by category
- Filter products by price:
  - Under $25
  - $25 - $50
  - Over $50
- Clear all filters

### Product Sorting

- Default sorting
- Price: Low to High
- Price: High to Low
- Rating: High to Low

### Cart Management

- Add products to the cart
- Remove products from the cart
- Increase product quantity
- Decrease product quantity
- Clear the entire cart
- Quantity per product limited from 1 to 5
- Cart item count displayed in the navbar
- Cart persists after page refresh using Zustand's persist middleware with localStorage

### Cart Calculations

- Individual item totals
- Subtotal calculation
- 5% tax
- 10% discount when subtotal is greater than $100
- Minimum order of $10 required for checkout

### Checkout

- Shipping details form
- Form validation using Zod
- Inline validation error messages
- Order summary
- Shipping information review
- Cart items review
- Payment summary
- Order confirmation
- Cart clears after successful order

### Additional Features

- Product sorting
- Skeleton loading
- Dark mode with saved theme preference

## Known Limitations

- Product data is provided by a public demo API.
- Orders are not sent to a real backend.
- Real payment processing is not implemented.
- Checkout and order placement are simulated on the frontend.
- User authentication is not implemented.
- Cart data is stored locally in the user's browser.

## Author

Dale Rolince
