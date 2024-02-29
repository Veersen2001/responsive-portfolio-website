/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_axr0hvd','template_p12a4s6','#contact-form','VJ8fEmQguYokKBbL9')
        .then(() => {
            // show sent Message
            contactMessage.textContent = 'Message sent successfully ✅';

            // Remove message wish after five second

            setTimeout(()=>{
                contactMessage.textContent = ''
            },5000);
            // clear input fields
            contactForm.reset();
        },()=>{
            // show error message

            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
         
}

contactForm.addEventListener('submit',sendEmail);