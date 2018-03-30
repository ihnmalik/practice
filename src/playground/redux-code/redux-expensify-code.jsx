import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Things to do 1- add these functions and dispatch these 2- add reducers 

//ADD-EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
    
})
//REMOVE_EXPENSE
const removeExpense = ({ id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
})
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
});


//SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


//Expenses Reducer

const expensesDefaultState = []

const expensesReducer = (state = expensesDefaultState , action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                };
            });
        default :
            return state
    }
}


//Filter Reducer

const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return  {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}



// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);



// Subscribe

store.subscribe(() => {
    console.log(store.getState());
})



// Action creator - Dispatching Actions

//Add Expense - Action Dispatch
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 300}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 500}));

//Remove Expense - Action Dispatch
store.dispatch(removeExpense({id: expenseOne.expense.id}));

//Edit Expense - Action Dispatch:
store.dispatch(editExpense(expenseTwo.expense.id, {amount : 1000}));


//SetTextFilter
store.dispatch(setTextFilter('this text'));
store.dispatch(setTextFilter());

//Sort By Amount
store.dispatch(sortByAmount());

//Sort By Date
store.dispatch(sortByDate());

//Setting Start Date:
store.dispatch(setStartDate(123));
store.dispatch(setStartDate());  //Undefined Start Date


// Setting End Date:
store.dispatch(setEndDate(456));
store.dispatch(setEndDate());   //Undefined End Date



// ----------------------- Completed upto lecture 95 ----------------//



















// Demo State
const demoState = {
    expenses: [{
        id: 'awenRandomid',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}



///
//// //// Same Data from redux epensify as we are going to divide into multiple files
////


// -> 


// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';



// // ADD-EXPENSE
// const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createdAt = 0
//     } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }

// })

// // REMOVE-EXPENSE
// const removeExpense = ({ id } = {}) => ({
//     type: 'REMOVE_EXPENSE',
//     id
// })

// // EDIT-EXPENSE
// const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// })

// // SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });

// // SORT_BY_AMOUNT
// const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// });

// // SORT_BY_DATE
// const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// });

// // SET_START_DATE
// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// })

// // SET_END_DATE
// const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// })




// //Reducers

// const expensesDefaultState = []

// const expensesReducer = (state = expensesDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [
//                 ...state,
//                 action.expense
//             ];
//         case 'REMOVE_EXPENSE':
//             return state.filter(({ id }) => id !== action.id);
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if (expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     };
//                 } else {
//                     return expense;
//                 };
//             });
//         default:
//             return state;
//     }
// }

// //Filter reducer

// const filtersDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// }


// const filtersReducer = (state = filtersDefaultState, action) => {
//     switch (action.type) {

//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             };
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             };
//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             };
//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             }
//         default:
//             return state;
//     }
// }

// // timestamps (miliseconds)
// // January 1st 1970 (unix epoch) - starting point for all timestamps
// // 33400 , 10 , -233



// //Get Visible Expenses
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if(sortBy === 'date'){
//             return a.createdAt < b.createdAt ? 1 : -1
//         } else if(sortBy === 'amount'){
//             return a.amount < b.amount ? 1 : -1
//         }
//     });

// };

// // Store

// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filtersReducer
//     })
// );

// //Subscribe
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });


// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 1000, createdAt: -1000 }));

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))


// // store.dispatch(setTextFilter('rent'));
// // store.dispatch(setTextFilter());


// store.dispatch(sortByAmount());  //Amount
// // store.dispatch(sortByDate());    //date


// // store.dispatch(setStartDate(0));  //Start date
// // store.dispatch(setStartDate());     //Undefined Start date


// // store.dispatch(setEndDate(999));    //End Date
// // store.dispatch(setEndDate());    //Undefined End Date








// // Demo State
// const demoState = {
//     expenses: [{
//         id: 'awenRandomid',
//         description: 'January rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filter: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }
