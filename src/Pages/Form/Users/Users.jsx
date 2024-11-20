import { Link, useNavigate } from "react-router-dom";
import "./Users.css";
import Button from "@mui/joy/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../../store/userSlice";
import { useState } from "react";
import RemoveUserModal from "../../../components/RemoveUserModal/RemoveUserModal";
import { CreateUserModal } from "../../../components/CreateUserModal/CreateUserModal";
import { logOut } from "../../../store/auchSlice";
import Input from "@mui/joy/Input";

const Users = () => {
  const data = useSelector(selectAllUsers);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCreateUserModal, setIsOpenCreateUserModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteUser = (id) => {
    setIsOpen(true);
    setUserId(id);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
  };

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(value)
  );

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Password</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Destroy</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id[0]}...</td>
              <td>{obj.name}</td>
              <td>{obj.password}</td>
              <td>{obj.email}</td>
              <td>
                <Link to={`/users/${obj.id}`}>view profile</Link>
              </td>
              <td>
                <Button
                  onClick={() => onDeleteUser(obj.id)}
                  color="primary"
                  disabled={false}
                  loading={false}
                  size="sm"
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="searchContainer">
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="find a user..."
        />
      </div>
      <div className="nav-block">
        <button onClick={() => setIsOpenCreateUserModal(true)}>
          Create a new User
        </button>
        <button onClick={handleLogout}>Exit</button>
      </div>
      {isOpen && <RemoveUserModal setIsOpen={setIsOpen} userId={userId} />}
      {isOpenCreateUserModal && (
        <CreateUserModal setIsOpenCreateUserModal={setIsOpenCreateUserModal} />
      )}
    </div>
  );
};

export default Users;
