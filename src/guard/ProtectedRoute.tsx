import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../cosntants";
import { useUserByToken } from "../hooks";

interface Props {
  isAuth: boolean;
}

const privateValidationFragment = <Outlet />;
const publicValidationFragment = (
  <Navigate replace to={PrivateRoutes.PRIVATE} />
);

const GuardRoutes = ({ isAuth }: Props) => {
  const { user } = useUserByToken();

  console.log("User:", user);
  console.log("isAuth:", isAuth);

  return user !== null && user?.uuid
    ? isAuth
      ? (console.log("Rendering private route"), privateValidationFragment)
      : (console.log("Navigating to private route"), publicValidationFragment)
    : (console.log("Navigating to login"),
      (<Navigate replace to={PublicRoutes.LOGIN} />));
};
export default GuardRoutes;
