import { Link, useNavigate } from "react-router-dom";
import "./Users.css";
import Button from "@mui/joy/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../../store/userSlice";
import { useState } from "react";
import RemoveUserModal from "../../../components/RemoveUserModal/RemoveUserModal";
import { CreateUserModal } from "../../../components/CreateUserModal/CreateUserModal";
import { logOut } from "../../../store/auchSlice";

const Users = () => {
  const data = useSelector(selectAllUsers);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCreateUserModal, setIsOpenCreateUserModal] = useState(false);
  const [userId, setUserId] = useState("");
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
          {data.map((obj) => (
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
