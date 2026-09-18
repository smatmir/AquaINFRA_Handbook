---
layout: chapter
title: "Research Questions & Key Objectives"
parent: "Elbe Estuary"
nav_order: 2
---

# Research Questions & Key Objectives

<p class="chapter-meta">Chapter 2 of 3</p>

<div class="chapter-intro">
    <p>Managing estuarine ecosystems requires quantifying the complex interplay between riverine nutrient inputs, tidal mixing, and anthropogenic dredging. This chapter outlines the core research questions addressed by the Elbe Estuary AquaINFRA use case.</p>
</div>

The primary objective of this use case is to provide an open, FAIR, and reproducible workflow to evaluate how nutrient transport and hydrodynamic changes impact oxygen dynamics and water quality in the Elbe Estuary.

---

## Core Research Questions

<div class="question-list">
    <ol>
        <li><strong>Nutrient Flux & Seasonal Transport:</strong> How do seasonal variations in river discharge control the mass transport of dissolved inorganic nitrogen (DIN) and phosphorus from the upper Elbe catchment into the German Bight?</li>
        <li><strong>Oxygen Minimum Dynamics & Hypoxia:</strong> What combination of high water temperature, organic matter loading, and slowed flow velocity triggers severe oxygen depletion events (< 3 mg/L O₂) in the Hamburg port area during summer?</li>
        <li><strong>Estuarine Turbidity & Light Availability:</strong> How does channel deepening alter the position and intensity of the Estuarine Turbidity Maximum (ETM), and how does reduced light availability affect estuarine primary production?</li>
        <li><strong>Climate Change & Salinity Intrusion:</strong> How will projected sea-level rise and increased frequency of summer droughts shift the salt wedge further upstream toward freshwater intake zones?</li>
    </ol>
</div>

---

## Oxygen Deficit & Hypoxia Mechanism

<div class="flow-steps">
    <div class="flow-step flow-step--emerald">
        <div class="flow-step__title">1. River input</div>
        <div class="flow-step__body">High nitrogen and organic biomass load arrives from the upstream catchment.<span class="flow-step__note">Upstream Elbe catchment</span></div>
    </div>
    <div class="flow-step flow-step--amber">
        <div class="flow-step__title">2. Deepened channel</div>
        <div class="flow-step__body">Flow velocity drops and water depth increases in the navigation channel.<span class="flow-step__note">Hamburg port basin</span></div>
    </div>
    <div class="flow-step flow-step--rose">
        <div class="flow-step__title">3. Respiration</div>
        <div class="flow-step__body">Microbial decay of that organic load consumes the dissolved oxygen.<span class="flow-step__note">Bottom water layer</span></div>
    </div>
    <div class="flow-step flow-step--rose flow-step--critical">
        <div class="flow-step__title">4. Hypoxia</div>
        <div class="flow-step__body">Oxygen falls below 3.0 mg/L and fish come under stress.<span class="flow-step__note">Summer crisis</span></div>
    </div>
</div>

> [!IMPORTANT]
> The cascade needs two compounding summer drivers to tip over: water temperature above 22 °C and discharge below 400 m³/s. Both are simulated with the SCHISM hydrodynamic model coupled to the MOSSCO biogeochemical ecosystem model.

---

<details class="knowledge-check">
    <summary>Check Your Understanding: Estuarine Hypoxia Triggers</summary>
    <div class="answer-content">
        <p><strong>Question:</strong> Why does oxygen depletion peak near Hamburg harbor rather than in the open coastal waters of the German Bight?</p>
        <p><strong>Answer:</strong> Hamburg harbor features a artificially deepened navigation channel. When freshwater flow slows down in summer, high water temperatures accelerate bacterial decomposition of upstream organic matter. The deep water layer receives minimal atmospheric re-aeration, creating a pronounced oxygen deficit zone before water reaches the well-mixed marine coast.</p>
    </div>
</details>

---
