import React, { useState } from 'react'
import '../componentStyling/AddForm.css';

const CreateExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
        // console.log(event.target.value);
    };

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateHandler = (event) => { };

    return (
        <form>
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
