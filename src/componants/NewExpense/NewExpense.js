import "./NewExpense.css"
import ExpenseForm from "./ExpenseFrom";
import {useState} from "react";

const NewExpense = (props) => {

    useState(props.itemsLength)
    const newExpenseHandler = (newExpenseDate) => {
        const expenseDate = {
            ...newExpenseDate,
            id: props.itemsLength
        }
        props.onNewExpenseAdd(expenseDate)
    }

    return (
        <ExpenseForm onNewExpense={newExpenseHandler}/>
    )
}

export default NewExpense;