//---Object Literals

var firstName = "Mojtaba";
var lastName = "Zare";

// var object = {
//     firstName,
//     lastName,
//     getFullName(firstName, lastName) {
//         console.log(`fullName : ${firstName+" "+ lastName}`);
//     }
// }
// console.log(object);
// console.log(object.getFullName(firstName, lastName));

//---End Object Literals



//--Object Destructuring

var object = {
    firstName,
    lastName,
    getFullName(firstName = "Mojtaba", lastName = "Zare") {
        console.log(`fullName : ${firstName+" "+ lastName}`);
    }
}


var { firstName: Name, lastName: Family, getFullName: full } = object;

console.log(Name);
console.log(Family);
console.log(full);
//-- End Object Destructuring
var Object2 = {
    Fname: 'Parham',
    Lname: 'Eghtedary',
    Size: [60, 70, 65, 55, 70, 67, 85]
}
var ShowLove = ({ Fname, Lname }) => {
    console.log(`This is --> ${Fname} ${Lname}`);
}

var [, , One, , Two, ...Other] = Object2.Size;