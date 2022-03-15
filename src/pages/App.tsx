import { Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { CreateBoard } from "./createboard";
import { Player } from "./player";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createboard" element={<CreateBoard />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  );
}

export default App;
