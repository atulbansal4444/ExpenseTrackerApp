import React from 'react'
import '../componentStyling/AddExpense.css';
import CreateExpenseForm from './CreateExpenseForm';

const AddExpenseComponent = () => {
    return (
        <div className="new-expense">
            <CreateExpenseForm />
        </div>
    )
}

export default AddExpenseComponent;
