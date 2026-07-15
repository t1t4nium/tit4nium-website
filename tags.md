---
layout: page
nav_title: tags
nav_order: 3
title: /tags
permalink: /tags/
description: "Archives par thème technique : agent IA, Linux, open source, privacy."
---

<section class="tags-page">
  <div class="tag-cloud">
    {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | uniq | sort %}
    {% for tag in all_tags %}
    <a href="#{{ tag }}" class="tag">{{ tag }}</a>
    {% endfor %}
  </div>

  {% for tag in all_tags %}
  <div class="tag-group">
    <h2 id="{{ tag }}">#{{ tag }}</h2>
    <ol class="post-list">
      {% assign tagged = site.posts | where_exp: "p", "p.tags contains tag" | sort: "date" | reverse %}
      {% for post in tagged %}
      <li class="post-item">
        <time class="post-item-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %b %Y" }}</time>
        <a href="{{ post.url | relative_url }}" class="post-item-title">{{ post.title }}</a>
      </li>
      {% endfor %}
    </ol>
  </div>
  {% endfor %}
</section>
