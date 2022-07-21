import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Suspense fallback='Loading...'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </Suspense>
  )
}

export default App
