import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import heroImage from '../assets/bg.png';

const Hero = () => (
  <header id="home" name="home" className="hero">
    <div className="hero-grid">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow">Independent digital studio · Ottawa / Remote</p>
        <h1 className="display">Websites with <em>edge.</em><br />Built to grow.</h1>
        <p className="hero-lede">Silky is a design and hosting partner for ambitious businesses. We turn complicated ideas into fast, memorable digital homes that work hard.</p>
        <div className="hero-actions">
          <Link to="contact" smooth offset={-40} duration={500} className="button-primary">Build something good <span aria-hidden="true">↗</span></Link>
          <Link to="work" smooth duration={500} className="button-ghost">See our work <span aria-hidden="true">↓</span></Link>
        </div>
        <p className="hero-note"><span className="status-dot" aria-hidden="true" /> Available for select projects in 2026</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }} className="hero-art">
        <img src={heroImage} alt="Abstract digital interface on a laptop screen" />
        <div className="hero-card"><strong>03–06</strong><span>Weeks to launch, depending on scope.</span></div>
      </motion.div>
    </div>
  </header>
);

export default Hero;