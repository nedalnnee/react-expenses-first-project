import "./ExpensesList.css";
import Item from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <p className="expenses-list__fallback">No Expenses</p>;
    } else {
        return props.items.map(expense =>
            <Item
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
    }

}

export default ExpensesList;