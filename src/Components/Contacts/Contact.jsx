import React, { useState } from "react";
import "../Contacts/Contact.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [mes, setMes] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setpassword(e.target.value);
  };
  const changeMes = (e) => {
    setMes(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log({ email, name, password });
    if (!email || !password) {
      alert("Fields are required");
    } else {
      alert("Your form is submitted");
    }
  };
  return (
    <div>
      <h1 className="cont">CONTACT US</h1>
      <form onSubmit={handleChange} className="form">
        <br />
        <br />
        <h1>Email</h1>
        <input
          className="input"
          placeholder="Enter Your Email"
          type="text"
          onChange={changeEmail}
          value={email}
          required
          autoFocus
        />
        <br />
        <br />
        <h1>Name</h1>
        <input
          className="input"
          placeholder="Enter Your Name"
          type="text"
          onChange={changeName}
          value={name}
          required
          autoFocus
        />
        <br />
        <br />
        <h1>Contact Num</h1>
        <input
          className="input"
          placeholder="Enter Your Phone num"
          type="number"
          onChange={changePassword}
          value={password}
          required
          autoFocus
        />
        <br />
        <br />
        <h1>Message</h1>
        <textarea
          className="input"
          placeholder="Enter Your Message"
          type="Text"
          onChange={changeMes}
          value={mes}
          required
          autoFocus
        />
        <br />
        <br />
        <br />
        <br />
        <input type="submit" className="btn" />
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Login;
