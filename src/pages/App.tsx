import { Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { CreateBoard } from "./createboard";
import { Board } from "./board";
import { BoardAdmin } from "./boardadmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="createboard" element={<CreateBoard />} />
      <Route path="board" element={<Board />}>
        <Route path=":user_key" />
      </Route>
      <Route path="boardadmin" element={<BoardAdmin />}>
        <Route path=":admin_key" />
      </Route>
    </Routes>
  );
}

export default App;
