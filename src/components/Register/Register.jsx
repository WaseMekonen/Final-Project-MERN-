import React from "react";
import styles from "./Register.module.css";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <form
        className={styles.register}
        onSubmit={(e) => {
          e.preventDefault();
          signIn();
          e.target[0].value = "";
          e.target[1].value = "";
        }}
      >
        <div className={styles.headline}>
          <h2>Sign Up</h2>
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
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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
            <input className={styles.loginBtn} type="submit" value="SignUp" />
          </div>
        </div>
        <div></div>

        <div className={styles.haveAcount}>Already have an account?</div>
      </form>
    </div>
  );
}

export default Register;
