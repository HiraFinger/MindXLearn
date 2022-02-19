import { useState } from "react";
import Expenses from "./components/expenses";
import Form from "./components/form";
import "./App.css";
function App() {
    const [expenseItems, setExpenseItems] = useState([
        { id: Math.random() * 1000, date: new Date("2020-02-01"), title: "New Phone", amount: 800 },
        { id: Math.random() * 1000, date: new Date("2021-05-11"), title: "New Pants", amount: 100 },
        { id: Math.random() * 1000, date: new Date("2022-07-08"), title: "New Laptop", amount: 1200, important:true },
    ]);
    const handleOnSubmit = (formValue) => {
        setExpenseItems((prev) => {
            return [
                {   
                    id: Math.random() * 1000,
                    date: new Date(formValue.date),
                    title: formValue.title,
                    amount: formValue.amount,
                },
                ...prev,
            ];
        });
    };
    return (
        <div className="App">
            <Form onAddExpense={handleOnSubmit} />
            <Expenses expenseItems={expenseItems} />
        </div>
    );
}

export default App;
