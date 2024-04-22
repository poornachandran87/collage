import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

import store from './store';
import { useEffect } from 'react';
import { loadUser } from './actions/userActions';
import Login from './components/user/Login';


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
         
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        
        </HelmetProvider>
      </Router>
     
    </div>
  );
}

export default App;