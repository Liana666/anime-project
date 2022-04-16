import { FC, useEffect } from "react";
import { useState } from "react";

type FormType = {
    btnValue: string
    handleSubmit: (email: string, password: string) => void | React.FormEventHandler<HTMLInputElement>
}

const Form: FC<FormType> = ({ btnValue, handleSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);
    const [emailError, setEmailError] = useState('email cannot be empty');
    const [passwordError, setPasswordError] = useState('password cannot be empty');
    const [formValid, setFormValid] = useState(false);
    const invalidEmail = emailActive && emailError;
    const invalidPassword = passwordActive && passwordError;

    useEffect(() => {
        emailError || passwordError ? setFormValid(false) : setFormValid(true);
    }, [emailError, passwordError])


    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const isValidEmail = re.test(String(e.target.value).toLowerCase());

        return isValidEmail ? setEmailError('') : setEmailError('invalid email');
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);

        const isValidPassword = e.target.value.length >= 6;

        return isValidPassword ? setPasswordError('') : setPasswordError('invalid password')
    }


    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setEmailActive(true);
                break;

            case 'password':
                setPasswordActive(true);
                break;
        }
    }

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <input
                className={invalidEmail ? "input input-error" : "input"}
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={e => handleEmail(e)}
                onBlur={e => handleBlur(e)}
            />
            {invalidEmail && <div>{emailError}</div>}

            <input
                className={invalidPassword ? "input input-error" : "input"}
                type="password"
                name="password"
                autoComplete="on"
                value={password}
                placeholder="password"
                onChange={e => handlePassword(e)}
                onBlur={e => handleBlur(e)}
            />
            {invalidPassword && <div>{passwordError}</div>}

            <button
                disabled={!formValid}
                className="btn"
                onClick={() => handleSubmit(email, password)}
                type="submit"
            >
                {btnValue}
            </button>

        </ form>
    )
}

export default Form;