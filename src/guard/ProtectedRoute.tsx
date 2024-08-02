import { Navigate, Outlet} from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../cosntants";
import { useUser } from "../hooks";

interface Props {
  isAuth: boolean;

}

const privateValidationFragment = <Outlet/>;
const publicValidationFragment = <Navigate replace to = {PrivateRoutes.PRIVATE}/>;

const GuardRoutes = ({isAuth}: Props) => {

  const {isLoading, user}= useUser( );

  return user !== null && user?.uuid ? (isAuth ? privateValidationFragment : publicValidationFragment) : <Navigate replace to = {PublicRoutes.LOGIN}/>;
}

export default GuardRoutes;



