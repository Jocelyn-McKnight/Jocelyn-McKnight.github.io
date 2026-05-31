---
layout: page
title: Blog
permalink: /blog/
---

Thoughts, posters, presentations, and project updates.

<div class="card-grid">
  {% for post in site.posts %}
  <div class="card">
    <a href="{{ post.url | relative_url }}">
      {% if post.thumbnail %}<img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title | escape }}">{% endif %}
      <div class="card-body">
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3>{{ post.title | escape }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
