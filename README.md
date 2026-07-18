# Shopping Cart Application

A responsive shopping cart build with React and TypeScript. The application fetchs product data from a public API and allows users to search, filter, sort, manage quantities and complete a checkout flow.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS or Bootstrap
- pnpm
- Zustand
- TanStack Query
- Zod
- localStorage

## Setup Instructions

Clone the repository:

```bash
git clone 

## Features

### Product Listing

- Fetchs products from a public API
- Displays products in a responsive grid
- Product shows image, title,category,price,rating
- Add products to cart
- Skeleton loading
- API Error handling
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

- Add products to cart
- Remove products from the cart
- Increase product quantity
- Decrease product quantity
- Clear the cart
- Quantity per product limited between 1 to 5
- Products in cart count displayed in navbar
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
- Shipping information
- Cart items
- Payment summary
- Order confirmation
- Cart clears after successful order

### Additional Features
- Product Sorting
- Skeleton loading
- Dark mode with saved theme preference



## API Used

Product information fetched from the DummyJSON Products API.

The API provides product information incluing:

- Product title
- Product image
- Description
- Category
- Price
- Rating
- Product images

