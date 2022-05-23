import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    useState(props.items);


    const [filteredYear, setYear] = useState(new Date().getFullYear());
    const filteredYearChangeHandler = selectedYear => {
        setYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
            return expense.date.getFullYear() == filteredYear;
        }
    )

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredYearChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}
export default Expenses;