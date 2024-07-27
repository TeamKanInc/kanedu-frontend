import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} /> 
          <Route path={"/registrarse"} element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
