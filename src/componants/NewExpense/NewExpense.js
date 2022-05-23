import "./NewExpense.css"
import ExpenseForm from "./ExpenseFrom";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    useState(props.itemsLength)
    const newExpenseHandler = (newExpenseDate) => {
        const expenseDate = {
            ...newExpenseDate,
            id: props.itemsLength
        }
        props.onNewExpenseAdd(expenseDate)
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onNewExpense={newExpenseHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    )
}

export default NewExpense;