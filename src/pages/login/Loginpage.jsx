import React, { useState } from "react";
import { testnewApi } from "../../apis/Api";

function Loginpage() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login function


  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  var validation = () => {
    let isValid = true;
    if (email === '' || email.includes('@' === false)) {
      setEmailError('Email is Empty or Invalid')
      isValid = false;
    }
    if (password.trim() === '') {
      setPasswordError('Please enter Password')
      isValid = false;
    }
    return isValid;
  }

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleLogin = (e) => {
    // Here you can implement your login logic using email and password
    // For demonstration, I'm just logging the values
    e.preventDefault()


    if (!validation()) {
      return; //stop the process
    }
    console.log(email, password)

    // You can call your API function here
    // For example:
    // testnewApi(email, password).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <div className="container">
      <h1>Login to your Account!</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address : {email}
        </label>
        <input
          type="email"

          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {
          emailError && <p className='text-danger' >{emailError}</p>
        }
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {
          passwordError && <p className='text-danger' >{passwordError}</p>
        }
      </div>
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Loginpage;
