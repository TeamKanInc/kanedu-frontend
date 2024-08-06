import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";
import GuardRoutes from "./guard/ProtectedRoute";
import Private from "./Screens/Private";
import NotFound from "./Screens/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/notfound"} element={<NotFound/>} />
          <Route path={"/registrarse"} element={<Signup />} />
          <Route element={<GuardRoutes isAuth={true} />}>
            <Route path={"*"} element={<Private />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
