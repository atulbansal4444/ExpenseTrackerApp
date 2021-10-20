import React from 'react';
import '../componentStyling/ExpenseItem.css';
import DateComponent from './DateComponent';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <DateComponent date= {props.date} />
            <div className="expense-item__description">
                <h2> { props.title } </h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;