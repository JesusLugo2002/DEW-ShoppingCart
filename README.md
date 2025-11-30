<div align=justify>

# :shopping: Shopping Cart

A simple shopping cart application of a videogame online shop, made with Vite + Vue.js.

This project was created as homework for the Client-side development subject of my Web Application Development formation.

## :wrench: Technologies

- `HTML`
- `CSS`
- `Bootstrap`
- `Typescript`
- `Vite`
- `vue.js`
- `pinia`
- `eslint`
- `prettier`

## :star: Features

1. **Add items to your shopping cart** by clicking in it's buy button.
2. **A limited stock exists!** When a product don't have stock, the client can't buy it (naturally), and when a client buy one, that reduce the stock.
3. **Use `vue-router` for another view implementation:** the shop and the cart views are separated, and linked by the `vue-router`, configurated to implements an effective way to show differents views in a Single Page Application like this.

## :book: What I learned

### What is a front-end framework and how Vue works.

With this project I received an introduction to front-end frameworks and I started with `Vue.js`, focused on the Single Page Application (SPA) creation.

### Typescript vs. Javascript

I learned the major game changer feature that Typescript offer against the Javascript: the strict type checking that catches error during development, significantly improving the code quality and reducing bugs.

### Reactivity fundamentals

I understood how Vue wrap the data inside JavaScript proxies, which acts as a "*middleware*" that handle getters and setters when the application need to get or set a value. When that element changes, use a new Virtual DOM to compare with the old DOM and replace only the changed section, enhancing application performance. 

### Load data automatically with `onMounted` hook

I used the `onMounted` hook that allows me to execute code when a Vue component renders, handling the lifecycle of the application.

### Handle global data access with `pinia` store

I implemented a global data storage using the `pinia` package that provide an element called `store`, used for keep accesible in any point of the application the data contained.

## :eyes: Demostration

</div>
