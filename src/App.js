import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from './component/AddEmployee/AddEmployee';
import Navigation from './component/Navigation/Navigation';
import OurEmployee from './component/OurEmployee/OurEmployee';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<OurEmployee />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>

    </Router>
  );
}

export default App;
