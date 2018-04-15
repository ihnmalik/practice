import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCRWnyH6AWaP_iobyBDKMuASMOAH1BuzVc",
    authDomain: "practice-project-data-base.firebaseapp.com",
    databaseURL: "https://practice-project-data-base.firebaseio.com",
    projectId: "practice-project-data-base",
    storageBucket: "practice-project-data-base.appspot.com",
    messagingSenderId: "544551163150"
};
firebase.initializeApp(config);


const database = firebase.database();

database.ref('expense')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            }); 
        });
        console.log(expenses);
    });




// Expenses Creation -> You can use only one sample :D

// const expense1 = {
//     description: 'Buy some food',
//     note: 'Its optional - Leave it empty',
//     amount: 43000,
//     createdAt: 3500
// };

// const expense2 = {
//     description: 'Create a test',
//     note: 'Nothing',
//     amount: 35000,
//     createdAt: 2000
// };

// const expense3 = {
//     description: 'Testing 3',
//     note: 'dont want to add one',
//     amount: 100000,
//     createdAt: 3444444
// };

// database.ref('expense').push(expense1);
// database.ref('expense').push(expense2);
// database.ref('expense').push(expense3);



// Notes dummy data -> Just practicing push 
//Push is used when we work with the array data 

// database.ref('notes').push({
    //     title: 'To Do',
    //     body: 'Go for a Run'
    // });
    
// database.ref('notes').push({
    //     title: 'Another note',
//     body: 'Lets go for a walk'
// });

// database.ref('notes/id').update({
    //     title: 'Second Note'
// })

// database.ref('notes/-L9WBJuVuzvWEY5I-3S9').remove()


// const notes = [{
//     id: '12',
//     title: 'First Note!',
//     body: 'This is my note',

// }, {
//     id: '13',
//     title: 'Second Note!',
//     body: 'This is the second note'
// }]

// database.ref('notes').set(notes);































//Challenge Time - Setup a new subscription
//The major difference between on and once is that once runs only for 1 time and on runs every time the data changes in the firebase


// database.ref().on('value', (snapshot) => {
//     console.log(snapshot);
//     const val = snapshot.val();
//     const message = `${val.name} is a ${val.job.title} at ${val.job.company}` 
//     console.log(message);
// }, (e) => {
//     console.log('this is the error', e);
// });


// setTimeout(()=>{
//     database.ref('job/company').set('Amazon');
// }, 3500)






//For every data change the value fetches again from firebase use -> on method

//On is like subscribe - it re runs every time the data changes in the firebase

//on method returns the function - you can assign it to a varialbe and use it in
    //....use it in off to unsubscibe from a specifinc once ...


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('This is the Error', e)
// })

// setTimeout(()=>{
//     database.ref('age').set(20);
// }, 3500);


// setTimeout(()=>{
//     database.ref().off(onValueChange) //off takes arguemtn if you want to change a specific once
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(23)
// }, 10500)

//   database.ref()     // Once can fetch data only for once
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('The Error is ', e);
//     })

    // database.ref('name')     //Once another practice - Targetting a specific data
    //     .once('value')
    //     .then((snapshot) => {
    //         const val = snapshot.val()
    //         console.log('This is required data',val)
    //     })
    //     .catch((e) => {
    //         console.log('This is the said Error', e)
    //     })

//   database.ref().set({
//       name: 'Hasaan Naseer',
//       age: 20,
//       stressLevel: 6,
//       job: {
//         title: 'Software Developer',
//         company: 'Google'
//       },
//       isMarried: false,
//       location: {
//           city: "Faisalabad",
//           country: "Pakistan"
//       }
//   }).then(()=>{
//       console.log('data is saved');
//   }).catch((error) => {
//       console.log('Data is failed', error)
//   })


//   Challenge from andrew
  // change the stressLevel to 9
  // Company job.company: Amazon
  // Change the location.city to Seattle


//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': "Seattle"
//   })











//   database.ref('isMarried').set(null); //2nd method to remove data with a reference 


  //   database.ref('isMarried').remove().then(() => {       //1st method to remove the data  
  //       console.log('Remove Succeded!');
  //   }).catch((e) => {
  //       console.log('Removing failed', e)
  //   })
