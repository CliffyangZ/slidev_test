這份海報的標題為 **"Automated Aquaculture Feeding Control via RF-DETR Feed Recognition and Embedded Systems"**（基於 RF-DETR 飼料識別與嵌入式系統之自動化水產養殖餵食控制），是由中原大學（Chung Yuan Christian University）智慧運算與大數據碩士學位學程的學生 CHENG-HSUN CHUANG 與 Sin-Ze Yang 所製作，指導教授為 Prof. Yong-Xiang Chen。

以下是海報各個章節的英文詳細說明：

---

## 1. MOTIVATION

With the rapid advancement of smart aquaculture, minimizing feed costs and optimizing the **feed conversion ratio (FCR)** have emerged as pivotal challenges. Traditional manual feeding is not only labor-intensive but also highly susceptible to subjective human experience and operational instability. This frequently leads to **overfeeding**, where accumulated feed residues decompose and severely **pollute the aquatic environment**, driving up production costs and escalating fish mortality risks.

## 2. SYSTEM ARCHITECTURE AND METHOD

The core algorithm consists of three distinct phases designed to achieve precision feeding:

* **Phase 1: Object Detection (RF-DETR)**
A custom **RF-DETR** model detects surface feed residue in real time to calculate the per-frame pixel area.
* **Phase 2: Signal Smoothing (Kalman Filter)**
To reduce environmental noise caused by light refraction, water ripples, and sudden fish movements, a **Kalman Filter** is applied for trajectory estimation and signal smoothing, effectively reducing extreme outliers.
* **Phase 3: Feedback Control & Hunger Assessment**
Finally, the system computes the **Feed Consumption Rate (CR)** from the filtered data to accurately quantify **fish hunger levels** (categorized into *mild*, *moderate*, or *severe*). This enables an automated, dynamic feedback control loop for precision feeding.

### Core Visual Components Mentioned:

* **Figure 1.** System Architecture (illustrating data flow from the camera module, Raspberry Pi Zero 2W, server/backend, to the microcontroller).
* **Figure 2.** Mechanical Structure (the physical automated feeder setup).
* **Figure 3.** Detection Result (the bounding boxes and pixel areas identified by RF-DETR).

---

## 3. RESULTS & DISCUSSION

This section analyzes data profiles through real-time feedback charts:

* **Figure 4. CR-Frame analysis:** Demonstrates the calculated Feed Consumption Rate and maps it directly to the designated **Hunger Zone** mathematical model:

$$r_t = \log(\hat{\theta}_t) - \log(\theta_{t-1})$$


$$\text{Hunger level: } H_t = \begin{cases} \text{Mild}, & r_t > -0.05 \\ \text{Moderate}, & -0.1 < r_t \le -0.05 \\ \text{Severe}, & r_t \le -0.1 \end{cases}$$


* **Figure 5. Area-Frame analysis:** Displays a comparative line graph tracking the raw surface feed area versus the **Kalman-Filtered vs. EMA Feed Area** across frame numbers, showing how extreme anomalies are smoothed out over time.

---

## 4. FUTURE EXPECTATIONS & APPLICATIONS

Future developments will focus on adapting this system for **large-scale aquaculture** environments. By integrating the core recognition and control algorithms with **drones** or **autonomous feeding vessels**, the system can conduct wide-area mobile monitoring. This expansion will enable automated, precision feeding across massive fish ponds, **optimizing resource allocation** and **reducing labor costs** in commercial aquafarms.