import React from "react";
import "./SignDetailStyles.css";

function SignDetail() {
  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <form>
        <input placeholder="username" type="text" />
        <input placeholder="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default SignDetail;
