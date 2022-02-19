import { useState } from "react";
import "./index.css";
import Card from "../card"
const Form = (props) => {
    // const [title,setTitle]=useState("")
    // const [date,setDate]=useState("")
    // const [amount,setAmount]=useState(0)
    const [formVisible, setFormVisible]=useState(false)

    const [formValue, setFormValue] = useState({
        title: "",
        date: "",
        amount: 0,
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onAddExpense(formValue);
        handleFormReset();
    };
    const handleFormReset = () => {
        setFormValue({
            title: "",
            date: "",
            amount: 0,
        });
        setFormVisible(!formVisible)
    };

    const handleFormValueChange = (event) => {
        // Logic
        setFormValue((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    };

    const showForm=()=>{
        setFormVisible(!formVisible)
    }
    if(!formVisible){
        return(
        <Card className="form_container">
            <button onClick={showForm}>Add new expense</button>
        </Card>
        
        )
    }
    return (
        <Card className="form_container">
            <form onSubmit={handleFormSubmit} onReset={handleFormReset} className="form">
                <div className="form-input_container">
                    <div className="form-input__item">
                        <label>Title</label>
                        <input name="title" type="text" value={formValue.title} onChange={handleFormValueChange} />
                    </div>
                    <div className="form-input__item">
                        <label>date</label>
                        <input name="date" type="date" value={formValue.date} onChange={handleFormValueChange} />
                    </div>
                    <div className="form-input__item">
                        <label>Amount</label>
                        <input name="amount" type="number" value={formValue.amount} onChange={handleFormValueChange} />
                    </div>
                </div>
                <div className="form-action">
                    <button type="submit" >
                        Add Expense
                    </button>
                    <button type="reset">Cancel</button>
                </div>
            </form>
        </Card>
    );
};

export default Form;
