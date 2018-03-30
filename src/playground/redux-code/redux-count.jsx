import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INC':
            const incBy = typeof action.incBy === 'number' ? action.incBy : 1
            return {
                count: state.count + incBy
            }
        case 'DEC':
            const decBy = typeof action.decBy === 'number' ? action.decBy : 1
            return {
                count: state.count - decBy
            }
        case 'SET':
            return{
                count: action.setBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
})


console.log(store.getState());


//Subscribe function auto run whenever there is a change in store function

store.subscribe(() => {
    console.log(store.getState());
});




//Increment Action

store.dispatch({
    type: 'INC',
    incBy: 5
});

store.dispatch({
    type: 'INC'
})

//Decrement Action

store.dispatch({
    type: 'DEC',
    decBy: 3
})

store.dispatch({
    type: 'DEC'
})

//SET count

store.dispatch({
    type: 'SET',
    setBy: 101
})

//Reset

store.dispatch({
    type:'RESET'
})





