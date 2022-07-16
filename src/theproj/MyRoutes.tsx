import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Home from './Home'
import TodoPage from './TodoPage'
import OtherPage from './OtherPage'
import Heeder from './Heeeder'

function MyRoutes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heeder />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asd" element={<Home />} />
      </Routes> */}
    </BrowserRouter>
  );
}
export default MyRoutes;