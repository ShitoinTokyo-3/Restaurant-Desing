import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <Suspense fallback='Loading...'>
      <div>
        <Navbar />
        <Carousel />
        {/* <Routes>
            <Route path="/" element={<Home/>} />
        </Routes> */}
      </div>
    </Suspense>
  )
}



export default App
