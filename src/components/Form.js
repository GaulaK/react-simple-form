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
}) => {
  return (
    <>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          placeholder="Jean Dupont"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        ></input>
        <h2>Email</h2>
        <input
          placeholder="jeandupont@lereacteur.io"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <h2>Password</h2>
        <input
          placeholder="lErEaCtEuR202"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <h2>Confirm your password</h2>
        <input
          placeholder="lErEaCtEuR202"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        ></input>
        <input className="submit-button" type="submit" value="Register" />
      </form>
    </>
  );
};

export default Form;
