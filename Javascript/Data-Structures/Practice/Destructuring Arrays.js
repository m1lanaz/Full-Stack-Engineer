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
  


const arr = [1,2,3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr

const [first, ,second] = arr // second will be skipped

let [main, , secondary] = restaurant.categories;

//switches them
const temp = main;
main = secondary;
secondary = temp;

[main, secondary] = [secondary, main];

const [starter,mainCourse] = restaurant.order(2, 0);

const nested = [2,4, [5,6]];

console.log(nested[2]);
console.log(nested[2][0]);
const [i, ,j] = nested
console.log(i,j);

const [l, ,[m,n]] = nested;
console.log(l, m, n);

//Default Values
const [p = 1,q=1,r=1] = [8,9];
console.log(p,q,r);