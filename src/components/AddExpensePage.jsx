import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm.jsx';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses.jsx';

const AddExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    props.history.push('/');
                }}
            />
        </div>
    );
}



export default connect()(AddExpensePage);