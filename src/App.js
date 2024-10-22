import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import QuizInstructions from './components/Quiz/QuizInstructions'
import Play from "./components/Quiz/Play";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/play/instructions" element={<QuizInstructions/>}/>
        <Route path="/play/quiz" element={<Play/>}/>
      </Routes>
    </Router>
  );
}

export default App;
