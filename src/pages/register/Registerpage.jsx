import React, { useState } from 'react'

const Registerpage = () => {
  //Coding section

  //Make State variable
  //Format
  //(variableName, ChangingVarName)= States
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //

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
    console.log(firstName, lastName, email, password, confirmPassword)
  }


  return (
    <>
      <div className="m-4">
        <h1>Create an Account!</h1>

        <form className="w-50">
          <label >First Name</label>
          <input type="text" onChange={handleFirstName} className="form-control" placeholder="Enter First Name" />

          <label className="mt-3">Last Name</label>
          <input type="text" onChange={handleLastName} className="form-control" placeholder="Enter Last Name" />

          <label className="mt-3">Email</label>
          <input type="email" onChange={handleEmail} className="form-control" placeholder="Enter Email Address" />

          <label className="mt-3">Password</label>
          <input type="text" onChange={handlePassword} className="form-control" placeholder="Enter Password" />

          <label className="mt-3">Confirm Password</label>
          <input type="text" onChange={handleConfirmPassword} className="form-control" placeholder="Enter Password Again" />

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