import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isProtectedByAuth = true,
  allowedRoles = [],
  redirectTo,
}) => {
  const isAuth = true;
  // getPermisionByRoles(currentUser.roles , allowedRoles);
  return (
    <>
      {(isProtectedByAuth && isAuth) || !(isProtectedByAuth || isAuth) ? (
        <Outlet />
      ) : (
        <Navigate replace to={redirectTo} />
      )}
    </>
  );
};

export default ProtectedRoute;
