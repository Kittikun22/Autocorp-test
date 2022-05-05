import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculate from './components/Calculate';
import History from './components/History';
import NavBar from './components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
    <NavBar/>

    <Routes>
      <Route path='/' element={<Calculate/>}/>
      <Route path='/History' element={< History/>}/>
    </Routes>
    </>
  );
}

export default App;
