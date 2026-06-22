---
theme: default
title: Automated Aquaculture Feeding Control
info: |
  Automated Aquaculture Feeding Control via RF-DETR Feed Recognition and Embedded Systems
class: text-center
drawings:
  persist: false
transition: slide-left
routerMode: hash
preloadImages: false
mdc: true
css: unocss
---

<div class="deck-title">
  <div class="eyebrow">Smart Aquaculture / Embedded AI</div>
  <h1>Automated Aquaculture<br>Feeding Control</h1>
  <p>via RF-DETR Feed Recognition and Embedded Systems</p>
</div>

<div class="mt-10 text-sm opacity-70">
CHENG-HSUN CHUANG · Sin-Ze Yang<br>
Chung Yuan Christian University<br>
Advisor: Prof. Yong-Xiang Chen
</div>

---
layout: two-cols
layoutClass: gap-12
---

# Motivation

Smart aquaculture needs better feeding decisions to reduce waste and improve production efficiency.

<v-clicks>

- Feed costs are a major operating expense
- Feed Conversion Ratio (FCR) directly affects profitability
- Manual feeding depends heavily on human experience
- Overfeeding pollutes water and increases mortality risk

</v-clicks>

::right::

<div class="impact-card">
  <div class="impact-number">FCR</div>
  <div class="impact-title">Feed Conversion Ratio</div>
  <div class="impact-text">A key indicator for balancing growth, cost, and environmental stability.</div>
</div>

---

# Problem Statement

Traditional manual feeding often creates an unstable control loop.

```mermaid
flowchart LR
  A[Manual Feeding] --> B[Subjective Judgment]
  B --> C[Overfeeding]
  C --> D[Feed Residue]
  D --> E[Water Pollution]
  E --> F[Higher Cost & Mortality Risk]
```

The goal is to replace subjective feeding with data-driven, real-time feedback control.

---

# System Overview

The proposed system observes floating feed residue, estimates consumption behavior, and controls feeding dynamically.

<div class="image-card compact">
  <img src="./assets/system_arch.png" alt="System architecture" />
</div>

<div class="mt-6 text-sm opacity-70">
System architecture from visual sensing to embedded feeding actuation.
</div>

---
layout: center
---

# Three-Phase Method

<div class="phase-grid">
  <div class="phase-card">
    <div class="phase-step">01</div>
    <h3>Object Detection</h3>
    <p>RF-DETR detects surface feed residue and calculates per-frame pixel area.</p>
  </div>
  <div class="phase-card">
    <div class="phase-step">02</div>
    <h3>Signal Smoothing</h3>
    <p>Kalman Filter reduces noise from refraction, ripples, and fish movement.</p>
  </div>
  <div class="phase-card">
    <div class="phase-step">03</div>
    <h3>Feedback Control</h3>
    <p>Consumption rate is mapped to hunger levels for dynamic precision feeding.</p>
  </div>
</div>

---

# Phase 1: RF-DETR Feed Recognition

RF-DETR is used to detect floating feed residue in real time.

<div class="image-card detection-card">
  <img src="./assets/fish_demo.png" alt="RF-DETR fish feed recognition demo" />
</div>

Key output:

- Detected feed residue location
- Pixel area per frame
- Time-series input for downstream filtering and control

---

# Phase 2: Kalman Filter

Aquaculture environments introduce unstable visual signals.

<div class="noise-grid">
  <div>Light refraction</div>
  <div>Water ripples</div>
  <div>Sudden fish movement</div>
  <div>Extreme outliers</div>
</div>

The Kalman Filter estimates a smoother trajectory of feed area over time, making consumption trends more reliable for control decisions.

---

# Phase 3: Hunger Assessment

The system computes Feed Consumption Rate (CR) from filtered data.

$$
r_t = \log(\hat{\theta}_t) - \log(\theta_{t-1})
$$

$$
H_t =
\begin{cases}
\text{Mild}, & r_t > -0.05 \\
\text{Moderate}, & -0.1 < r_t \le -0.05 \\
\text{Severe}, & r_t \le -0.1
\end{cases}
$$

This maps visual consumption signals into actionable feeding control states.

---

# Results: CR-Frame Analysis

<div class="result-layout">
  <div>
    <h3>What it shows</h3>
    <p>Feed Consumption Rate is calculated across frames and mapped to Hunger Zones.</p>
    <ul>
      <li>Mild: low feeding demand</li>
      <li>Moderate: normal feeding demand</li>
      <li>Severe: high feeding demand</li>
    </ul>
  </div>
  <div class="image-card">
    <img src="./assets/cunsumption_rate.png" alt="Consumption rate frame analysis" />
  </div>
</div>

---

# Results: Area-Frame Analysis

Area-frame analysis compares raw visual measurements with smoothed signals.

<div class="image-card wide">
  <img src="./assets/feed_area.png" alt="Feed area frame analysis" />
</div>

The smoothed signal suppresses extreme anomalies and supports more stable feeding decisions.

---

# Future Expectations

The system can be extended from a fixed feeding device to large-scale aquaculture operations.

<v-clicks>

- Integrate recognition and control algorithms with drones
- Support autonomous feeding vessels for mobile monitoring
- Enable wide-area precision feeding across large fish ponds
- Reduce labor cost and optimize resource allocation

</v-clicks>

---
layout: center
class: text-center
---

# Key Takeaways

<div class="takeaway-grid">
  <div>RF-DETR detects surface feed residue</div>
  <div>Kalman Filter stabilizes noisy visual signals</div>
  <div>CR-based hunger zones enable feedback control</div>
</div>

<div class="mt-12 text-xl font-semibold text-teal-700">
Toward automated, precise, and sustainable aquaculture feeding.
</div>

---
layout: center
class: text-center
---

# Thank You

Automated Aquaculture Feeding Control<br>
via RF-DETR Feed Recognition and Embedded Systems

<div class="mt-10 opacity-70">
Chung Yuan Christian University
</div>
