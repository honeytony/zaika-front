// import axios from 'axios';
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
                <Route path="/person" element={<Personality />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
