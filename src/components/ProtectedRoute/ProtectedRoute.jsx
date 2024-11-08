import { useSelector } from "react-redux";
import { selectAuthUsers } from "../../store/auchSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectAuthUsers);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
