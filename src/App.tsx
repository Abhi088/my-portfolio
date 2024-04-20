import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Resume } from './pages/resume/resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume/:version" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
