# Tooth-Store

Assignment Task for Toothsi

Live Hosted At: https://tooth-store.netlify.app/

## Features/Tech Stack

- Single Page Application built over ReactJS, TailwindCSS
- Dummy API is used "https://fakestoreapi.com/products" for sample ecommerce data and some custom parameters have added required for the UI
- On the top left corner there are dropdowns which will filter out the products based on the filter applied.
- On the right corner there is a search bar in which user can search for products and based on the keywords entered the matching products would be filtered out and be shown on the page.
- In each product there is a a cart icon and an input in which the user can add the quantity of product the user wants to buy. And there will be a checkbox next to the cart icon and only those products which are selected will be added to cart and will be visible on cart summary page.
- On click of Add to cart button on top right corner user will be taken to cart/checkout summary page.
- Only those products which are selected by the user on the product listing page will be visible here with their respective quantities , subtotal and cart total on the right side.
- Users will have an option to change the quantity of items by clicking + and - buttons present next to each item.
- Whenever anything is updated on the cart page then subtotal value and total value will be changing accordingly.
- On clicking the Proceed checkout button the user will be taken to the thank you page / Success Page .

## Environment Variables

No ENV variables is required

## Installation

Install project with npm

```bash
  git clone https://github.com/ThisIsFaar/ToothStore
  cd ToothStore
  npm Install
```

run app with `npm run dev` on root dir

## Authors

- [@ThisIsFaar](https://www.github.com/thisisfaar)
