// import AppMain from './playground/portfoliobuildit.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.jsx'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore.jsx';
import { addExpense, removeExpense, editExpense } from './actions/expenses.jsx';
import { setTextFilter } from './actions/filters.jsx';
import getVisibleExpenses from './selectors/visibleExpenses.jsx';
import 'react-dates/initialize';    //This is necessary for Single Date Picker


var app = document.getElementById('content');


const store = configureStore();


store.dispatch(addExpense({ description: 'water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 100 }));
store.dispatch(addExpense({ description: 'rent', amount: 109500 }));



console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, app);





//Provider - provides the store to all of the components that make up our application





//Higher Order Component

// example 1


// const Info = (props) => (
    //     <div>
    //         <h1>Info</h1>
    //         <p>The Info is : {props.info}</p>
    //     </div>
    // );

    // const requireAuthentication = (WrapppedComponent) => {
        //     return (props) => (
            //         <div>
            //             {props.isAuthenticated ? (
                //                 <WrapppedComponent {...props}/>
                //             ) : (
                    //                 <p>Please Log in to view the info !</p>
                    //             )
                    //             }
                    //         </div>
                    //     );
                    // };

                    // const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AuthInfo isAuthenticated={true} info="This info is from Auth info"/>, app);



//example 2

                    // const Info = () => (
                        //     <div>
                        //         <h1>Info</h1>
                        //         <p>The info is: {props.info}</p>
                        //     </div>
                        // );


                        // const withAdminWarning = (WrappedComponent) => {
                            //     return (props) => (
                                //         <div>
                                //             {props.isAdmin && <p>This is the private info please don't share</p>}
                                //             <WrappedComponent {...props}/>
                                //         </div>
                                //     );
                                // };


                                // const AdminInfo = withAdminWarning(Info);



                                // ReactDOM .render(<AdminInfo isAdmin={true} info="Hidden One"/>, app)









                                // class CustomDiv extends React.Component {
                                    //     render() {
                                        //         return(
                                            //             <div id='mainDiv'>
                                            //                 <div>Hasaan Malick</div>
                                            //                 <div>Rizwan Malick</div>
                                            //                 <div>Faizan Malick</div>
                                            //             </div>
                                            //         );
                                            //     }
                                            // }

    // class Calculator extends React.Component {
        //     render() {
    //         return (
        //             <div>
        //                 Enter First Value <input type='text' id='input1'/> <br />
    //                 Enter second Value <input type='text' id='input2'/> <br />
    //                 Enter Operator <input type='text' id='operator' />  <br />
    //             </div>
    //         )
    //     }
    // }


    // in1 = document.getElementById('input1').value;
    // in2 = document.getElementById('input2').value;
    // x = document.getElementById('operator').value;



    // var content = document.getElementById('content');


            //Children Props

    // const Layout = (props) => {
    //     return (
    //         <div>
    //             <p>Header</p>
    //             {props.children}
    //             <p>Footer</p>
    //         </div>
    //     );
    // };

    // ReactDOM.render((
    //     <Layout>
    //         <div>
    //             <h1>Page Title</h1>
    //             <p>This is my Page</p>
    //         </div>
    //     </Layout>)
    //     , app);