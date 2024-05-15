import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextComponent";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>
};

ProtectedRoute.propTypes ={
  children: PropTypes.object,
}
export default ProtectedRoute;