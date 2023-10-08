import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import App from '../App';

const Main = () => {
    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;