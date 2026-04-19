---
title: "ReadMe"
permalink: /readme
layout: home
description: "Professional profile page for Amardeep"
icon: "/assets/img/logo.jpg"
---

<style>
  /* --- Global Layout Fixes --- */
  .content { 
    margin-top: 10px !important; 
    max-width: 1000px !important; 
    padding-top: 0 !important;
  }

  :root {
    --accent: #48489f;
    --card-bg: rgba(255, 255, 255, 0.02);
    --border: rgba(255, 255, 255, 0.08);
    --lcd-glow: rgba(72, 72, 159, 0.2);
  }

  /* --- Hero Section --- */
  .hero-card {
    background: linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%);
    border: 1px solid var(--border);
    border-radius: 40px;
    padding: 60px;
    display: flex;
    align-items: center;
    gap: 60px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .hero-card::after {
    content: "";
    position: absolute;
    top: -20%; right: -10%;
    width: 300px; height: 300px;
    background: var(--accent);
    filter: blur(150px);
    opacity: 0.15;
    z-index: 0;
  }

  .profile-pic {
    width: 220px;
    height: 220px;
    border-radius: 48px;
    object-fit: cover;
    z-index: 1;
    border: 1px solid var(--border);
    box-shadow: 0 40px 80px rgba(0,0,0,0.8);
    transform: rotate(-2deg);
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .hero-card:hover .profile-pic { transform: rotate(0deg) scale(1.05); }

  .hero-info h1 {
    font-size: 5rem;
    font-weight: 900;
    margin: 0;
    letter-spacing: -4px;
    background: linear-gradient(to bottom, #fff 40%, #555 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-info p {
    font-size: 1.3rem;
    color: #888;
    margin-top: 10px;
    max-width: 450px;
    line-height: 1.4;
  }

  /* --- The Bento Layout --- */
  .bento-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .bento-box {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 32px;
    padding: 35px;
    backdrop-filter: blur(20px);
  }

  .label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--accent);
    margin-bottom: 25px;
    display: block;
    font-weight: 800;
  }

  /* --- Skills Table --- */
  .stats-table { width: 100%; border-collapse: collapse; }
  .stats-table tr { border-bottom: 1px solid rgba(255,255,255,0.03); }
  .stats-table td { padding: 15px 0; font-size: 1.1rem; }
  .skill-name { color: #eee; font-weight: 500; }
  .project-count { text-align: right; color: var(--accent); font-family: monospace; font-weight: bold; }

  /* --- Projects Stack --- */
  .project-item {
    display: block;
    padding: 18px;
    border-radius: 18px;
    background: rgba(255,255,255,0.01);
    border: 1px solid transparent;
    text-decoration: none;
    transition: 0.3s;
    margin-bottom: 10px;
  }
  .project-item:hover {
    background: rgba(255,255,255,0.04);
    border-color: var(--accent);
    transform: translateX(8px);
  }
  .project-item h3 { margin: 0; font-size: 1rem; color: #fff; }
  .project-item p { margin: 4px 0 0 0; font-size: 0.85rem; color: #666; }

  /* --- LCD Display Dashboard --- */
  .lcd-container {
    background: #0a0a0a;
    border: 2px solid #222;
    border-radius: 24px;
    padding: 12px;
    box-shadow: 0 0 40px var(--lcd-glow);
    position: relative;
    overflow: hidden;
  }

  .lcd-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #111;
    border-radius: 14px 14px 0 0;
    border-bottom: 1px solid #222;
  }

  .status-dot {
    width: 8px; height: 8px;
    background: #00ff00;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff00;
    animation: pulse 1.5s infinite;
  }

  .lcd-screen {
    background: #000;
    padding: 20px;
    margin: 10px 0;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .media-frame {
    background: #111;
    border: 1px solid #222;
    width: 100%;
    max-width: 800px;
    aspect-ratio: 16/9;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }

  .media-frame iframe {
    width: 100%;
    height: 100%;
    border: 0;
    opacity: 0.9;
  }

  .scanline {
    width: 100%; height: 2px;
    background: rgba(72, 72, 159, 0.05);
    position: absolute; top: 0; left: 0;
    animation: scan 4s linear infinite;
    pointer-events: none;
    z-index: 10;
  }

  /* --- Animations --- */
  @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
  @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

  @media (max-width: 900px) {
    .hero-card { flex-direction: column; text-align: center; padding: 40px; }
    .hero-info h1 { font-size: 3.5rem; }
    .bento-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="hero-card">
  <img src="{{ page.icon }}" alt="Amardeep" class="profile-pic">
  <div class="hero-info">
     <span class="label" style="margin-bottom:10px">Sleeping</span>
    <h1>Amardeep</h1>
    <p>I eat I Learn I sleep</p>
  </div>
</div>

<div class="bento-grid">
  <div class="bento-box">
    <span class="label">Skill Matrix</span>
    <table class="stats-table">
      <thead>
        <tr style="border:none">
          <th style="text-align:left; font-size:10px; color:#444; padding-bottom:10px">TECH_ID</th>
          <th style="text-align:right; font-size:10px; color:#444; padding-bottom:10px">VERSION_COUNT</th>
        </tr>
      </thead>
      <tbody>
        {% for skill in site.data.skills %}
        <tr>
          <td class="skill-name">{{ skill.skill }}</td>
          <td class="project-count">{{ skill.count | default: "2" }}+</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>

  <div class="bento-box">
    <span class="label">Project Registry</span>
    <div class="project-stack">
      {% for project in site.data.projects %}
      <a href="{{ project.url }}" class="project-item">
        <h3>{{ project.Name }}</h3>
        <p>{{ project.Description | truncate: 65 }}</p>
      </a>
      {% endfor %}
    </div>
  </div>
</div>

<div class="lcd-container">
  <div class="lcd-header">
    <div style="display:flex; align-items:center; gap:10px">
      <div class="status-dot"></div>
      <span class="label" style="margin:0; font-size:9px">Feed: Decrypting</span>
    </div>
    <span style="font-family:monospace; font-size:9px; color:var(--accent)">SYS_042 // VIDEO_RECOGNITION</span>
  </div>
  
  <div class="lcd-screen">
    <div class="scanline"></div>
    <div class="media-frame">
      <iframe src="https://www.youtube.com/embed/djcRSEmnvZ8?si=X07Abn7chvvJ_sR8&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
  
  <div style="padding: 5px 15px; font-family: monospace; font-size: 8px; color: #333; display: flex; justify-content: space-between;">
    <span>ENCRYPTION: AES-256</span>
    <span>STATION: ONLINE</span>
  </div>
</div>
