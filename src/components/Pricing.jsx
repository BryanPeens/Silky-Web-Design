import React from 'react';
import { Link } from 'react-scroll';

const plans = [
  { name: 'Launch', price: '$1,200', description: 'For small businesses ready to look established online.', features: ['Up to 5 pages', 'Responsive custom design', 'Analytics and SEO setup', '30 days of launch support'] },
  { name: 'Signature', price: '$2,400', description: 'For brands that need a sharper presence and room to grow.', featured: true, features: ['Up to 10 pages', 'Strategy and visual direction', 'CMS or custom integrations', '90 days of launch support'] },
];

const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="section-wrap">
      <p className="eyebrow">Simple starting points</p>
      <h2 className="section-heading display">A good website<br />pays for itself.</h2>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
            <span className="price-label">{plan.featured ? 'Most popular' : 'Good place to start'}</span>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="price">{plan.price} <small>starting at</small></div>
            <ul className="feature-list">
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <Link to="contact" smooth offset={-40} duration={500} className={plan.featured ? 'button-primary' : 'button-ghost'}>Talk through your project <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;