import React, { useState } from 'react'

const Registerpage = () => {
  //Coding section
  var validate = () => {
    var isValid = true;
    if (firstName.trim() === '') {
      setFirstNameError('Please enter firstname')
      isValid = false;
    }
    if (lastName.trim() === '') {
      setLastNameError('Please enter Last name')
      isValid = false;
    }
    if (email.trim() === '') {
      setEmailError('Please enter email')
      isValid = false;
    }
    if (password.trim() === '') {
      setPasswordError('Please enter Password')
      isValid = false;
    }
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please enter password')
      isValid = false;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError('Please enter same')
      isValid = false;
    }
    return isValid;
  }

  //Make State variable
  //Format
  //(variableName, ChangingVarName)= States
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //State for error
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')


  // Make function to save the state
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    var isValid = validate()
    if (!isValid) {
      return; //stop the process
    }
    console.log(firstName, lastName, email, password, confirmPassword)
  }


  return (
    <>
      <div className="m-4">
        <h1>Create an Account!</h1>

        <form className="w-50">
          <label >First Name:{firstName}</label>
          <input type="text" onChange={handleFirstName} className="form-control" placeholder="Enter First Name" />

          {
            firstNameError && <p className='text-danger' >{firstNameError}</p>
          }

          <label className="mt-3">Last Name</label>
          <input type="text" onChange={handleLastName} className="form-control mt-3" placeholder="Enter Last Name" />

          {
            lastNameError && <p className='text-danger' >{lastNameError}</p>
          }

          <label className="mt-3">Email</label>
          <input type="email" onChange={handleEmail} className="form-control mt-3" placeholder="Enter Email Address" />

          {
            emailError && <p className='text-danger' >{emailError}</p>
          }

          <label className="mt-3">Password</label>
          <input type="text" onChange={handlePassword} className="form-control mt-3" placeholder="Enter Password" />

          {
            passwordError && <p className='text-danger' >{passwordError}</p>
          }

          <label className="mt-3">Confirm Password</label>
          <input type="text" onChange={handleConfirmPassword} className="form-control" placeholder="Enter Password Again" />
          {
            confirmPasswordError && <p className='text-danger' >{confirmPasswordError}</p>
          }

          <button onClick={handleSubmit} className="btn btn-success mt-3 w-100">Create Account</button>
        </form>

      </div>
    </>
  )
};

export default Registerpage;

//make ui complete
//make a state(variable) to save value of each input temporarily
//change everytime we write something