
import Navbar from "./components/Nav"
import AppRoutes from "./Routes";
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
        <AppRoutes />
      </Router>
  )
}

export default App
