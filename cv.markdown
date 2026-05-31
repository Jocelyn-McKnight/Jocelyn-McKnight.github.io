---
layout: page
title: CV
permalink: /cv/
---

📄 **[Download my full CV (PDF)](/assets/pdf/mcknight_cv.pdf)**

## General information

- **Full name:** Jocelyn Lily McKnight
- **Email:** [jocelyn.mcknight@uleth.ca](mailto:jocelyn.mcknight@uleth.ca)
- **Location:** Lethbridge, Alberta, Canada
- **Languages:** English (native), French (fluent), Spanish (novice)

<!-- Cute little map of where I've studied. Edit the markers in the script below. -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<div id="cv-map" style="height: 300px; border-radius: 8px; margin: 1rem 0 2rem; z-index: 0;"></div>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  (function () {
    var places = [
      { name: "Lethbridge, AB — University of Lethbridge", coords: [49.6935, -112.8418] },
      { name: "Calgary, AB — hometown", coords: [51.0447, -114.0719] }
    ];
    var map = L.map("cv-map", { scrollWheelZoom: false });
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

## Education

**Bachelor of Arts in English Language Arts** — University of Lethbridge, Lethbridge, AB
*(2022 – 2026)*
- Double minor in French and Linguistics.
- Courses include independent studies, applied study, and honours thesis.

**High School Diploma (French Immersion)** — Dr. E. P. Scarlett High School, Calgary, AB
*(2019 – 2022)*
- Graduated with Honours.
- French Immersion and Spanish Second Language program.
- Relevant coursework: French Language Arts, Spanish Language and Culture, Calculus, Physics.

## Experience

**Testing Centre Proctor** — University of Lethbridge Testing Centre *(Sep. 2025 – Present)*
- Managing the student sign-in process and verifying student identification.
- Ensuring a quiet, comfortable, and secure testing environment while monitoring exam
  writers to safeguard exam integrity.

**Podcast Production Assistant** — Confederation of Alberta Faculty Associations
*(Apr. 2025 – Present)*
- Communicating with proposed guests to check availability and schedule interviews.
- Providing guests with pre-interview material and conducting follow-up communications.

**Research Assistant** — The Visionary Cross Project *(Sep. 2024 – Present)*
- Contributed to a digital edition of Old English artifacts related to the Visionary
  Cross tradition.
- Assisted in all aspects of the project such as coding, research, and innovative
  problem solving.

**Undergraduate Teaching Assistant** — University of Lethbridge *(Sep. 2024 – Apr. 2025)*
- Assisting beginner French classes.
- Responsible for grading and feedback on grammar, style, and compositions.

**Instructional Designer** — Ignite Centre for eLearning *(Sep. 2023 – Apr. 2025)*
- Designed instructional materials for grades 1–12.
- Built online courses for high school students across Alberta.

## Volunteer

**President** — The Meliorist, University of Lethbridge *(Nov. 2025 – Present)*
- Leading the executive and general board in implementing the organization's strategic
  plan and ensuring alignment with governance practices.
- Overseeing initiatives to strengthen the journal's visibility and professional
  presence within the university community.

**Conference Organizer** — Environmental Conference of the Humanities *(Feb. 2025 – Present)*
- Developing and leading the planning of an Environmental Humanities conference at the
  University of Lethbridge.
- Preparing grants and internal funding applications with organizations such as LPIRG,
  ULSU, ULGSA, and Environmental Alberta.

**Treasurer** — The Meliorist, University of Lethbridge *(Nov. 2024 – 2025)*
- Managed financial planning and investments to ensure sustainable cash flow for new
  initiatives, including micro-grant programs.
- Chaired the Finance Committee and contributed to long-term strategic planning and
  executive decision-making.

## Honours and awards

**2025**
- Dean's Honour List (December, GPA 3.94)
- Lois Hole Humanities and Social Sciences Scholarship
- Jason Lang Scholarship
- LPIRG Event Grant
- Arthur J.E. Child Award in Economics, English, and History
- Senate Award
- ULSU Travel and Conference Grant
- Chinook Summer Research Award
- Dean's Honour List (April, GPA 3.80)

**2024**
- Dean's Honour List (December, GPA 3.80)
- Capstone Scholarship in Integrative Thinking
- University of Lethbridge Scholarship
- Jason Lang Scholarship
- Dean's Honour List (April, GPA 3.94)

**2023**
- Dean's Honour List (December, GPA 3.80)
- ORS Academic Achievement Award
- Jason Lang Scholarship
- Dean's Honour List (April, GPA 3.88)

**2022**
- Canadian Parents for French Alberta Bursary
- Alexander Rutherford Scholarship
- Board of Governors' Admission Scholarship

## Certifications

- DELF B1 — Alliance Française of Calgary (2022)
- DELF B2 — Alliance Française of Calgary (2022)
- Digital Humanities for Beginners — University of Lethbridge (2024)

## Skills

- Website development and markup (XML-TEI, HTML, Jekyll)
- Corpus Linguistics (AntConc, Voyant Tools, SketchEngine)

## Academic interests

- **Philology & Digital Humanities:** Old English, Old French, digital editions,
  scholarly interface design, 3D modeling, cultural heritage.
- **Linguistics:** corpus linguistics, mixed languages, semantics, cognitive
  linguistics, historical linguistics.
