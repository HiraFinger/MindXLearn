import {createContext} from 'react'

const AuthCtx= createContext({
    isLoggedin: false, toggleIsLoggedIn: ()=>{},
})

export default AuthCtx