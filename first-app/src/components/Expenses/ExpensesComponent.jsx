import React, { useState } from 'react';
import '../componentStyling/ExpensesComponent.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseListComponent from './ExpenseListComponent';

const ExpensesComponent = (props) => {
    const [year, setYear] = useState('');

    const setFilteredYear = (filteredYear) => {
        setYear(filteredYear);
    };

    const filteredList = props.expenses.filter(expense => {
        if (year === '') {
            return props.expenses;
        }
        return expense.date.getFullYear().toString() === year;
    });
    
    return (
        <div className="expenses">
            <ExpensesFilter
                selectedYear={year}
                onSelectYear={setFilteredYear} />
            <ExpenseListComponent expenses={filteredList} />
        </div>
    );
}

export default ExpensesComponent;