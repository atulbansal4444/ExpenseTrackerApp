import React from 'react';
import '../componentStyling/ExpensesComponent.css';
import ExpenseItem from './ExpenseItem';

const ExpensesComponent = (props) => {
    const expenses = props.expenses;
    return (
        <div className = "expenses">
            <ExpenseItem
                title={expenses[0].title}
                id={expenses[0].id}
                amount={expenses[0].amount}
                date={expenses[0].date} />
            <ExpenseItem
                title={expenses[1].title}
                id={expenses[1].id}
                amount={expenses[1].amount}
                date={expenses[1].date} />
            <ExpenseItem
                title={expenses[2].title}
                id={expenses[2].id}
                amount={expenses[2].amount}
                date={expenses[2].date} />
            <ExpenseItem
                title={expenses[3].title}
                id={expenses[3].id}
                amount={expenses[3].amount}
                date={ expenses[3].date } />
        </div>
    );
}

export default ExpensesComponent;