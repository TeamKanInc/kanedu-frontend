import { Route, Routes } from "react-router-dom";
import Workzone from "../Workzone";

const Private = () => {
  return (
    <Routes>
      <Route path="/work-zones" element={<Workzone />} />
    </Routes>
  );
};

export default Private;
