import {useContext} from 'react'
import AuthCtx from '../authContext';

const MenuBar = () => {
    const authCtx=useContext(AuthCtx)
    return (
        <div className="center menu-bar">
            {authCtx.isLoggedin ? (
                <>
                    <div>Cart</div>
                    <div>Profile</div>
                    <div>About Us</div>
                </>
            ) : (
                <div>Login</div>
            )}
        </div>
    );
};

export default MenuBar;
