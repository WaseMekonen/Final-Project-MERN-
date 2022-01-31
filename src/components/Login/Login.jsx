import { React, useEffect } from "react";
import styles from "./login.module.css";
import { useState } from "react";
import { FIREBASE_KEY } from "../../../logic/key";
import axios from "axios";

const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = () => {
    axios
      .post(URL, {
        email,
        password,
      })
      .then((response) => {
        () => {
          setAuth(response.data);
          console.log(response.data);
        };
      })
      .catch((err) => {
        console.error(err);
        setError(error);
      });
  };

  // useEffect(() => {
  //   signIn();
  // }, []);

  return (
    <div>
      <form
        className={styles.login}
        onSubmit={(e) => {
          e.preventDefault();
          signIn();
          e.target[0].value = "";
          e.target[1].value = "";
        }}
      >
        <div className={styles.headline}>
          <h2>Sign In</h2>
        </div>
        <div className={styles.formInputs}>
          <div className={styles.formInputsInput}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            {error ? (
              <p style={{ color: "red" }}>Wrong password! try again</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.loginBtnContainer}>
            <input className={styles.loginBtn} type="submit" value="SignIn" />
          </div>
        </div>
        <div></div>

        <div className={styles.haveAcount}>Do not have an account?</div>
      </form>
    </div>
  );
}

export default Login;
