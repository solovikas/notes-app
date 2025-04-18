import Header from "../src/components/Header"
import Main from "./components/Main"
import Logos from "./components/Logos"
import About from "./components/About/About"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Rates from "./pages/Rates"
import Notes from "./pages/Notes"
import "./App.css"

const App: React.FC = () => {
  return (
    <Router basename="/notes-app/">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="rates" element={<Rates />} />
        <Route  path="notes" element={<Notes />} />
      </Routes>
    </Router>
  )
}

export default App
