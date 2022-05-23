import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
    const date = props.date;  // 2009-11-10
    const month = date.toLocaleString('default', {month: 'long'});
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{props.date.getDay()}</div>
            <div className="expense-date__year">{props.date.getFullYear()}</div>

        </Card>

    );
}

export default ExpenseDate;