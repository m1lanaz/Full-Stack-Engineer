const secureBooking = function() {
     let passengerCount = 0;

     return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
     };
};

const booker = secureBooking();


for (var i = 0; i < 3; i++) {

   const log = () => {
      console.log(i);
   }

   setTimeout(log,100);
}