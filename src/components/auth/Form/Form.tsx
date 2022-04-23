import { AuthForm } from "../../../types/types";

import "./Form.css";

export const Form: React.FC<AuthForm> = ({
  email,
  handleEmail,
  handleBlur,
  emailError,
  password,
  handlePassword,
  passwordError,
  formValid,
  handleSubmit,
  btnValue,
  emailActive,
  passwordActive,
}) => {
  const invalidEmail = emailActive && emailError;
  const invalidPassword = passwordActive && passwordError;

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(email, password);
      }}
    >
      <input
        className={invalidEmail ? "input input-error" : "input"}
        type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={(e) => handleEmail(e)}
        onBlur={(e) => handleBlur(e)}
      />
      {invalidEmail && <div>{emailError}</div>}

      <input
        className={invalidPassword ? "input input-error" : "input"}
        type="password"
        name="password"
        autoComplete="on"
        value={password}
        placeholder="password"
        onChange={handlePassword}
        onBlur={(e) => handleBlur(e)}
      />
      {invalidPassword && <div>{passwordError}</div>}

      <button disabled={!formValid} className="btn" type="submit">
        {btnValue}
      </button>
    </form>
  );
};
