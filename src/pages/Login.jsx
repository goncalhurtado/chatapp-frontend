import React, { useState, useContext } from "react";
import { axiosInstance } from "../config/axiosInstance";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    e.preventDefault();
    setError({
      status: false,
      message: "",
    });

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/login", input);
      setLoading(false);
      setUser(response.data.data);
      navigate("/");
    } catch (error) {
      console.error(error.response.data.message);
      setError({
        status: true,
        message: error.response.data.message || "An error occurred",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          margin: "auto",
        }}
      >
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        />
        <p style={{ height: 25 }}>{error.status && error.message}</p>

        <button disabled={loading} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
