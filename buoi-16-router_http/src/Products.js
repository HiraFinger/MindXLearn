import {Link, Outlet, useSearchParams, useNavigate} from 'react-router-dom';
const Products = () =>{
    const [query, setQuery]=useSearchParams()
    console.log(query.get('q'));
    const navigate=useNavigate();
    
    return (
    <div>
        <ol>
            <li>
                <Link to="/products/1">Product 1</Link>
            </li>
            <li>
                <Link to="/products/2">Product 2</Link>
            </li>
        </ol>
        <Outlet />
        <button onClick={()=>{
            navigate("/")
        }}>
            Go to home
        </button>
        <button onClick={()=>{
            setQuery({q:"2"})
        }}>Change Query</button>
    </div>
    )
}

export default Products