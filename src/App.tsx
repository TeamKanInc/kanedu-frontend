import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Screens/Public/Login";
import Signup from "./Screens/Public/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/registrarse"} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
