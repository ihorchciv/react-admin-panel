import { useDispatch, useSelector } from "react-redux";
import "./RemoveUserModal.css";
import { removeUser, selectAllUsers } from "../../store/userSlice";
import Button from "@mui/joy/Button";

function RemoveUserModal({ setIsOpen, userId }) {
  const data = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const onDeleteUser = () => {
    const idx = data.findIndex((user) => user.id === userId);
    dispatch(removeUser(idx));
    setIsOpen(false);
  };

  const remUser = "Remove User";

  return (
    <div className="modal">
      <div className="modal-content">
        <b onClick={() => setIsOpen(false)} className="close">
          X
        </b>
        <h1>{remUser}</h1>
        <div className="btns">
          <Button onClick={onDeleteUser} className="accept">
            Yes, remove
          </Button>
          <Button
            color="danger"
            onClick={() => setIsOpen(false)}
            className="reject"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RemoveUserModal;
