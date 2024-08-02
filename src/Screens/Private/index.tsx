import { Route, Routes } from "react-router-dom";
import Workzone from "./Workzone";

const Private = () => {
  return (
    <Routes>
      <Route path="/zona-trabajo" element={<Workzone />} />
    </Routes>
  );
};

export default Private;
