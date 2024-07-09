import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ApologyBox from './components/ApologyBox';
import Lost from './components/Lost';
import ApologyLine from './components/ApologyLine';
import NotFound from './components/NotFound';

import './App.css';

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<ApologyBox />} />
                <Route path='/lost' element={<Lost />} />
                <Route path='/:id' element={<ApologyLine />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
