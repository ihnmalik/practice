import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from './ExpenseListFilter.jsx';



const ExpensifyPage = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
};


export default ExpensifyPage;