import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Dashboard' element={<Dashboard />}/>
       <Route path='/coin/:id' element={<CoinPage/>}/>
       <Route path='/compare' element={<ComparePage/>}/>

       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
