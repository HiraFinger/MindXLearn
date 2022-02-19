import {useState} from "react"
import Expenses from "./components/expenses";
import Form from "./components/form";
import "./App.css"
function App() {
    const [expenseItems, setExpenseItems] =useState([
        { date: new Date("2022-02-01"), title: "New Phone", amount: 800 },
        { date: new Date("2022-02-11"), title: "New Pants", amount: 100 },
        { date: new Date("2022-02-08"), title: "New Laptop", amount: 1200 },
    ]);

    const handleAddExpense=()=>{

    }

    return (
      
        <div className="App">
          <Form onSubmit={handleAddExpense}/>
          <Expenses expenseItems={expenseItems} />
        </div>
    );
}

export default App;
