'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],  this.mainMenu[mainIndex]];
    },
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };


const arr = [7,8,9];


const newArr = [1,2, ...arr] // ... are spread operator
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Works on iterables

const myName = 'Milana';
const letters = [...myName];
console.log(letters);

const myOrder = [0,2];
console.log(restaurant.order(...myOrder));

// Objects

const newResturant = { foundedIn: 2022, ...restaurant, founder: 'me'};
console.log(newResturant);