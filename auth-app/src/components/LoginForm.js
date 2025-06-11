import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData);
    if (!success) {
      setError("Wrong username or password, Try Again !");
    } else {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="auth-input"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="auth-input"
      />
      {error && <p className="auth-error">{error}</p>}
      <button type="submit" className="auth-button">Login</button>
    </form>
  );
};

export default LoginForm;
