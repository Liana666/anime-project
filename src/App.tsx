import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import AniList from './pages/AniList/AniList';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/ani-list' element={<AniList />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;