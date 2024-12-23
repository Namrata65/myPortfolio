import React from 'react'

const ContactUs = () => {
    const handleContactMe = () => {
        console.log('contact me');
    }
  return (
    <section className="contact" id='contact'>
      <div className="contact-container">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>

          <form action="">
            <input type="email" placeholder="Email Address" />
            <button type="button" onClick={handleContactMe}>
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs