import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import DinoGame from './components/dinoGame/DinoGame';

function App() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-300 h-screen'>
      <Router>
        <Routes> 
          <Route path="/" exact element={<Homepage />}></Route>
          <Route path="/dinoGame" exact element={<DinoGame />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
