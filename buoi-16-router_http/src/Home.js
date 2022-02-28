import {Link} from "react-router-dom"
const Home = () =>{
    return (
    <div>
        This is my Home page
        <Link to="/about-us">Go to About Us</Link>
    </div>
    )
}

export default Home