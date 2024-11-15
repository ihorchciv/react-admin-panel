import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export function EditUser({
  setIsEditMode,
  editableUser,
  onChangeHandler,
  onSaveChanges,
}) {
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
  return (
    <tr>
      <td>{editableUser.id}</td>
      <td>
        <Input
          onChange={(e) => onChangeHandler(e.target.value, "name")}
          value={editableUser.name}
          placeholder="Name"
          sx={inputStyle}
        />
      </td>
      <td>
        <Input
          onChange={(e) => onChangeHandler(e.target.value, "password")}
          value={editableUser.password}
          placeholder="Password"
          sx={inputStyle}
        />
      </td>
      <td>
        <Input
          onChange={(e) => onChangeHandler(e.target.value, "email")}
          value={editableUser.email}
          placeholder="Email"
          sx={inputStyle}
        />
      </td>
      <td className="btns-group">
        <Button size="sm" color="primary" onClick={onSaveChanges}>
          Save
        </Button>
        <Button size="sm" color="danger" onClick={() => setIsEditMode(false)}>
          X
        </Button>
      </td>
    </tr>
  );
}
