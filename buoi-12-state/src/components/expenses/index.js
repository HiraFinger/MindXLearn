import ExpenseItem from "../expenseItem"
import Card from "../card"

const Expenses =(props)=>{
    const expenseItems=props.expenseItems
    let totalAmount=0;
    for(let i=0;i<expenseItems.length;i++){
        totalAmount=totalAmount+expenseItems[i].amount;
    }
    return (
        <Card className="expenses">
            <div>{totalAmount}</div>
            <ExpenseItem date={expenseItems[0].date} title={expenseItems[0].title} amount={expenseItems[0].amount} />
            <ExpenseItem date={expenseItems[1].date} title={expenseItems[1].title} amount={expenseItems[1].amount} />
            <ExpenseItem date={expenseItems[2].date} title={expenseItems[2].title} amount={expenseItems[2].amount} />
        </Card>
    )
}

export default Expenses