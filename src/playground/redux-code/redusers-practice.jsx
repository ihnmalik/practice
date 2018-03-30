import { createStore } from 'redux';


//Function to dispatch actions

const incrementCount = ({ incBy = 1 } = {} ) => ({
    type: 'INC',
    incBy
});

const decrementCount = ({ decBy = 1 } = {} ) => ({
    type: 'DEC',
    decBy
});


//Reducer



const reducerCount =  (state = { count: 0 }, action)=> {
    switch(action.type) {
        case 'INC':
            return {
                count: state.count + action.incBy
            };
        case 'DEC':
            return {
                count: state.count - action.decBy
            }
        default:
            return state;
    }
}


//Store

const store = createStore( (state = { count: 0 }, action)=> {
    switch(action.type) {
        case 'INC':
            return {
                count: state.count + action.incBy
            };
        case 'DEC':
            return {
                count: state.count - action.decBy
            }
        default:
            return state;
    }
})


console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(incrementCount());

store.dispatch(decrementCount());


