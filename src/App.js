import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./Pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetail />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
