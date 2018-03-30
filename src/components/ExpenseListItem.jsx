import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense, editExpense } from '../actions/expenses.jsx';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>amount: {amount} - createdAt: {createdAt}</p>
        {/* <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button> */}
    </div>
);


// const mapStateToProps = (state) => {
//     return {
//         filter: state.filters
//     };
// };

export default ExpenseListItem;

