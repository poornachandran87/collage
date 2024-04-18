import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Register from './components/user/Register';
import Login from './components/user/Login';
import store from './store';
import { useEffect } from 'react';
import { loadUser } from './actions/userActions';
import Main from './components/Main';
function App() {
  useEffect(() => {
    store.dispatch(loadUser)
  },[])
  return (
    <div className="App">
      <Router>
      <HelmetProvider>
      <ToastContainer theme='dark' position='bottom-center'/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
        
        </HelmetProvider>
      </Router>
     
    </div>
  );
}

export default App;