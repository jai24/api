import React, { useState } from "react";
// import './style.css'

export default function Home() {

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  })

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  })

  const handleInput = (e) => {
    setData({
      ...data, [e.target.name]: e.target.name === "checkbox" ? e.target.checked : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let errors = {}
    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required"
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required"
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required"
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile number is required"
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required"
    }
    setErrors(errors)
    if (Object.keys(errors).length > 0) return
    else {
      alert("Form submitted sucessfully")
      localStorage.setItem("userData", JSON.stringify(data))
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      })
    }
  }

  return (
    <div className="container">
      <h2 className="leftHeading">Discover new things on Superapp</h2>
      <form onSubmit={handleSubmit} >
      <h1>Super app</h1>
      <p className="p1">Create your new account</p>
        <input type="text" placeholder=" Name" name='name' value={data.name} onChange={handleInput} />
        <span style={{ color: 'red' }}>{errors.name}</span>
        <input type="text" placeholder=" UserName" name='username' value={data.username} onChange={handleInput} />
        <span style={{ color: 'red' }}>{errors.username}</span>
        <input type="text" placeholder=" Email" name="email" value={data.email} onChange={handleInput} />
        <span style={{ color: 'red' }}>{errors.email}</span>
        <input type="text" placeholder=' Mobile' name="mobile" value={data.mobile} onChange={handleInput} />
        <span style={{ color: 'red' }}>{errors.mobile}</span>
        <div>
          <input type="checkbox" id="checkbox" name="checkbox" checked={data.checkbox} onChange={handleInput} />
          <label className="checkbox" htmlFor="checkbox">&nbsp;&nbsp;Share my registeration data with Superapp</label>
        </div>
        <span style={{ color: 'red' }}>{errors.checkbox}</span>
        <button type="submit">SIGN UP</button>
        <p className="terms">By clicking on Sign up. you agree to Superapp <span className="highlight">Terms and Conditions of Use </span></p>
        <p className="terms">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="highlight">Privacy Policy</span></p>
      </form>

    </div>
  )
}
