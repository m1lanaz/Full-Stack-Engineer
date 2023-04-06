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


const [a,b,...others] = [1,2,3,4,5];
// REST because on left side of =
console.log(others);

const  [pizza, ,rissoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]    
console.log(pizza, rissoto, otherFood); // REST must be the last element, so there can only be one REST in an assignement

//objects

const {sat, ...weekdays} = restaurant.openingHours;

//functions

const add = function (...numbers) {
    console.log(numbers);
};
add(2,3);
add(5,3,7,2);

const x = [1,2,3,4,5,6];
add(...x);

const y = [1,0];
console.log(restaurant.order)
