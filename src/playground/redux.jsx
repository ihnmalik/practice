import { createStore } from 'redux';


// const incrementCount = (payload = {incBy: 1}) => ({
//     type: 'INC',
//     incBy: payload.incBy 
// });


//OR  // Below one is more authentic coz its check the type too


//Reducers


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INC':
            return {
                count: state.count + action.incBy
            }
        case 'DEC':
            return {
                count: state.count - action.decBy
            }
        case 'SET':
            return {
                count: action.setBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

//Store

const store = createStore(countReducer);



//

const incrementCount = ({ incBy = 1 } = {}) => ({
    type: 'INC',
    incBy: incBy
});


const decrementCount = ({ decBy = 1 } = {}) => ({
    type: 'DEC',
    decBy
});


const setCount = ({ setBy = 1 } = {}) => ({
    type: 'SET',
    setBy
});


const resetCount = () => ({
    type: 'RESET'
})




console.log(store.getState());


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});




//Increment Action

// store.dispatch({
//     type: 'INC',     // the below expressing does the same thing but is more good
//     incBy: 5
// });

store.dispatch(incrementCount({ incBy: 5 }))

// store.dispatch({       //better use store.dispatch(incrementCount()) 
//     type:'INC'           // sp iif there is an error we can get that on our console
// })

store.dispatch(incrementCount());

//Decrement Action

// store.dispatch({
//     type: 'DEC',
//     decBy: 3
// })


store.dispatch(decrementCount({ decBy: 3 }));

// store.dispatch({
//     type: 'DEC'
// })


store.dispatch(decrementCount());

//SET count

store.dispatch(setCount({ setBy: 101 }));

//Reset

store.dispatch(resetCount());




