import "./CreateUserModal.css";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";

export function CreateUserModal({ setIsOpenCreateUserModal }) {
  const [user, setUser] = useState({ name: "", password: "", email: "" });
  const dispatch = useDispatch();

  const inputStyle = {
    "&::before": {
      border: "1.5px solid var(--Input-focusedHighlight)",
      transform: "scaleX(0)",
      left: "2.5px",
      right: "2.5px",
      bottom: 0,
      top: "unset",
      transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
      borderRadius: 0,
      borderBottomLeftRadius: "64px 20px",
      borderBottomRightRadius: "64px 20px",
    },
    "&:focus-within::before": {
      transform: "scaleX(1)",
    },
  };

  const onChangeHandler = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const onAddUser = () => {
    dispatch(addUser(user));
    setIsOpenCreateUserModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <i onClick={() => setIsOpenCreateUserModal(false)} className="close">
          X
        </i>
        <div className="inp-field">
          <Input
            onChange={(e) => onChangeHandler(e.target.value, "name")}
            value={user.name}
            placeholder="Name"
            sx={inputStyle}
          />
        </div>
        <div className="inp-field">
          <Input
            onChange={(e) => onChangeHandler(e.target.value, "password")}
            value={user.password}
            placeholder="Password"
            sx={inputStyle}
          />
        </div>
        <div className="inp-field">
          <Input
            onChange={(e) => onChangeHandler(e.target.value, "email")}
            value={user.email}
            placeholder="Email"
            sx={inputStyle}
          />
        </div>
        <div className="btn-sub">
          <Button
            size="md"
            color="primary"
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
