---
layout: chapter
nav_order: 1
parent: "Vantaanjoki River and Gulf of Finland"
title: "Introduction"
---
# Introduction

<p class="chapter-meta">Chapter 1 of 3</p>

<div class="chapter-intro">
    <p>Exploring the land-river-sea connections in the Vantaanjoki urban catchment through Earth Observation and in-situ data.</p>
</div>

The Vantaanjoki River flows directly into the Gulf of Finland at Helsinki. Covering a 1,680 km² basin, the river acts as a primary transport pathway for nutrients and materials from a highly diverse catchment area to the coastal sea.

During snowmelt seasons and flash floods, the turbid water from the river spreads far into the Gulf, visibly altering the colour and ecology of the coastal surface waters. To monitor this dynamic system, the AquaINFRA project combines multiple layers of observation.

<figure class="diagram diagram--svg">
<div class="figure-scroll">
<svg viewBox="0 0 800 340" role="img" aria-labelledby="gof-title gof-desc">
  <title id="gof-title">Source-to-sea observation chain, Vantaanjoki to the Gulf of Finland</title>
  <desc id="gof-desc">Three observation layers along one continuum: CORINE land-use data over the catchment, in-river sensors measuring discharge and water quality, and FerryBox transects sampling coastal gradients in the Gulf, with Earth observation covering the whole chain from above.</desc>

  <defs>
    <linearGradient id="gofRiver" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <linearGradient id="gofSea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>

  <text x="400" y="36" class="fig-title" text-anchor="middle">From catchment to coastal sea</text>

  <!-- Catchment relief -->
  <path d="M0 196 Q 140 164 300 214 T 520 240 L 520 340 L 0 340 Z" fill="#334155"/>
  <path d="M0 220 Q 150 196 300 236 T 520 262 L 520 340 L 0 340 Z" fill="#1e293b"/>

  <!-- River corridor -->
  <path d="M 0 236 Q 150 220 280 250 T 520 278 L 520 296 Q 300 268 150 244 T 0 254 Z" fill="url(#gofRiver)"/>

  <!-- Coastal sea -->
  <path d="M 500 246 C 600 240 700 224 800 224 L 800 340 L 500 340 Z" fill="url(#gofSea)"/>

  <!-- Earth observation -->
  <g transform="translate(560, 92)">
    <rect x="-24" y="-12" width="48" height="24" rx="4" fill="#e2e8f0"/>
    <rect x="-64" y="-4" width="38" height="8" fill="#3b82f6"/>
    <rect x="26" y="-4" width="38" height="8" fill="#3b82f6"/>
    <circle cx="0" cy="0" r="5" fill="#f87171"/>
    <text x="0" y="-26" class="fig-label" text-anchor="middle">Earth observation</text>
    <path d="M -10 14 L -230 108" stroke="#f87171" stroke-width="2" stroke-dasharray="6 5" opacity="0.55"/>
    <path d="M 6 14 L 92 122" stroke="#f87171" stroke-width="2" stroke-dasharray="6 5" opacity="0.55"/>
  </g>

  <!-- Observation nodes -->
  <g transform="translate(120, 190)">
    <circle cx="0" cy="0" r="13" fill="#f59e0b" stroke="#0f172a" stroke-width="3"/>
    <text x="0" y="-26" class="fig-label" text-anchor="middle">Catchment</text>
    <text x="0" y="34" class="fig-sub" text-anchor="middle">CORINE land use</text>
  </g>

  <g transform="translate(330, 250)">
    <circle cx="0" cy="0" r="13" fill="#10b981" stroke="#0f172a" stroke-width="3"/>
    <text x="0" y="-26" class="fig-label" text-anchor="middle">River sensors</text>
    <text x="0" y="34" class="fig-sub" text-anchor="middle">Discharge &amp; quality</text>
  </g>

  <g transform="translate(662, 268)">
    <circle cx="0" cy="0" r="13" fill="#818cf8" stroke="#0f172a" stroke-width="3"/>
    <text x="0" y="-26" class="fig-label" text-anchor="middle">FerryBox</text>
    <text x="0" y="34" class="fig-sub" text-anchor="middle">Coastal gradients</text>
  </g>

  <!-- Transport direction -->
  <path d="M 150 316 L 690 316" stroke="#475569" stroke-width="2" stroke-dasharray="7 5"/>
  <polygon points="690,311 702,316 690,321" fill="#475569"/>
  <text x="150" y="306" class="fig-note">Material transport, land to sea</text>
</svg>
</div>
<figcaption>Figure 1: The source-to-sea continuum connecting land use, riverine transport, and coastal observation.</figcaption>
</figure>

### System Characteristics

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Component</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Catchment Area</strong></td>
                <td>1,680 km² featuring highly diverse land use (57% forest/semi-natural, 22% agriculture, 19% urban/built).</td>
            </tr>
            <tr>
                <td><strong>Riverine Pressures</strong></td>
                <td>High population density in the Helsinki metropolitan region leads to intense recreational use and environmental pressure.</td>
            </tr>
            <tr>
                <td><strong>Marine Recipient</strong></td>
                <td>The Gulf of Finland, where riverine turbidity and nutrient loads drive significant changes in water quality and ecology.</td>
            </tr>
            <tr>
                <td><strong>Observation Network</strong></td>
                <td>Combines inland automated river stations, commercial ship-mounted <strong>FerryBox</strong> systems, and satellite Earth Observation (EO).</td>
            </tr>
        </tbody>
    </table>
</div>

---
