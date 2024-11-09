"use strict";
// Problem -7 
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        return new Date().getFullYear() - this.year;
    }
}
const myCar = new Car("Honda", "Civic", 2020);
console.log(myCar.getCarAge());
