import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
  import Swal from 'sweetalert2';
import './contact.css';

const Contact = () => {
  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('nikitayadav4048', 'template_2gz8ppc', form.current, '_A-GLho6diHC-AcqR')
    .then((result) => {
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