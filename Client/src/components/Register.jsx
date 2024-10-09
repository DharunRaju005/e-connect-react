import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    institution: "",
    eventName: new URLSearchParams(window.location.search).get("eventName"),
    club: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", formData)
      .then((res) => {
        alert("Registered successfully!");
        window.location.href = "/events"; // Redirect to events page
      })
      .catch((err) => console.error("Registration failed: " + err));
  };
  
  return (
    <div style={styles.formContainer}>
      <h1 style={styles.header}>Register for {formData.eventName}</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} style={styles.input} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} style={styles.input} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={styles.input} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} style={styles.input} />
        <input type="text" name="institution" placeholder="Institution" onChange={handleChange} style={styles.input} />
        <select name="club" onChange={handleChange} style={styles.input}>
          <option value="">Choose Club</option>
          <option value="clubA">Club A</option>
          <option value="clubB">Club B</option>
          <option value="clubC">Club C</option>
        </select>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    padding: "20px",
    backgroundColor: "#e0f8e0",
  },
  header: {
    textAlign: "center",
    color: "#0d8b0d",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #006400",
    width: "80%",
  },
  submitButton: {
    backgroundColor: "#006400",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Register;
