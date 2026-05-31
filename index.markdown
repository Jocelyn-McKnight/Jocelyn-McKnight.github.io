---
layout: page
title: Jocelyn McKnight
permalink: /
---

<img class="profile-pic" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Jocelyn McKnight">

Jocelyn McKnight is an undergraduate student currently pursuing a BA, majoring in
English Language Arts, with a French minor at the University of Lethbridge. Her
honour's thesis is focused on semantic changes in war and violence vocabulary in
Tok Pisin, a mixed English and Indigenous language in Papua New Guinea. Jocelyn is
involved in the Visionary Cross Project, works as an undergraduate TA in the
Linguistics and Modern Language Department, and serves as an instructional designer
for online secondary schooling in Alberta. Her academic interests revolve around
Old English philology, linguistics related to endangered languages, and digital
humanities.

### Academic interests

- **Philology & Digital Humanities** — Old English, Old French, digital editions,
  scholarly interface design, 3D modeling, cultural heritage.
- **Linguistics** — corpus linguistics, mixed languages, semantics, cognitive
  linguistics, historical linguistics.

### Find me online

- Email: [jocelyn.mcknight@uleth.ca](mailto:jocelyn.mcknight@uleth.ca)
- GitHub: [Jocelyn-McKnight](https://github.com/Jocelyn-McKnight)
- LinkedIn: [jocelyn-mcknight](https://www.linkedin.com/in/jocelyn-mcknight)
- ORCID: [0009-0006-5636-2854](https://orcid.org/0009-0006-5636-2854)
- [Zenodo publications](https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22McKnight%2C%20Jocelyn%22&l=list&p=1&s=10&sort=bestmatch)

### Where I am

<!-- A little map of where I've studied. Edit the markers in the script below. -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<div id="home-map" style="height: 300px; border-radius: 14px; margin: 1rem 0 2rem; z-index: 0;"></div>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  (function () {
    var places = [
      { name: "Lethbridge, AB — University of Lethbridge", coords: [49.6935, -112.8418] },
      { name: "Calgary, AB — hometown", coords: [51.0447, -114.0719] }
    ];
    var map = L.map("home-map", { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var group = L.featureGroup(
      places.map(function (p) { return L.marker(p.coords).bindPopup(p.name); })
    ).addTo(map);
    map.fitBounds(group.getBounds().pad(0.5));
  })();
</script>
