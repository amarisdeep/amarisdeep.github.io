---
layout: home
permalink: /skill/
---

<style>
  /* --- Skill Page Layout --- */
  .skill-wrapper {
    padding: 0px 20px 60px 20px; 
    max-width: 1100px; 
    margin: 0 auto;
    min-height: 90vh;
  }

  .header-section {
    margin-bottom: 45px;
    position: relative;
  }

  .header-section::before {
    content: "";
    position: absolute;
    top: -15px; left: -15px;
    width: 45px; height: 45px;
    border-top: 1px solid var(--accent, #48489f);
    border-left: 1px solid var(--accent, #48489f);
    opacity: 0.4;
  }

  .skill-title {
    font-size: 3.8rem;
    font-weight: 900;
    letter-spacing: -3px;
    text-transform: uppercase;
    margin: 0;
    background: linear-gradient(to bottom, #fff 50%, #555 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .system-path {
    font-family: monospace;
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--accent, #48489f);
    margin-bottom: 5px;
    display: block;
    text-transform: uppercase;
  }

  /* --- 3-Column Project Grid --- */
  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 25px;
    min-height: 300px;
  }

  .project-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 30px;
    border-radius: 28px;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
  }

  .project-card:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: var(--accent, #48489f);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }

  .project-card h3 {
    margin: 0;
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: -1px;
  }

  .project-card p {
    color: #888;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 15px 0;
    flex-grow: 1;
  }

  .card-skills-box {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid rgba(255,255,255,0.05);
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .skill-pill {
    font-family: monospace;
    font-size: 9px;
    color: #666;
    background: rgba(255, 255, 255, 0.03);
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.05);
  }

  /* --- No Result State (Updated for Readability) --- */
  .no-data {
    grid-column: 1 / -1;
    text-align: center;
    padding: 120px 0;
    color: #FFFFFF; /* Forced White for main error */
    font-family: monospace;
    letter-spacing: 4px;
    font-size: 12px;
    border: 1px dashed rgba(255,255,255,0.1);
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.01);
  }

  .no-data span {
    color: #666; /* Sub-text stays subtle */
    display: block;
    margin-top: 15px;
    letter-spacing: 1px;
    font-size: 10px;
  }

  @media (max-width: 1024px) {
    .project-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .project-grid { grid-template-columns: 1fr; }
    .skill-title { font-size: 2.8rem; }
    .skill-wrapper { padding-top: 100px; }
  }
</style>

<div class="skill-wrapper">
  <div class="header-section">
    <span class="system-path" id="sys-path">ARCHIVE // FETCHING...</span>
    <h1 class="skill-title" id="dynamic-title">SKILL</h1>
  </div>

  <div id="project-list" class="project-grid"></div>
</div>

<script>
  const urlParams = new URLSearchParams(window.location.search);
  const skillQuery = urlParams.get('type');
  
  const allProjects = [
    {% for project in site.data.projects %}
    {
      name: "{{ project.Name }}",
      desc: "{{ project.Description }}",
      url: "{{ project.url }}",
      tags: "{{ project.Tags | default: '' }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  if (skillQuery) {
    const cleanName = skillQuery.replace(/-/g, ' ');
    document.getElementById('dynamic-title').innerText = cleanName;
    document.getElementById('sys-path').innerText = `ARCHIVE // ${cleanName.toUpperCase()}`;
    
    const filtered = allProjects.filter(p => p.tags.toLowerCase().includes(cleanName.toLowerCase()));
    const listEl = document.getElementById('project-list');

    if (filtered.length > 0) {
      listEl.innerHTML = filtered.map(p => {
        const tagList = p.tags.split(',')
          .map(tag => `<span class="skill-pill">${tag.trim()}</span>`)
          .join('');

        return `
          <a href="${p.url}" class="project-card">
            <div>
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
            </div>
            <div class="card-skills-box">
              ${tagList}
            </div>
          </a>
        `;
      }).join('');
    } else {
      listEl.innerHTML = `
        <div class="no-data">
          // ERROR: 404_NO_RECORDS_IN_ARCHIVE
          <span>NO DATA ENTRIES FOUND FOR THIS DOMAIN TAG</span>
        </div>`;
    }
  } else {
    window.location.href = "/";
  }
</script>
