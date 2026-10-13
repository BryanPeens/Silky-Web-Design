import React from 'react';

const services = [
  ['01', 'Brand-led websites', 'A clear point of view, a flexible system, and a site that makes your best work impossible to miss.'],
  ['02', 'Build & launch', 'From polished marketing sites to thoughtful web apps, we build for speed, accessibility, and momentum.'],
  ['03', 'Hosting that behaves', 'Managed hosting, SSL, backups, and monitoring without the mystery or the surprise invoice.'],
  ['04', 'Care & improvement', 'Ongoing support that keeps your content fresh, your stack healthy, and your next idea moving.'],
  ['05', 'Search foundations', 'Technical SEO and content structure that help the right people find you at the right moment.'],
  ['06', 'Commerce & integrations', 'Simple, dependable connections between your website, customers, tools, and day-to-day work.'],
];

const Services = () => (
  <section id="services" className="services">
    <div className="section-wrap">
      <div className="services-heading">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 className="section-heading display">Everything your<br />website needs.</h2>
        </div>
        <p className="section-copy">A focused mix of strategy, design, development, and hosting. Bring us in for the whole thing or the part where you need an extra brain.</p>
      </div>
      <div className="service-grid">
        {services.map(([number, title, copy]) => (
          <article className="service-item" key={number}>
            <span className="service-number">{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;