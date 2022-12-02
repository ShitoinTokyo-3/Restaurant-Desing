//Node modules
import { Suspense, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
//Firebase
import { setUserGlobal, setLoadingUserAction, backEndToken } from './redux/features/user/actions';
import { auth } from './firebase.config';
//Pages
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import SignUp from './pages/SignUp/SignUp';
import DashboardAdminIntro from './pages/DashboardAdminIntro/DashboardAdminIntro';
import DashboardAdminCategories from './pages/DashboardAdminCategories/DashboardAdminCategories';
import DashboardAdminProducts from './pages/DashboardAdminProducts/DashboardAdminProducts';
import Categories from './pages/Categories/Categories';
import Service from './pages/Service/Service';
import Payment from './pages/Payment/Payment';
import DashboardAdminExamples from './pages/DashboardAdminExamples/DashboardAdminExamples';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
//CSS
import './App.css';
import Loading from './components/Loading/Loading';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      dispatch(backEndToken(currentUser));
      dispatch(setUserGlobal(currentUser));
      dispatch(setLoadingUserAction(false));
    })
    return () => unsubscribe();
  }, []);
  return (
    <Suspense fallback={<Loading/>}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services/:category" element={<Categories/>} />
            <Route path="/services/:category/:product" element={<Service/>} />
            <Route path="/services/:category/:product/payment" element={<Payment/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/dashboard-admin/intro" element={<ProtectedRoute><DashboardAdminIntro/></ProtectedRoute>} />
            <Route path="/dashboard-admin/categories" element={<ProtectedRoute><DashboardAdminCategories/></ProtectedRoute>} />
            <Route path="/dashboard-admin/products" element={<ProtectedRoute><DashboardAdminProducts/></ProtectedRoute>} />
            <Route path="/dashboard-admin/productsExamples" element={<ProtectedRoute><DashboardAdminExamples/></ProtectedRoute>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </Suspense>
  )
}

export default App
