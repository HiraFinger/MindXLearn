import {NavLink, Outlet} from "react-router-dom"
const AboutUs = () =>{
    return (
    <div>
        <div>
            <ul>
                <li><NavLink to="/about-us/members">Members</NavLink></li>
                <li><NavLink to="/about-us/contact">Contacts</NavLink></li>
                <li><NavLink to="/about-us/address">Address</NavLink></li>
            </ul>
        </div>
        <Outlet />
    </div>
    )
}


export const Members=()=>{
    return (<div>Member list</div>)
}
export const Contact=()=>{
    return (<div>Contact</div>)
}
export const Address=()=>{
    return (<div>Address</div>)
}
export default AboutUs