import { Header } from "./component/Header";
import { Home } from "./view/Home"
import { About } from "./view/About"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { MovieDetail } from "./view/MovieDetail";

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
