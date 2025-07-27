import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Send from './pages/Send';
import Register from './pages/Register';
import About from './pages/About';
// import NotFound from './pages/NotFound';


import './App.css'; //main css


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>    
  )
}

export default App
