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

//console.log(restaurant.openingHours.mon.open); // Get an error because mon is undefined.

if (restaurant.openingHours.mon){ 
    copnsole.log(restaurant.openingHours.mon.open)};

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);  //Only if monday exists then the open property will be read, if it doesn't then it will be undefined

console.log(restaurant.openingHours.sat?.open); // This works because .sat exists 

//multiple optional chainings

console.log(restaurant.openingHours?.mon?.open) //this is similar to:

if (restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open);
}

const days = ['mon', 'tue', 'wed','thu','fri','sat','sun'];

for (const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed'; // If chaining is equal to undefined then it will default to closed, but because sat is equal to 0 which is falsy it triggers the second part when || is used
    console.log(open);
};