import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";
import GuardRoutes from "./guard/ProtectedRoute";
import Private from "./Screens/Private";
import NotFound from "./Screens/Not_found";
import Kanban from "./Screens/Kanban";
<<<<<<< HEAD
import Workzone from "./Screens/Private/Workzone";
=======
import Project from "./Screens/Project";
>>>>>>> b4a2b46f33cd78aef0c746f55a39e981acf9f0b7

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />{/* Redirección por defecto */}
          <Route path={"/login"} element={<Login />} />
          <Route path={"/workzone"} element={<Workzone />} />
          <Route path={"/kanban"} element={<Kanban/>}/>
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/projects"} element={<Project />} />
          <Route element={<GuardRoutes isAuth={true} />}>
            <Route path={"/Workzone/*"} element={<Private />} />
          </Route>
          <Route path={"*"} element={<NotFound />} /> {/* Ruta comodín */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
