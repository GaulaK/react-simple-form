import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

import { useState } from "react";

function App() {
  // User Informations States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  // Pages Manager States
  const [accountCreated, setAccountCreated] = useState(false);

  const handleSubmit = (event) => {
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setAccountCreated(true);
    }
    event.preventDefault();
  };

  const handleModify = (event) => {
    console.log("Ask to change informations");
    setAccountCreated(false);
  };

  return (
    <div className="App">
      <div className="container">
        {accountCreated ? (
          <StepTwo
            name={name}
            email={email}
            password={password}
            handleModify={handleModify}
          />
        ) : (
          <Form
            handleSubmit={handleSubmit}
            name={name}
            handleNameChange={handleNameChange}
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            confirmPassword={confirmPassword}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            accountCreated={accountCreated}
            setAccountCreated={setAccountCreated}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
