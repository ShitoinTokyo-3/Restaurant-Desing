import {  ContainerExamples } from '../../styled-components/Containers/Containers'
import { AccordionC } from './components/AccordionC/Accordion'

const FrequentlyAsked = () => {

    const info = [
        {
            asked: 'Why should I leave my design in the hands of RDB?',
            answer: 'You can choose from over 35 different services at RDB, as well as unlimited revisions and designer advice. 100% money-back guarantee.'
        },
        {
            asked: 'Can I receive a FREE consultation?',
            answer: `We offer free 15-minute marketing consultations for food businesses on our website at any time.

            A date and time for the call will be sent to you by email once you have made the request.`
        },
        {
            asked: 'What is the delivery time of my design?',
            answer: 'Within 48 hours, you receive the first sketch of your design. Within seven calendar days, you will receive the final design.'
        },
        {
            asked: 'How can I request a service with an RDB designer?',
            answer: `DB offers a wide range of categories and services on its home page. Select the service you need and then click "START".

            We will begin working on your design as soon as you provide the requested information. You can find the categories and services we provide on the homepage.
        
            Select the service you need and then click "START.". Fill out the form, and voila, your design will be ready in no time.`
        },
        {
            asked: 'Does the designer contact me at any point in the process?',
            answer: "Yes. We will contact you via email as soon as you make the payment for the service. Clients and designers can continue the conversation on WhatsApp if it's more convenient for them."
        },
        {
            asked: 'Can I request changes to the designer?',
            answer: 'Of course. Changes can be requested to the designer if you think they are necessary. The final design can be changed up to 7 days before it is delivered.'
        },
        {
            asked: "What if I don't like the design?",
            answer: 'A different designer can be contacted if you do not like the final design. In that case, you can request 100% of your money if you are unhappy with the final design. If you are not satisfied with the final design, we can find you another designer and start the process again. It may not be a good option for you, so you can request a full refund.'
        },
        {
            asked: 'Where can I see examples of previous designs?',
            answer: "In each service page, examples of previous designs can be seen, so you can get an idea of what you want or want to change."
        },
        {
            asked: 'What are the quality standards?',
            answer: `Sending original work (100%).

            Please save/send files in the approved formats (EPS, AI, PSD)
            High-quality vector designs are required.
            
            The work is highly professional and conforms to the design instructions.
            In some cases, accounts are deactivated for designs that fail to meet these quality standards.`
        },
        {
            asked: "Who owns the rights to the design creations?",
            answer: "Designers own the rights to their designs, but once the client purchases them, they become the client's."
        },
        {
            asked: "How can I change the information entered when requesting a service?",
            answer: "Once you have acquired the service, an advisor will contact you to finalize details, so if you need to make a change after that, please send an e-mail."
        },
        {
            asked: "Can I request a refund of my money?",
            answer: "Yes, if the design cannot be customized for the client."
        },
        {
            asked: "When do I have to pay for my service?",
            answer: "Upon payment, the designer will begin building the idea at that time."
        },
        {
            asked: "What are the payment methods available?",
            answer: "Stripe is similar to PayPal in that you can choose the payment method that works best for you."
        },
    ]

  return (
    <>
        <ContainerExamples>
            <h2>Frequently Asked Questions</h2>

            {info.map( (e, i) => {
                return (
                        <AccordionC key={i + 100} e={e} />
                )
            }
            )}
            
        </ContainerExamples>
    </>
  )
}

export default FrequentlyAsked