
import './app.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Write from './pages/Write'
import Log from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/write' element={<Write />} />
          <Route path='/log' element={<Log />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Log />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NotFound />}> </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
