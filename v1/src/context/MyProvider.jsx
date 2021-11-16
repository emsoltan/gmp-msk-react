import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = (props) => {
  const USER = process.env.REACT_APP_USER;
  const PASSWORD = process.env.REACT_APP_PASSWORDS;
  const [form, setForm] = useState({ user: "", password: "" });
  const [auth, setAuth] = useState(false);
  const handleFormInput = (e) => {
    e.preventDefault();
    form.user === USER && form.password === PASSWORD
      ? setAuth(true)
      : setAuth(false);
    setForm({ user: "", password: "" });
  };

  return (
    <MyContext.Provider value={{ form, handleFormInput, handleFormSubmit }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
