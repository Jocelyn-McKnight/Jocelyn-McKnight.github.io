---
layout: page
title: The Visionary Cross Project
description: Research Assistant
img: assets/img/vcp2.jpg
importance: 1
category: In progress
related_publications: true
giscus_comments: true
---

The Visionary Cross Project is a digital humanities initiative focused on the study and presentation of key medieval artifacts associated with The Visionary Cross tradition. These artifacts—the Ruthwell Cross, Bewcastle Cross, and Brussels Cross—are significant for their Old English and Runic inscriptions. The project has two primary goals: first, to produce high-quality 3D scans of these monuments, and second, to develop a digital edition and archive that makes the objects and their texts accessible to both scholars and the public. Before I began my work on the project, Dr. Daniel Paul O'Donnell from the University of Lethbridge and Dr. Roberto Rosselli Del Turco from the University of Torino completed the first goal of the project with their team.

I contributed to the second goal of the project by developing a working framework for the digital edition as part of an undergraduate independent study. My work began with evaluating platforms for streaming 3D models, ultimately opting to host the models on the Visionary Cross Project’s private repository and using GitHub as a base for the edition's website.

I created Version 1.0, a simple four-page site that established the visual style of pairing images of the crosses on the left with textual content on the right, consistent across the Ruthwell, Bewcastle, and Brussels sections. Clicking on the images links to the 3D models. While functional, this version revealed structural limitations, especially concerning navigation and long-term maintenance.

Building on these insights, I developed Version 2.0, which reorganized the site into modular sections inspired by other well-established digital editions. This version introduced separate folders for each cross and a “Frontmatter” section containing introductory materials. I experimented with a JavaScript solution for a shared header and footer to streamline updates, though security concerns highlighted the need for a more robust, future-proof approach.

Looking ahead to Version 3.0, I identified the need to transition the website’s backend to a platform like Jekyll, ensuring both security and scalability. I also explored options for the long-term hosting of the 3D models, including integrating the Archaeology Data Service (ADS) or using GitHub for decimated versions, though file size limitations present ongoing challenges. Future iterations aim to reintegrate the interactive functionality from the 2015 Ruthwell Edition, where 3D models and textual content dynamically respond to user interaction.

My work on the Visionary Cross Project reflects my interests in Old English, philology, and digital textual scholarship. This experience has allowed me to contribute to the preservation and presentation of these culturally significant artifacts while developing skills in digital edition design, web development, and 3D model integration.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vcp1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vcp2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vcp3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
</div>
