import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isProtectedByAuth = true,
  allowedRoles = [],
  to,
}) => {
  const isAuth = true;
  // getPermisionByRoles(currentUser.roles , allowedRoles);
  return (
    <>
      {(isProtectedByAuth && isAuth) || !(isProtectedByAuth || isAuth) ? (
        <Outlet />
      ) : (
        <Navigate replace to={to} />
      )}
    </>
  );
};

export default ProtectedRoute;
