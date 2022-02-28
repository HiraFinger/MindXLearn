import MenuBar from "./MenuBar";

const Header = (props) => {
    return (
        <div className="flex justify-between item-center border">
            <h3>Book Store</h3>
            <MenuBar isLoggedin={props.isLoggedin}/>
        </div>
    );
};

export default Header;
