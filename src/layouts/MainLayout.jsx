import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className=' z-0 pt-16 pb-16 min-h-screen relative'>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout