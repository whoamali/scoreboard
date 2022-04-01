import { Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { CreateBoard } from "./createboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createboard" element={<CreateBoard />} />
    </Routes>
  );
}

export default App;
