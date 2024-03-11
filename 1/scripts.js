// String
// Boolean
// Number
// BigInt
// Symbol
// null
// undefined

// object

// const let var

// let a = 50
// a = "Hello"
// console.log(a)

// a = 50;
// var a;

// const a = 10;
// let b = a;
// b = 50;
// console.log(a);

// const user = {
//     name: 'James Bond',
//     age: 20
// }

// const user2 = user;
// user2.name = '007';
// console.log(user.name)

// const user = {
//     name: 'James Bond',
//     age: 20,
//     address: {
//         country: "GE",
//         city: 'Tbilisi'
//     }
// }

// const user2 = {
//     ...user,
//     address: {
//         ...user.address,
//         city: 'Batumi'
//     }
// };

// user2.address.city = 'Batumi';
// console.log(user.address.city)


// console.log(func(2, 3))
// const func = (a = 10, b = 20) => {
//     return a + b;
// }

// const func = (a = 10, b = 20) => a + b
// const func = name => name.toLowerCase()

// console.log(func2('2'));
// function func2(a, b = 10) {
//     return a + b;
// }

// const user = {
//     username: 'James Bond',
//     sayHello: () => {
//         console.log(this, this.username);
//         return 'Hello, ' + this.username;
//     }
// }

// const user2 = {
//     name: 'James Bond',
//     sayHello: function() {
//         console.log(this);
//         return 'Hello, ' + this.name;
//     }
// }

// console.log(user.sayHello())
// console.log(user2.sayHello());
// var b;
// const main = () => {
//     if(true) {
//         const a = 50
//         b = a
//         console.log(b)
//     }
// }
// main();
// console.log(b);

const user = {
    name: 'James Bond',
    age: 30,
    address: {
        city: 'TB'
    }
}

// const name = user.name;
// const city = user.address.city;

// const city = 'Batumi'

// const {age, name, address: {city: cityName}} = user;
// console.log(name, age, cityName);

// const arr = [1, 2, 3, user, [1, 2, ['hello']]];
// const [a,, c, {address: {city}}, [,,[myHello]]] = arr;
// console.log(a, c, city, myHello)

// const func = (a, b, ...rest) => {
//     return rest.reduce((accumulator, value) => accumulator + value)
// }

// console.log(func(1, 2, 3, 4, 5))

const getName = ({name}) => name
console.log(getName(user))

for(const jemali in user) {
    console.log(jemali)
}
for(const val of [1, 2, 3]) {
    console.log(val)
}
