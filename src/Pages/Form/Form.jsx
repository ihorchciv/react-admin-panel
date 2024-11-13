import "./Form.css";
import Input from "@mui/joy/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../store/auchSlice";

export function Form() {
  const [user, setUser] = useState({ name: "", password: "", email: "" });
  const users = useSelector(selectAllUsers);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const onLogin = () => {
    let currentUser = users.find(
      (obj) =>
        obj.name === user.name && obj.password === user.password && obj.email
    );
    if (currentUser) {
      dispatch(logIn(user));
      navigate("/users");
    }
  };

  const contentItems = {
    title: "Welcome!",
    slog: "Sign in to continue.",
    name: "Name",
    password: "Password",
    email: "Email",
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <form>
          <h3>{contentItems.title}</h3>
          <p>{contentItems.slog}</p>
          <p className="p-style">{contentItems.name}</p>
          <div className="inp-field">
            <Input
              placeholder="name"
              onChange={(e) => onChangeHandler(e.target.value, "name")}
              value={user.name}
            />
          </div>
          <p className="p-style">{contentItems.password}</p>
          <div className="inp-field">
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => onChangeHandler(e.target.value, "password")}
              value={user.password}
            />
          </div>
          <p className="p-style">{contentItems.email}</p>
          <div className="inp-field">
            <Input
              placeholder="johndoe@email.com"
              onChange={(e) => onChangeHandler(e.target.value, "email")}
              value={user.email}
            />
          </div>
          <div className="btn-submit">
            <button className="submit-btn" onClick={onLogin}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
