import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Suspense fallback='Loading...'>
      <div>
        <Navbar />
        {/* <Routes>
            <Route path="/" element={<Home/>} />
        </Routes> */}
      </div>
    </Suspense>
  )
}



export default App
