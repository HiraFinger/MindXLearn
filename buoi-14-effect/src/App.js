import { useState, useEffect } from "react";
/**
 * Things don't need to be in dependencies
 * -setState
 * JS/Browser API (window, document, setTimeout, Console)
 * functions/value out side component
 */
function App() {
    const [count, setCount] = useState(0);
    const [visible, setVisibale] = useState(false);
    /**
     * 1st args: Function will run after every changes of dependencies
     * 2nd args: array of dependencies
     */
    useEffect(() => {
        console.log('count changed')
        document.title = "You just clicked";
    }, [count]);
    return (
        <div className="App">
          <button onClick={()=>{setVisibale(!visible)}}>{visible ? "Hide":"Show"}</button>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
            {visible ? count: "*"}
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}

export default App;
