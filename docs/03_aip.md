---
layout: handbook_page
nav_order: 3
title: "DDAS and AIP"
---

# Data Discovery & Interaction: DDAS and AIP

> [!NOTE]
> **At a Glance**
> - Harvest and expose multidisciplinary datasets through the [Data Discovery & Access Service (DDAS)]({{ relative_root }}reference/glossary#ddas) using standard OGC Web APIs.
> - Search datasets, workflows, and packages across multiple providers from a single interface on the [AquaINFRA Interaction Platform (AIP)]({{ relative_root }}reference/glossary#aip).
> - Subset spatial data graphically and trigger direct imports into [Aqua Galaxy]({{ relative_root }}reference/glossary#aqua-galaxy).

Together, the **[Data Discovery & Access Service (DDAS)]({{ relative_root }}reference/glossary#ddas)** and the **[AquaINFRA Interaction Platform (AIP)]({{ relative_root }}reference/glossary#aip)** form the discovery and access layer of AquaINFRA:

- **DDAS** is the backend service that harvests metadata, connects distributed repositories, and exposes datasets through standardised [OGC Web APIs]({{ relative_root }}reference/glossary#ogc) for querying and on-demand spatial subsetting.
- **AIP** is the user-facing web portal at [aquainfra.dev.52north.org](https://aquainfra.dev.52north.org/), powered by DDAS. You can use it to query Earth observation data, hydrographic networks, analytical workflows, and water quality parameters across major European data providers (Zenodo, EMODnet, Copernicus Marine, HELCOM).

---

## Video Tutorial Part 1: Data Discovery & Access Service (DDAS)

Watch how DDAS connects distributed marine and freshwater repositories, standardises metadata harvesting, and exposes datasets via OGC Web APIs.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/VtH1NTCoPg8?list=PLNyM9_MJ3Css" title="YouTube video player - Part 1: Data Discovery and Access Service (DDAS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Video Tutorial Part 2: AquaINFRA Interaction Platform (AIP)

Watch how to search datasets on the AIP, apply spatial and thematic filters, and trigger imports into Aqua Galaxy for analysis.

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/CCoKYdVR73Q?list=PLNyM9_MJ3Css" title="YouTube video player - Part 2: AquaINFRA Interaction Platform (AIP)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Ingestion Methods

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Workflow Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>OGC API Feature Import (via DDAS)</strong></td>
                <td>Direct one-click import for OGC-compliant data providers. DDAS subsets the data on the backend server before transfer.</td>
                <td>Click <strong>Import to Galaxy</strong> directly on the AIP dataset card.</td>
            </tr>
            <tr>
                <td><strong>Direct Download URL Import</strong></td>
                <td>Manual import path for datasets requiring data-usage disclaimers or external landing pages.</td>
                <td>Copy direct dataset download link &rarr; Paste into Galaxy <strong>Insert URL</strong> dialog.</td>
            </tr>
        </tbody>
    </table>
</div>

> [!TIP]
> **Session Connection**: Keep Aqua Galaxy open in an adjacent browser tab before clicking *Import to Galaxy* on AIP to ensure automatic session detection.
