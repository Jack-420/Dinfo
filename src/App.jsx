import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';

const App = () => {
  const router=createBrowserRouter( 
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/loading" element={<Loading/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}

export default App










// 20 19  
// 10 5   28
// 100 