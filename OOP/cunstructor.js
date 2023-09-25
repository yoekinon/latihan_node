class Car{
    constructor(brand, color, maxSpeed){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = `${brand}-${Math.floor(Math.random()*1000)+1}`;
    }

    drive(){
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse(){
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn(){
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

let car1 = new Car('Ford', 'Black', 220);
let car2 = new Car('Toyota', 'White', 210);

console.log(car1);
console.log(car2);


















// function Car(brand, color, maxSpeed, chasisNumber){
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chasisNumber = chasisNumber;
// }

// Car.prototype.drive = function(){
//     console.log(`${this.brand} ${this.color} is driving`);
// }

// Car.prototype.reverse = function(){
//     console.log(`${this.brand} ${this.color} is reversing`);
// }

// Car.prototype.turng = function(){
//     console.log(`${this.brand} ${this.color} is turning`);
// }

// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 210, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// console.log(car1);
// console.log(car2);
// console.log(car3);
