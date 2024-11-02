import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7dfl7lp', 'template_1pnh76r', e.target, 'NJ2iX6Pm4ckpRhdEQ')
      .then((result) => {
        alert('Message Sent Successfully');
      }, (error) => {
        alert('Failed to Send Message. Please Try Again.');
      });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id='contact' className="py-12 text-white "  style={{ backgroundImage: 'url(https://accessnsite.com/wp-content/uploads/2020/05/page-heading-background-contact-us.jpg)' }}><br></br>
    <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <div className="container mx-auto px-4">
        <div className="grid justify-center">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="flex space-x-4">
              <input
                className="w-1/2 p-3 bg-white text-white rounded-lg border border-gray-600"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="w-1/2 p-3 bg-white text-white rounded-lg border border-gray-600"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className="w-full p-3 bg-white text-black rounded-lg border border-gray-600"
              name="message"
              placeholder="Add Your Message Here"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-900 text-white rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
      
    </section>
    
  );
};

export default Contact;
