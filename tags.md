---
layout: default
nav_title: tags
nav_order: 2
title: Tags
permalink: /blog/tags/
description: "Index des tags du blog, triés par nombre de posts."
---

<section class="tags-page">
  <header class="page-head">
    <h1 class="page-title">Tags</h1>
  </header>

  {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq | sort %}
  {% assign max_count = 0 %}
  {% for tag in all_tags %}
    {% assign count = site.posts | where_exp: "p", "p.tags contains tag" | size %}
    {% if count > max_count %}{% assign max_count = count %}{% endif %}
  {% endfor %}

  <div class="tag-cloud">
    {% for level in (1..max_count) reversed %}
      {% for tag in all_tags %}
        {% assign count = site.posts | where_exp: "p", "p.tags contains tag" | size %}
        {% if count == level %}
        <a href="/blog/tag/{{ tag | slugify }}/" class="tag">
          {{ tag }}
          <span class="tag-count">{{ count }}</span>
        </a>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div>
</section>
