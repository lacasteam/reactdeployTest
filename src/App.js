import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Prices from './pages/Prices';
import Student from './pages/Students';

function App() {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/prices" element={<Prices/>}/>
          <Route path="/students" element={<Student/>}/>
        </Routes>
        </div>
     </div>
  );
}

export default App;
