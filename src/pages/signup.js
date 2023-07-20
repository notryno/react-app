import React from "react";
import SignupImage from "../assets/svgs/signup-illustration.svg";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}>
          <h1 style={{ textAlign: "center" }}>Signup</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextInput
              type="text"
              placeholder="Username"
              onTextChange={(text) => console.log("thisss", text)}
            />

            <TextInput
              type="text"
              placeholder="Email"
              onTextChange={(text) => console.log("thisss", text)}
            />
            <TextInput
              type="password"
              placeholder="Password"
              onTextChange={(text) => console.log("thisss", text)}
            />
            <TextInput
              type="password"
              placeholder="Confirm Password"
              onTextChange={(text) => console.log("thisss", text)}
            />
            <button style={styles.button}>Signup</button>
            <div style={{ marginTop: 20 }}>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                Already have an account?
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
                onClick={() => navigate("/login")}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={SignupImage} alt="React Logo" style={styles.image} />
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
    flexDirection: "column",
  },
  image: {
    width: "80%",
    height: "60%",
  },
};
