import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Admin from "./views/Admin/Admin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
