import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Echo from "./components/Echo";
import Pomodoro from "./components/Pomodoro";
import Matrix from "./components/Matrix";
import Teleprompter from "./components/Teleprompter";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/timer" element={<Pomodoro/>}/>
          <Route path="/echo/:message" element={<Echo/>}/>
          <Route path="/matrix" element={<Matrix/>}/>
          <Route path="/teleprompter" element={<Teleprompter/>}/>
        </Routes>
    </Router>
  )
}

export default App