import React, { useState } from 'react'

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const fieldName = 'entry.716098936';
  const link = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeR_RcCd5n2syGIqz-Jxjn_Z5xgo9J4nNc8FRiUg9gmAvmKIA/formResponse"

  const handleContactMe = async () => {
    if (!message.trim()) return alert('Please enter a message.');
    
    const formData = new FormData();
    formData.append(fieldName, message); 

    try {
      await fetch(link, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setSubmitted(true);
      setMessage('');
    } catch (error) {
      console.error('Error submitting message:', error);
    }
  };
  
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Got something on your mind?</h2>
          <p>
            Say it anonymously — your identity stays hidden. Just drop a message
            below!
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="button" onClick={handleContactMe}>
              Send Message
            </button>
          </form>
          {submitted && (
            <p style={{ color: "white" }}>Your secret is safe with me. 🤫</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactUs