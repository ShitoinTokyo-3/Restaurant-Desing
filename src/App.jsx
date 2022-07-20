import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <Suspense fallback='Loading...'>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </Suspense>
  )
}

export default App
