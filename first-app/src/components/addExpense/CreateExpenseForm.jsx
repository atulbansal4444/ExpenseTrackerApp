import React, { useState } from 'react'
import '../componentStyling/AddForm.css';

const CreateExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    };

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveExpanseData(expenseData);
        resetToDefaultValues();
    }

    const resetToDefaultValues = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={amount}
                        onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={date}
                        onChange={dateHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'> Add Expense </button>
                </div>
            </div>
        </form>
    )
}

export default CreateExpenseForm;
