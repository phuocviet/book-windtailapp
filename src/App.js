import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./Pages/mainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
