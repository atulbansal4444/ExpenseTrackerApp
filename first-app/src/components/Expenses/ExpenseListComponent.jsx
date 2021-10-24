import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../componentStyling/ExpenseList.css';

const ExpenseListComponent = (props) => {

    let expensesContent = <p className='expenses-list__fallback'>No Expense Data.</p>;

    if (props.expenses.length === 0) {
        return expensesContent;
    }
    
    return (
        <ul className='expenses-list'>
            {props.expenses.map((expense) =>
                <ExpenseItem
                    title={expense.title}
                    id={expense.id}
                    key={expense.id}
                    amount={expense.amount}
                    date={expense.date} />
            )}
        </ul>
    )
}
export default ExpenseListComponent;
