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


//looping over keys (property names)

const keys = Object.keys(restaurant.openingHours);

console.log(keys)

for (const day of keys) {
    console.log(day); 
};

//Looping over property values

const values = Object.values(restaurant.openingHours);
console.log(values)

//entire object

const entries  = Object.entries(restaurant.openingHours);

console.log(entries);

// [key, value]
for (const [key, {open,close}] of entries) {
    console.log(`on ${key} we open at ${open} and close at ${close}`);
}