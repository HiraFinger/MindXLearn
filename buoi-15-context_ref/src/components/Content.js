import { useRef, useState } from "react";

const Content = () => {

    return (
        <div className='center border flex-1 column'>
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
        </div>
    );
};
const Component = () => {
    const inputRef = useRef(null);
    const timerRef=useRef(null);
    const [count, setCount]=useState(0);
    const handleFocus = () => {
        inputRef.current.focus();
    };
    const handleStart =()=>{
        timerRef.current=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)
    }
    const handleStop =()=>{
        clearInterval(timerRef.current)
    }
    return (
        <div>
            <input ref={inputRef} type="text"></input>
            <button onClick={handleFocus}>Say</button>
            <button onClick={handleStart}>Start</button>
            {count}
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};
export default Content;
