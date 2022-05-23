import Expenses from "./componants/Expanse/Expenses";
import NewExpense from "./componants/NewExpense/NewExpense";
import {useState} from "react";
import Chart from "./componants/Chart/Chart";

const dummyItems = [{
    title: "Car ", amount: 1250, date: new Date(2022, 10, 5), id: 0
}, {
    title: "House", amount: 10000, date: new Date(2023, 5, 22), id: 1
}, {
    title: "Flight to Japan", amount: 250, date: new Date(2025, 2, 12), id: 2
}, {
    title: "Electricity", amount: 10, date: new Date(2022, 8, 1), id: 3
},

]

function App() {

    let [items, setItems] = useState(dummyItems);

    const newExpenseHandler = (expenseData) => {
        setItems((oldItems) => {
            return [expenseData, ...oldItems];
        })

    }
    return (
        <div className="App">
            <h1>Hello there</h1>
            <NewExpense onNewExpenseAdd={newExpenseHandler} itemsLength={items.length}/>
            <Expenses items={items}/>
        </div>
    );
}


export default App;
