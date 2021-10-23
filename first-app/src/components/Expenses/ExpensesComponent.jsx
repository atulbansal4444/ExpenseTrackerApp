import React, { useState } from 'react';
import '../componentStyling/ExpensesComponent.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';

const ExpensesComponent = (props) => {
    const [year, setYear] = useState('');

    const setFilteredYear = (filteredYear) => {
        setYear(filteredYear);
    };
    
    return (
        <div className="expenses">
            <ExpensesFilter
                selectedYear={year}
                onSelectYear={setFilteredYear} />
            {props.expenses.map((expense, i) =>
                (<ExpenseItem
                    title={expense.title}
                    id={expense.id}
                    key={expense.id}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </div>
    );
}

export default ExpensesComponent;