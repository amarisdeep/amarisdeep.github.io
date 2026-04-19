---
title: "Home"
permalink: /
layout: home
icon: "assets/img/logo.jpg"
---

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    margin: 0 auto !important;
  }

  .chart-wrapper {
    width: 100%;
    max-width: 550px;
    position: relative;
    margin-bottom: 30px;
  }

  /* --- Ultra-Minimalist Silent Button --- */
  .action-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 50px;
    height: 20px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .action-btn::after {
    content: "";
    width: 6px;
    height: 6px;
    background: #48489f;
    border-radius: 50%;
    box-shadow: 0 0 10px #48489f;
    animation: pulse 2s infinite;
  }

  .action-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #48489f;
    transform: scale(1.1);
  }

  @keyframes pulse {
    0% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 0.3; transform: scale(0.8); }
  }
</style>

<div class="chart-wrapper">
  <canvas id="techStatChart"></canvas>
</div>

<button class="action-btn" id="toggleView" onclick="toggleChart()"></button>

<script>
  const ctx = document.getElementById('techStatChart').getContext('2d');
  let currentMode = 'skills';
  
  // --- Data Fetching from skills.csv ---
  const rawData = [
    {% for item in site.data.skills %}
    { 
      skill: "{{ item.skils | default: 'Unknown' }}", 
      count: {{ item.count | default: 0 }}, 
      domain: "{{ item.domaion | default: 'tech' | downcase }}" 
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  // Logic to group by domain
  const domainAverages = {};
  rawData.forEach(item => {
    if (!domainAverages[item.domain]) {
      domainAverages[item.domain] = { total: 0, count: 0 };
    }
    domainAverages[item.domain].total += item.count;
    domainAverages[item.domain].count += 1;
  });

  const domainData = Object.keys(domainAverages).map(d => ({
    label: d.toUpperCase(),
    value: Math.min(100, domainAverages[d].total / domainAverages[d].count)
  }));

  const colors = ['#48489f', '#ff4d4d', '#00ffaa', '#ffcc00', '#ff00ff', '#00ccff', '#8e44ad', '#e67e22'];

  // --- Initialize Chart ---
  let chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: rawData.map(d => d.skill),
      datasets: [{
        data: rawData.map(d => Math.min(100, d.count)),
        fill: true,
        backgroundColor: 'rgba(72, 72, 159, 0.2)',
        borderColor: 'rgba(72, 72, 159, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: colors,
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverRadius: 10
      }]
    },
    options: {
      // --- CLICK LOGIC ---
      onClick: (e, activeEls) => {
        if (activeEls.length > 0 && currentMode === 'skills') {
          const index = activeEls[0].index;
          const skillName = rawData[index].skill.toLowerCase().replace(/\s+/g, '-');
          window.location.href = `/skill/?type=${skillName}`;
        }
      },
      scales: {
        r: {
          grid: { color: 'rgba(255, 255, 255, 0.08)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: { display: false },
          pointLabels: {
            color: '#FFFFFF', 
            font: { size: 14, family: 'Plus Jakarta Sans', weight: 'bold' },
            padding: 20
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#000',
          displayColors: false,
          callbacks: {
            title: () => null, // Removes skill name from tooltip
            label: (item) => `${item.raw.toFixed(0)}` // Only shows the number
          }
        }
      }
    }
  });

  function toggleChart() {
    if (currentMode === 'skills') {
      chart.data.labels = domainData.map(d => d.label);
      chart.data.datasets[0].data = domainData.map(d => d.value);
      currentMode = 'domains';
    } else {
      chart.data.labels = rawData.map(d => d.skill);
      chart.data.datasets[0].data = rawData.map(d => Math.min(100, d.count));
      currentMode = 'skills';
    }
    chart.update();
  }
</script>
