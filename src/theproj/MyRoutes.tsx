import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Home from './pages/Home'
import TodoPage from './pages/TodoPage'
import OtherPage from './pages/OtherPage'
import PlayAround1 from './pages/PlayAround1'
import Heeder from './components/Heeeder'

function MyRoutes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heeder />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/playaround" element={<PlayAround1 />} />
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