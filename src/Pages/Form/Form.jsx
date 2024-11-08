import "./Form.css";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
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

  return (
    <div className="container">
      <form>
        <div className="inp-field">
          <Input
            color="primary"
            variant="outlined"
            placeholder="Name"
            onChange={(e) => onChangeHandler(e.target.value, "name")}
            value={user.name}
          />
        </div>
        <div className="inp-field">
          <Input
            color="primary"
            variant="outlined"
            placeholder="Password"
            onChange={(e) => onChangeHandler(e.target.value, "password")}
            value={user.password}
          />
        </div>
        <div className="inp-field">
          <Input
            color="primary"
            variant="outlined"
            placeholder="Email"
            onChange={(e) => onChangeHandler(e.target.value, "email")}
            value={user.email}
          />
        </div>
        <div className="btn-submit">
          <Button onClick={onLogin} variant="solid">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
