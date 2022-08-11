import { useState } from "react";
import axios from "axios";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import s from './CheckForm.module.css';

const CheckForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        })
        setLoading(true);

        if(!error) {
            try {
                const { id } = paymentMethod;
                const { data } = await axios.post('http://localhost:3001/api/checkout', { 
                    id,
                    amount: 10000, // $100 el monto es en centavos 
                });

                console.log(data);

                elements.getElement(CardNumberElement).clear();
                elements.getElement(CardExpiryElement).clear();
                elements.getElement(CardCvcElement).clear();
            } catch (error) {
                console.log(error);
            }

            setLoading(false);
        }


    }
    return (
        <form onSubmit={handleSubmit} className={s.container} >
            <div className={s.form_rowNumber}>
                <span>Card number</span>
                <CardNumberElement className={s.stripeElements} />
            </div>
            <div className={s.form_row}>
                <div className={s.form_element}>
                    <span>Expiration date</span>
                    <CardExpiryElement className={s.stripeElements} />
                </div>
                <div className={s.form_element}>
                    <span>CVC</span>
                    <CardCvcElement className={s.stripeElements}/>
                </div>
            </div>
            <button 
            type="submit"
            disabled={!stripe}>
            {loading ? 'Loading...' : 'Pay'}
            </button>
        </form>
    )
}
export default CheckForm;