let stocks = {
    fruits: ['Strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
};

let order = (call_production) => {
    console.log('Placed order');
    call_production();
};

let production = () => {
    console.log('production');
};

order(production);