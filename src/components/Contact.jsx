import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');
    const formData = new FormData(event.currentTarget);
    fetch('https://getform.io/f/zbzkxdga', { method: 'POST', body: formData })
      .then((response) => {
        if (!response.ok) throw new Error('Unable to send message');
        event.currentTarget.reset();
        setStatus('Thanks. Your note is on its way.');
      })
      .catch(() => setStatus('Something went wrong. Please email hello@silky.design instead.'))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact">
      <div className="section-wrap contact-grid">
        <div>
          <p className="eyebrow">Let’s make it real</p>
          <h2 className="section-heading display">Tell us what<br />you’re building.</h2>
          <p className="section-copy">Have a clear brief or just a half-formed idea? Both are good places to start. We’ll get back to you within two business days.</p>
          <ul className="contact-details">
            <li><strong>hello@silky.design</strong></li>
            <li><strong>Ottawa, Canada · Working worldwide</strong></li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="Jane Smith" required /></div>
            <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="jane@company.com" required /></div>
            <div className="form-field"><label htmlFor="company">Company</label><input id="company" name="company" type="text" placeholder="Company name" /></div>
            <div className="form-field"><label htmlFor="budget">Project range</label><input id="budget" name="budget" type="text" placeholder="$1,200 - $5,000" /></div>
            <div className="form-field full"><label htmlFor="message">What are we making?</label><textarea id="message" name="message" rows="5" placeholder="A little context, a link, or the problem you want to solve..." required /></div>
          </div>
          <button type="submit" className="button-primary" disabled={loading}>{loading ? 'Sending...' : 'Send enquiry ↗'}</button>
          {status && <p className={`form-status ${status.startsWith('Something') ? 'error' : ''}`} role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;