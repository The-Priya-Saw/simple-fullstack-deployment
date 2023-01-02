import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const List = (props) => (
  <div>
    <h1>List Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/List">Home</Link>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/List" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
