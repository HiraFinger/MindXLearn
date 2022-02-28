import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Users from "./Users";
import NotFound from "./NotFound";
import AboutUs, { Members, Contact, Address } from "./AboutUs";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/products" element={<Products />} ></Route>
                <Route path="/products/:id" element={<ProductDetail />} ></Route>

                <Route path="/about-us" element={<AboutUs />}>
                    <Route path="members" element={<Members />} ></Route>
                    <Route path="contact" element={<Contact />} ></Route>
                    <Route path="address" element={<Address />} ></Route>
                </Route>

                <Route path="/users" element={<Users />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <footer>This is my footer</footer>
        </div>
    );
}

export default App;
