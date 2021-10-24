import React, {useState} from 'react'
import '../componentStyling/AddExpense.css';
import CreateExpenseForm from './CreateExpenseForm';

const AddExpenseComponent = (props) => {
    const [showForm, setShowForm] = useState(props.showForm);

    const saveExpenseHandler = (expenseData) => {
        const refExpenseData = {
            id: Math.random().toString(),
            ...expenseData,
        }

        props.onAddExpense(refExpenseData);
    };

    const handleAddNewExpense = () => {
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false)
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={handleAddNewExpense}>Add New Expense</button>}
            {showForm && <CreateExpenseForm
                onCancelClick={handleCancel}
                onSaveExpanseData={saveExpenseHandler} />}
        </div>
    )
}

export default AddExpenseComponent;
