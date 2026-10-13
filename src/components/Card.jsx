import React from 'react';

const Card = ({ title, image, demoLink, codeLink }) => (
  <article className="project-card">
    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-image" aria-label={`View ${title} live demo`}>
      <img src={image} alt={`${title} project preview`} loading="lazy" />
    </a>
    <div className="project-info">
      <h3>{title}</h3>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Live ↗</a>
        {codeLink && codeLink !== '#' && <a href={codeLink} target="_blank" rel="noopener noreferrer">Code ↗</a>}
      </div>
    </div>
  </article>
);

export default Card;