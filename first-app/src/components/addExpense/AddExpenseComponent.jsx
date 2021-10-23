import React from 'react'
import '../componentStyling/AddExpense.css';
import CreateExpenseForm from './CreateExpenseForm';

const AddExpenseComponent = (props) => {
    const saveExpenseHandler = (expenseData) => {
        const refExpenseData = {
            id: Math.random().toString(),
            ...expenseData,
        }

        props.onAddExpense(refExpenseData);
    }

    return (
        <div className="new-expense">
            <CreateExpenseForm
                onSaveExpanseData={saveExpenseHandler} />
        </div>
    )
}

export default AddExpenseComponent;
