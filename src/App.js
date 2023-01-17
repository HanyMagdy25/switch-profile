import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Connect from "./pages/Connect/Connect";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app flex-center">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
