"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
// function car_info(manufacturer:string,model:string,...extras:{[key:string]:any}[]):{manufacturer:string,model:string,extras:{
//     [key:string]:any
// }[]}{
//     let car:{manufacturer:string,model:string,extras:{[key:string]:any}[]}={
//         manufacturer:manufacturer,
//         model:model,
//         extras:extras
//     };
//     return car;
// }
// //call the function with required information and two other name-value pairs
// let my_car=car_info("toyota","carmy",{color:"red"},{sunroof:true});
// //print the object returned to ensure all information was stored correctly
// console.log(my_car);
function car_info(manufacturer, model, ...extras) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        extras: extras
    };
    return car;
}
// Call the function with required information and two other name-value pairs
let my_car = car_info('Toyota', 'Camry', { color: 'red' }, { sunroof: true });
// Print the Object returned to ensure all information was stored correctly
console.log(my_car);
