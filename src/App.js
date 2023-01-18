import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Connect from "./pages/Connect/Connect";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";

function App() {
  const [userId, setUserId] = useState()
  return (
    <div className="app flex-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Home userId={userId} setUserId={setUserId}/>} />
          <Route path="/connect" element={<Connect userId={userId}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
