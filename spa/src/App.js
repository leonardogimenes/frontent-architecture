import { Header } from "./component/Header";
import { Home } from "./view/Home"
import { About } from "./view/About"
import { MovieDetail } from "./view/MovieDetail";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element= { <MovieDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
