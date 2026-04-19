---
title: What Can I Do
permalink: /whaticando
layout: home
icon: /assets/img/logo.png
description: List of thing Amardeep can do for you
keywords:
---

<style>
  /* --- Layout Correction --- */
  .content { 
    margin-top: -20px !important; 
    max-width: 1000px !important; 
  }

  :root {
    --accent: #48489f;
    --card-bg: rgba(255, 255, 255, 0.02);
    --border: rgba(255, 255, 255, 0.08);
  }

  /* --- Header Section --- */
  .hire-header {
    text-align: center;
    padding: 60px 0;
    position: relative;
  }

  .hire-header h1 {
    font-size: 4.5rem;
    font-weight: 900;
    letter-spacing: -3px;
    margin: 0;
    background: linear-gradient(to bottom, #fff 40%, #555 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hire-header p {
    color: #888;
    font-size: 1.2rem;
    margin-top: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* --- Service Cards Grid --- */
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
  }

  .service-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 32px;
    padding: 40px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }

  .service-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle at top left, var(--accent), transparent 70%);
    opacity: 0;
    transition: 0.4s;
    z-index: 0;
  }

  .service-card:hover {
    transform: translateY(-10px);
    border-color: var(--accent);
    background: rgba(255, 255, 255, 0.04);
  }

  .service-card:hover::before { opacity: 0.1; }

  .service-card h3 {
    font-size: 1.5rem;
    margin: 0;
    color: #fff;
    position: relative;
    z-index: 1;
  }

  .service-card p {
    color: #777;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-top: 15px;
    position: relative;
    z-index: 1;
  }

  /* --- Contact CTA --- */
  .cta-box {
    background: var(--accent);
    padding: 60px 40px;
    border-radius: 32px;
    text-align: center;
    color: #fff;
    margin-bottom: 100px;
  }

  .cta-box h2 { font-size: 2.5rem; margin: 0; letter-spacing: -1px; }
  
  .cta-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .cta-box a { 
    display: inline-block;
    background: #fff;
    color: #000;
    padding: 14px 32px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    transition: 0.3s;
  }

  .cta-box a.secondary-btn {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  .cta-box a:hover { transform: scale(1.05); }
  .cta-box a.secondary-btn:hover { background: rgba(255, 255, 255, 0.1); border-color: #fff; }

  @media (max-width: 768px) {
    .hire-header h1 { font-size: 3rem; }
    .cta-box h2 { font-size: 1.8rem; }
  }
</style>

<div class="hire-header">
  <h1>What I Can Do</h1>
</div>

<div class="service-grid">
  <div class="service-card">
    <h3>| Sleep</h3>
    <p>I can sleep in my sleep. Yes I am pro.</p>
  </div>

  <div class="service-card">
    <h3>| Video Editing</h3>
    <p>Sometimes I do it.</p>
  </div>
  
  <div class="service-card">
    <h3>| Photo Editing</h3>
    <p>Sometimes I do it.</p>
  </div>
</div>

<div class="cta-box">
  <h2>Have a project in mind?</h2>
  <p>Let's build something extraordinary together.</p>
  
  <div class="cta-buttons">
    <a href="mailto:zdkcik5c8@mozmail.com?subject=Mail%20from%20whaticando">
      Email Me →
    </a>
    
    <a href="https://linkedin.com/in/amarisdeep" target="_blank" class="secondary-btn">
      LinkedIn →
    </a>
  </div>
</div>
