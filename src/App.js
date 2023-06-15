import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Submit from './pages/Submit';

function App() {
  return (
    <div className="App">     
       <Router>
        <Routes>
          <Route path='/' element={ <Login/>}/>
          <Route path="/submit" element={<Submit/>}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
