import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckForm from './components/CheckForm';
import Navbar from '../../components/Navbar/Navbar';

const keyStripe = 'pk_test_51LTzz0Lf6MrmOXRHKr2nKFlcDCwQwR5HLMrZSRt0iJES61GlFVSK54cCdpVW02giEZdEOd38fzpJuLOXgglp2bMf008JTkE0Jd'

const stripePromise = loadStripe(keyStripe);


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