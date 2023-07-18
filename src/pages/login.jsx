import React, { useState } from "react";
import LoginImage from "../assets/svgs/login-illustration.svg";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = () => {
    console.log("username", username);
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextInput
              type="text"
              placeholder="Username"
              onTextChange={(text) => {
                setUsername(text);
              }}
              value={username}
            />
            <TextInput
              type="password"
              placeholder="Password"
              onTextChange={(text) => {
                setPassword(text);
              }}
              value={password}
            />
            <button style={styles.button} onClick={onLogin}>
              Login
            </button>
            <div style={{ marginTop: 20 }}>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                Don't have an account?
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 10,
                  textDecoration: "underline",
                  textDecorationColor: "#6315eb",
                  color: "#6315eb",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/signup")}
              >
                Signup
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={LoginImage} alt="React Logo" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "40px",
    height: "100%",
    backgroundColor: "rgba(24, 92, 205, 0.31)",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    width: "60%",
    padding: 20,
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#6315eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "60%",
  },
};
