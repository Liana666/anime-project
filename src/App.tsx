import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import AniList from './pages/AniList/AniList';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/ani-list' element={<AniList />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </div>
  );
}

export default App;