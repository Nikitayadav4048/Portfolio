// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
// import './contact.css';
// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // emailjs.sendForm('nikitayadav4048', form.current, 'nikitayadav4048')
//     emailjs.sendForm('nikitayadav4048', 'template_2gz8ppc', form.current, '_A-GLho6diHC-AcqR')
//       .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//       }, (error) => {
//           console.log(error.text);
//           alert('Failed to send message. Please try again.');
//       });
//   };

//   return (
//     <div id="contact" className="contact-container">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold mb-6 text-gradient">Contact Me</h2>
//         <form ref={form} onSubmit={sendEmail} className="contact-form">
//           <div className="form-left">
//             <input type="text" placeholder="Full Name" name="user_name" required  />
//             <input type="email" placeholder="Email" name="user_email" required />
//             <input type="tel" placeholder="Phone Number" name="user_phone" required />
//             <input type="text" placeholder="Subject" name="subject" required />
//           </div>
//           <div className="form-right">
//             <textarea placeholder="Your Message" name="message" rows="5" required></textarea>
//             <button type="submit">Send Message</button>
//           </div>
//         </form>
//         <div className="social-icons mt-10 flex items-center justify-center">
//           <a href="https://www.linkedin.com/in/nikitayadav4" target="_blank" rel="noreferrer">
//             <FaLinkedin />
//           </a>
//           {/* <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram />
//           </a> */}
//           <a href="https://github.com/Nikitayadav4048" target="_blank" rel="noreferrer">
//             <FaGithub />
//           </a>
//           {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
//             <FaTwitter />
//           </a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
  import Swal from 'sweetalert2';
import './contact.css';

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('nikitayadav4048', 'template_2gz8ppc', form.current, '_A-GLho6diHC-AcqR')
  //     .then((result) => {
  //         alert('Message sent successfully!');
  //         form.current.reset(); // Clears the form after sending
  //     }, (error) => {
  //         alert('Failed to send message. Please try again.');
  //     });
  // };



const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('nikitayadav4048', 'template_2gz8ppc', form.current, '_A-GLho6diHC-AcqR')
    .then((result) => {
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Message Sent!',
        //     text: 'Thank you for reaching out. I will get back to you soon.',
        //     confirmButtonColor: '#ff00ff',
        // });
        Swal.fire({
    icon: 'success',
    title: 'Message Sent!',
    text: 'Thank you for reaching out!',
    confirmButtonColor: '#ff00ff',
    customClass: {
        confirmButton: 'custom-ok-btn'
    }
});

        form.current.reset(); // Clears the form
    }, (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Failed to send message. Please try again.',
            confirmButtonColor: '#ff00ff',
        });
    });
};

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" placeholder="Your Name" name="user_name" required />
        <input type="email" placeholder="Your Email" name="user_email" required />
        <textarea placeholder="Your Message" name="message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/nikitayadav4" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Nikitayadav4048" target="_blank"><FaGithub /></a>
      </div>
    </section>
  );
};

export default Contact;