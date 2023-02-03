import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Form = ({
  handleSubmit,
  name,
  handleNameChange,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  confirmPassword,
  handleConfirmPasswordChange,
  samePassword,
  seePassword,
  setSeePassword,
  seeConfirmPassword,
  setSeeConfirmPassword,
}) => {
  return (
    <>
      {/* <FontAwesomeIcon icon="eye" />
      <FontAwesomeIcon icon="eye-slash" /> */}
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Jean Dupont"
          type="text"
          name="name"
          id="name"
          value={name}
          autoComplete="off"
          onChange={handleNameChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          placeholder="jeandupont@lereacteur.io"
          type="email"
          name="email"
          id="email"
          value={email}
          autoComplete="off"
          onChange={handleEmailChange}
        ></input>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className={!samePassword ? "red" : null}
            placeholder="lErEaCtEuR202"
            type={seePassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            autoComplete="off"
            onChange={handlePasswordChange}
          ></input>
          <FontAwesomeIcon
            className="eye-password"
            onClick={() => setSeePassword(!seePassword)}
            icon={seePassword ? "eye" : "eye-slash"}
            size="1x"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input
            className={!samePassword ? "red" : null}
            placeholder="lErEaCtEuR202"
            type={seeConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            autoComplete="off"
            onChange={handleConfirmPasswordChange}
          ></input>
          <FontAwesomeIcon
            className="eye-password"
            onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
            icon={seeConfirmPassword ? "eye" : "eye-slash"}
            size="1x"
          />
        </div>
        {!samePassword && (
          <span className="error-message">
            Les mots de passe ne sont pas identiques !
          </span>
        )}
        <input className="submit-button" type="submit" value="Register" />
      </form>
    </>
  );
};

export default Form;
