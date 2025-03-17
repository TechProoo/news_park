import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./UI/Navbar";
import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
