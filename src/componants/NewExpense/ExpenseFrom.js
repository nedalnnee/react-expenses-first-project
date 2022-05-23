import "./ExpenseForm.css"
import {useState} from "react";

const ExpenseForm = (props) => {
        const errorClassName = " red-border ";

        const [classes, setClasses] = useState({
            titleClasses: "cas",
            amountClasses: "",
            dateClasses: ""
        })
        const [inputDate, setInput] = useState({
            titleInput: "",
            amountInput: "",
            dateInput: ""
        });


        const titleChangeHandler = (event) => {
            const value = event.target.value;
            setClasses(() => {
                    let newClasses = classes.titleClasses;
                    if (value.length > 10) {
                        if (!classes.titleClasses.includes(errorClassName))
                            newClasses = classes.titleClasses + errorClassName
                    }

                    if (value.length <= 10) {
                        newClasses = classes.titleClasses.replaceAll(errorClassName, "")
                    }
                    return {
                        ...classes,
                        titleClasses: newClasses
                    }
                }
            )
            setInput((prevState) => {
                return {
                    ...prevState,
                    titleInput: value
                }

            })
        }
        const amountChangeHandler = (event) => {
            const value = event.target.value;
            setInput((prevState) => {
                return {
                    ...prevState,
                    amountInput: value
                }
            })
        }
        const dateChangeHandler = (event) => {
            const value = event.target.value;
            setInput((prevState) => {
                return {
                    ...prevState,
                    dateInput: value
                }
            })
        }

        const submitHandler = (event) => {
            event.preventDefault();
            const expenseData =
                {
                    title: inputDate.titleInput,
                    amount: inputDate.amountInput,
                    date: new Date(inputDate.dateInput)
                };
            props.onNewExpense(expenseData)

            setInput({
                titleInput: "",
                dateInput: "",
                amountInput: ""
            })

        }

        return (
            <div className="new-expense" onSubmit={submitHandler}>
                <form action="">
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input className={classes.titleClasses} value={inputDate.titleInput}
                                   onChange={titleChangeHandler} type="text"/>
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input onChange={amountChangeHandler} value={inputDate.amountInput} type="number" min="0.01"
                                   max="10000000" step="0.01"/>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input onChange={dateChangeHandler} value={inputDate.dateInput} type="date" min="2022-01-01"
                                   max="2025-12-31"
                            />
                        </div>
                    </div>

                    <div className="new-expense__actions">
                        <button type="button" onClick={props.onCancel}>Cancel</button>

                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            </div>
        );
    }
;

export default ExpenseForm;