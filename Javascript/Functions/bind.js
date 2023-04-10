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


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],   
};


const eurowings = {
    airline:'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = manchester.book;

book.bind(eurowings);

const bookEW = book.bind(eurowings)

bookEW(54, 'Milana'); 

// Bind is used instead of using call constantly

const boobEW23 = book.bind(eurowings, 23); // AS if the first arguement was set, so only needs the name

