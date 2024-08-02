import { Navigate} from "react-router-dom";

interface Props {
  isAuth: boolean;
  children: React.ReactNode;
  redirectPath: string;
}



export const ProtectedRoute = ({ children ,isAuth, redirectPath = "/" }: Props) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
