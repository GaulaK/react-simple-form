import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

function App() {
  // User Informations States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

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
    // console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      setSamePassword(false);
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setSamePassword(true);
      setAccountCreated(true);
    }
    event.preventDefault();
  };

  const handleModify = () => {
    // console.log("Ask to change informations");
    setAccountCreated(false);
  };

  // Password Compatibility Manager State
  const [samePassword, setSamePassword] = useState(true);

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
            samePassword={samePassword}
            seePassword={seePassword}
            setSeePassword={setSeePassword}
            seeConfirmPassword={seeConfirmPassword}
            setSeeConfirmPassword={setSeeConfirmPassword}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
