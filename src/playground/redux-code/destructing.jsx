


//
//->      //    function object Destructing
//


//Destructing object inside function arguments


const add = ({ a, b }, c) => {
      return a + b + c;
}

console.log(add({ a: 1, b: 12 }, 100))



        //
  //->      //    Aray Destructing
        //


    // const address = ['1299 S juniper Street', 'Faisalabad', 'Pakistan', '34000'];


    // const [street, city, country, zip] = address;


    // console.log(`Street: ${street}, City: ${city}, Country: ${country}, zip: ${zip}`)








        //
  //->      //  Object Destructing
        //


//Challenge by Andrew

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// };


// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName)

// Another Example

// const city = {
//     name: 'Faisalabad',
//     country: 'Pakistan',
//     famousPlaces: {
//         one: 'Clock Tower',
//         two: 'Jinnah Park',
//         three: 'Sindbad'
//     }
// };


// const {name: firstName = 'Anonymous', country} = city;

// const { one: firstPlace, two: secondPlace, three } = city.famousPlaces;

// console.log(`name: ${firstName} country: ${country} famousPlaces: One: ${firstPlace} two: ${secondPlace}`)


// const person = {
//     name: 'Hasaan',
//     ag e: 20,
//     location: {
//         city: 'Faisalabad',
//         temp: 23
//     }
// };

// // ` These are template String`


// //Es6 syntax of destructing some values from object -> (destructing ~ pulling out values)

// const { name, age } = person; // this line is equivalent to the two lines below


// // old syntax of destructing values from a object ->

// // const name = person.name;
// // const age = person.age;


// console.log(`${name} is ${age} years old`);
