const manchester = {
    airline: 'Manchester',
    iataCode: 'MAN',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})

        console.log(this.bookings);
    },
};

manchester.book(424, 'Random user');

const eurowings = {
    airline:'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = manchester.book;

// book(23, 'Mil'); doesn't work because the this keyword points to undefined

book.call(eurowings, 23, 'Mil zab'); //First arguement in the call method says what function you're caling for
console.log(eurowings);

book.call(manchester, 364, 'Milana');
console.log(manchester);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],   
};

// Apply method 

const flightData = [242, 'Random'];
book.apply(swiss, flightData) // Same as call but needs an array of data

book.call(swiss, ...flightData);