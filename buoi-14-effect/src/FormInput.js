import { useEffect, useState } from "react";

let timer = 0;

const FormInput = () => {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const valid = value.includes("@");
        setIsValid(valid);
    }, [value]);

    useEffect(() => {
        timer = setTimeout(() => {
            setDebouncedValue(value);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return (
        <div>
            <label>Email</label>
            <input
                type="text"
                value={value}
                style={{ border: isValid ? "1px solid green" : "1px solid red" }}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
            {isValid ? null : <div style={{ color: "red" }}>This is not a valid email</div>}
            {debouncedValue}
        </div>
    );
};

export default FormInput;
