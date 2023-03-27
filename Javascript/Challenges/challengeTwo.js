
const calculateTip = price => {
    if (price >= 30 && price <= 300){
        return (price / 100) * 15;
    } else{
        return (price / 100) * 20;
    }
};

const bills = [125,555,44];

const tips = [];

for(let i = 0; i < bills.length; i++){
    tips.push(calculateTip(bills[i]));
};

console.log(tips);

const total = [];

for(let i = 0; i < bills.length; i++){
    total.push(bills[i] + tips[i]);
};

console.log(total);