import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export default function () {
  return (
    <Router>
      <Routes>
        {/* <Route path={"/"} element={<Login />} /> */}
        {/* <Route path={`/:id/home`} element={<Home />} /> */}
        <Route path={`/`} element={<Home />} />
      </Routes>
    </Router>
  );
}
