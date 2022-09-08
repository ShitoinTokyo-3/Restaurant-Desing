import emailjs from 'emailjs-com';

export const emailjsSend = (data) => {
    emailjs.sendForm('service_g72e9ve', 'template_1vvur9h', data, 'Sl-QIcDS3Kokbmwht')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    //TODO: Send email to our email
    emailjs.sendForm('service_g72e9ve', 'template_8gnojwi', data, 'Sl-QIcDS3Kokbmwht')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}