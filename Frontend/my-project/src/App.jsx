import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
