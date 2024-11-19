import "./CreateUserModal.css";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";

export function CreateUserModal({ setIsOpenCreateUserModal }) {
  const [user, setUser] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onChangeHandler = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!emailRegex.test(user.email)) {
      newErrors.email = "Invalid email format";
    }
    if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onAddUser = () => {
    if (validate()) {
      dispatch(addUser(user));
      setIsOpenCreateUserModal(false);
    }
  };

  const contentItems = {
    title: "Create a new User",
    name: "Name",
    password: "Password",
    email: "Email",
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{contentItems.title}</h3>
        <b onClick={() => setIsOpenCreateUserModal(false)} className="close">
          X
        </b>
        <div className="modal-inp-field">
          <p>{contentItems.name}</p>
          <Input
            onChange={(e) => onChangeHandler(e.target.value, "name")}
            value={user.name}
            placeholder="name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="modal-inp-field">
          <p>{contentItems.password}</p>
          <Input
            type="password"
            onChange={(e) => onChangeHandler(e.target.value, "password")}
            value={user.password}
            placeholder="password"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <div className="modal-inp-field">
          <p>{contentItems.email}</p>
          <Input
            onChange={(e) => onChangeHandler(e.target.value, "email")}
            value={user.email}
            placeholder="johndoe@email.com"
            type="email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="btn-sub">
          <Button
            className="modal-sub-btn"
            onClick={onAddUser}
            disabled={!user.name || !user.password || !user.email}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
