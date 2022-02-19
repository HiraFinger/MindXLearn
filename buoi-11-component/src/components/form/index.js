import { useState } from "react";

const Form = () => {
    const [count, setCount] = useState(0);

    const onIncreaseClick = () => {
        setCount(count + 1);
    };
    let style={};
    if(count %2 !== 0){
        style.backgroundColor ="yellow"
    }
    return (
        <div>
            <button onClick={onIncreaseClick}>Increase</button>
            <span id="count" style={style}>{count}</span>
        </div>
    );
};

export default Form;
