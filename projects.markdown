---
layout: page
title: Projects
permalink: /projects/
---

A collection of past and present projects. Click any project to read more.

{% assign categories = "In progress,past" | split: "," %}
{% for category in categories %}
<h2>{{ category | capitalize }}</h2>
<div class="projects-grid">
  {% assign items = site.projects | where: "category", category | sort: "importance" %}
  {% for project in items %}
  <div class="project-card">
    <a href="{{ project.url | relative_url }}">
      {% if project.img %}<img src="{{ project.img | relative_url }}" alt="{{ project.title | escape }}">{% endif %}
      <div class="card-body">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
{% endfor %}
