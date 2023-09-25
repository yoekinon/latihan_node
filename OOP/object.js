const car = {
    // properties
    brand: "Ford",
    color: "Red",
    maxSpeed: 200,
    chasisNumber: 'f-1',

    // method
    drive: ()=>{
        console.log("driving");
    },

    reverse: ()=>{
        console.log("reversing");
    },

    turn: ()=>{
        console.log("turning");
    }
};

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chasisNumber);

car.drive();
car.reverse();
car.turn();