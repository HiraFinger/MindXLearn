import { useContext } from "react";
import LangCtx from "../langContext";

const Footer = () => {
    const langCtx = useContext(LangCtx);
    return (
        <div className="border center column">
            Made by ...
            <select
                value={langCtx.leng}
                onChange={(e) => {
                    langCtx.setLang(e.target.value);
                }}
            >
                <option value="en">English</option>
                <option value="vi">Việt Nam</option>
            </select>
        </div>
    );
};

export default Footer;
