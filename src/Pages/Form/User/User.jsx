import { Link, useParams } from "react-router-dom";
import "./User.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, selectAllUsers } from "../../../store/userSlice";
import { EditUser } from "./EditUser";
import { CreateUserModal } from "../../../components/CreateUserModal/CreateUserModal";

export function User() {
  const data = useSelector(selectAllUsers);
  const [user, setUser] = useState({});
  const [editableUser, setEditableUser] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [isOpenCreateUserModal, setIsOpenCreateUserModal] = useState(false);
  const dispatch = useDispatch();
  let { userId } = useParams();

  useEffect(() => {
    setUser(data.find((obj) => obj.id === userId));
  }, [userId]);

  const onEditMode = () => {
    setEditableUser(user);
    setIsEditMode(true);
  };

  const onChangeHandler = (value, prop) => {
    setEditableUser({ ...editableUser, [prop]: value });
  };

  const onSaveChanges = () => {
    dispatch(editUser(editableUser));
    setIsEditMode(false);
    setUser(editableUser);
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {isEditMode ? (
            <EditUser
              editableUser={editableUser}
              setIsEditMode={setIsEditMode}
              onChangeHandler={onChangeHandler}
              onSaveChanges={onSaveChanges}
            />
          ) : (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td class="flex-container">
                <button className="btnStyle" onClick={onEditMode}>
                  Edit user
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="nav-block">
        <button>
          <Link to="/users">View all users</Link>
        </button>
      </div>
      {isOpenCreateUserModal && (
        <CreateUserModal setIsOpenCreateUserModal={setIsOpenCreateUserModal} />
      )}
    </div>
  );
}
