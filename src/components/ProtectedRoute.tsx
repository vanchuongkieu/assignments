import { UserSelector } from "@/features/Auth/reducer";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const user = useSelector(UserSelector);
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
