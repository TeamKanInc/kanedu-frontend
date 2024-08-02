import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Workzone from "./Screens/Workzone";
import { ProtectedRoute } from "./guard/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/registrarse"} element={<Signup />} />

          <Route
            path="/workzone"
            element={
              <ProtectedRoute isAuth={false} redirectPath="/">
                <Workzone />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
