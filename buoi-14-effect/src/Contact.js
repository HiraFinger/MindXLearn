import { useState, useEffect } from "react";
let scrollingPosition = 0;
const Contact = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [size, setSize] = useState("10");
    const [navbarVisible, setNavbarVisible] = useState(true);
    // const [scrollingPosition, setScrollingPosition] = useState(0);

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://randomuser.me/api/?results=${size}`)
            .then((res) => res.json())
            .then((resJson) => {
                setUsers(resJson.results);
                setIsLoading(false);
            });
    }, [size]);

    useEffect(() => {
        const handleScroll = (e) => {
            const newPosition = e.target.documentElement.scrollTop;
            console.log(newPosition);
            if (scrollingPosition < newPosition && newPosition >40) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }
            scrollingPosition = newPosition;
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div style={{ position: "relative", paddingTop: 80 }}>
            {navbarVisible ? <Navbar /> : null}
            <select onChange={handleSizeChange} value={size}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            {isLoading ? (
                <div>...Is Loading</div>
            ) : (
                users.map((user) => {
                    return (
                        <div key={user.login.uuid}>
                            <span>{user.name.title}</span>
                            <span>{user.name.first}</span>
                            <span>{user.name.last}</span>
                        </div>
                    );
                })
            )}
        </div>
    );
};

const Navbar = () => {
    return (
        <div
            style={{
                backgroundColor: "pink",
                color: "blue",
                height: 50,
                fontSize: 32,
                position: "fixed",
                top: 50,
                left: 0,
                width: "100%",
            }}
        >
            Contact App
        </div>
    );
};

export default Contact;
