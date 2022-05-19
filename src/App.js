import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password.length < 5) {
      alert("provide must be more than 5 characters");
    } else {
      console.log(data);
    }
  };
  return (
    <div className="App">
      <center>
        <form onSubmit={submitHandler}>
          <label> Email </label>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
          /> <br /> <br />
          <label> Password </label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
          />{" "}
          <br /> <br />
          <input type="submit" value="Login" />
        </form>
      </center>
    </div>
  );
};

export default App;
