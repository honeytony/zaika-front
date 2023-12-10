// import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Personality from './pages/personality';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {' '}
                <Route path="/" element={<Main />} />
                <Route path="/two" element={<Personality />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
