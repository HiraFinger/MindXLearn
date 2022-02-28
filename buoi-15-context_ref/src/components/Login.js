import { useState, useContext } from "react";
import AuthCtx from "../authContext"
import LangCtx from '../langContext'
import getText from '../lang'
const Login = () => {
    const [value, setValue] = useState("");
    const authCtx=useContext(AuthCtx)
    const langCtx=useContext(LangCtx)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!value){
            return;
        }
        authCtx.toggleIsLoggedIn();
    }

    return (
        <form onSubmit={handleSubmit} className='column center'>
            <h4>{getText('welcome_message', langCtx.lang)}</h4>
            <p>{getText('username_label', langCtx.lang)}</p>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
            <button>Login</button>
        </form>
    );
};

export default Login;
