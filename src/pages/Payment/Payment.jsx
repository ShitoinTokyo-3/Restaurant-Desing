import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckForm from './components/CheckForm';
import Navbar from '../../components/Navbar/Navbar';

const stripePromise = loadStripe('pk_test_51LQsUbFbZa1P2Uc1lAG8z7AUQ4cRl2NRThrvRFm7YWypNpa4ybvEtzIP3MPdD4AGTeROO36V8EH2kDB5exu5eGUK00dACv2bVk')


const Payment = () => {
  return (
    <>
        <Navbar/>
        <Elements stripe={stripePromise}>
            <CheckForm />
        </Elements>
    </>
  )
}

export default Payment;