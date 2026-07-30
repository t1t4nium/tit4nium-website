---
layout: default
nav_title: home
nav_order: 1
---

<section class="home">
  <div class="home-prompt" data-tagline="journal de bord technique">
    <span>tit4nium</span>@blog:~$ <span class="prompt-cursor">█</span>
  </div>

  <ol class="post-list">
    {% assign sorted = site.posts | sort: 'date' | reverse %}
    {% for post in sorted %}
    <li class="post-item">
      <time class="post-item-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %b %Y" }}</time>
      <a href="{{ post.url | relative_url }}" class="post-item-title">{{ post.title }}</a>
      {% if post.tags %}
        <span class="post-item-badge">{{ post.tags | first }}</span>
      {% endif %}
    </li>
    {% endfor %}
  </ol>
</section>
