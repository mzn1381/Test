//ES5
// function Car(Name, Color) {
//     this.Name = Name;
//     this.Color = Color;

// }
// Car.prototype.GetDetailCar = function() {
//     console.log(`My Car Is ---> ${this.Name} ${this.Color}`);
// };
// const MyCar = new Car("BMW", "White");

// MyCar.GetDetailCar();
// console.log(MyCar.Name);
// console.log(MyCar.Color);


//ES6

// class Car {

//     constructor(Name, Color) {
//         this._name = Name;
//         this._color = Color;
//     }

//     DetailCar() {
//         console.log(`My Car Is ---> ${this._name} ${this._color}`);
//     }

//     get Name() {
//         console.log("Getting Name .....");
//         return this._name
//     }

//     set Name(newName) {
//         console.log("Setting Name ......");
//         this._name = newName;
//     }

// }

// const MyCar = new Car("BENZ", "WHITE");

// MyCar.DetailCar();
// // console.log(MyCar.Name);
// // console.log(MyCar.Color);

// var obj = {
//     Name: "Mojtaba",
//     LastName: "Zare",
//     Age: "19",
//     Job: "The Best Programmer And Badminton Player"
// }

// for (var iterator in obj) {
//     console.log(iterator);
// }



// Array

// const Name = ['Zeinab', 'Nargess', 'Parya'];
// console.log(Name);
// const arr = [1, 2, 3, 4, 8, 6, 9];
// console.log(Array.of(8569));
// arr.fill("MOJTABA", 3);
// console.log(arr);
// Name.splice(2, 0, "Fatemeh")
// console.log(Name);

//End Array

var arr = [{
        Name: "Zeinab",
        Age: 20
    },

    {
        Name: "Zeinab1",
        Age: 20
    },
    {
        Name: "Zeinab2",
        Age: 20
    }

    , {
        Name: "Zeinab3",
        Age: 23
    }

    , {
        Name: "Zeinab4",
        Age: 23
    }

    , {
        Name: "Zeinab5",
        Age: 23
    }

    , {
        Name: "Zeinab6",
        Age: 26
    }

    , {
        Name: "Zeinab7",
        Age: 27
    }, {
        Name: "Zeinab8",
        Age: 28
    }, {
        Name: "Zeinab9",
        Age: 29
    }
]

var t1 = arr.map(p => {
    return { name: p.Name, Age: p.Age }
})
console.log(t1);