import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Footer from './components/Appfooter';
import TheatersPage from './pages/TheatersPage';
import RateMoviePage from './pages/RateMoviePage';
import SearchPage from './pages/SearchPage';
import YourReviewsPage from './pages/YourReviewsPage';
import { useContext, useNavigate } from 'react';
import { Context } from './context/userContext/context';

import './App.css'

function App() {

  const {user} = useContext(Context);
const navigate = useNavigate();

  return (
    <div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/theaters" element={<TheatersPage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/rate-movie" element={<RateMoviePage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path='/yourReviewsPage' element={user ? <YourReviewsPage /> : <Navigate to="/login" replace />}/>
     </Routes>
     
    </div>
  )
}

export default App
