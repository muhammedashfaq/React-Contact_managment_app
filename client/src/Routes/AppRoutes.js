import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import { Toaster } from 'react-hot-toast';
import {useSelector} from 'react-redux'
import Home from '../pages/Home';

function AppRoute() {
    const { loading } = useSelector((state) => state.alerts);

    return (
      <div>
             {loading && (
        <div className="flex justify-center items-center bg-slate-950 opacity-60 fixed top-0 left-0 w-full h-full z-50 space-x-3">
          <div className="w-4 h-4 rounded-full  animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full  animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
        </div>
      )}

      <Toaster position="bottom-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/home" element={<Home />} /> 

          </Routes>
      </div>
    );
  }
  
  export default AppRoute;