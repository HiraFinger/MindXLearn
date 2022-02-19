import { useState } from "react";
import ExpenseItem from "../expenseItem";
import Card from "../card";
import Chart from "../chart";
import "./index.css";

const Expenses = (props) => {
    const expenseItems = props.expenseItems;
    const [selectedYear, setSelectedYear] = useState("2020");

    const handleOnYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const filteredExpenseItem = expenseItems.filter((item) => {
        return item.date.getFullYear() === Number(selectedYear);
    });
    return (
        <Card className="expenses">
            <div className="expense-filter">
                <span>Filter by year:</span>
                <select value={selectedYear} onChange={handleOnYearChange}>
                    {/* <option value="">Select Year</option> */}
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <Chart data={filteredExpenseItem} />
            {filteredExpenseItem.length > 0 ? (
                filteredExpenseItem.map((item) => {
                    return <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} important={item.important}/>;
                })
            ) : (
                <div className="expense-nodata">No Data </div>
            )}
        </Card>
    );
};

export default Expenses;
