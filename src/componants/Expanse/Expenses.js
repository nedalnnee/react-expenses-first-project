import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    useState(props.items);


    const [filteredYear, setYear] = useState(new Date().getFullYear());
    const filteredYearChangeHandler = selectedYear => {
        setYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
            // must be a == NOT ===
            return expense.date.getFullYear() == filteredYear;
        }
    )

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredYearChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}
export default Expenses;