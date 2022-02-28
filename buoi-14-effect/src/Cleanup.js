import {useState} from 'react'
import Contact from './Contact';
const Cleanup = () => {

    const [visible, setVisible]=useState(true)

    const handleChangeVisible=()=>{
        setVisible(!visible)
    }
    return (
        <div style={{height: 2000}}>
            <button onClick={handleChangeVisible}>Show/Hide</button>
            {visible ? <Contact />:null}
        </div>
    );
};

export default Cleanup;
