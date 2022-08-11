//Node modules
import { Suspense, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
//Firebase
import { setUserGlobal, setLoadingUserAction } from './redux/features/user/actions';
import { auth } from './firebase.config';
//Pages
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Payment from './pages/Payment/Payment';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
//CSS
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      dispatch(setUserGlobal(currentUser));
      dispatch(setLoadingUserAction(false));
    })
    return () => unsubscribe();
  }, []);
  return (
    <Suspense fallback='Loading...'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/payment/:id" element={<Payment/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </Suspense>
  )
}

export default App
