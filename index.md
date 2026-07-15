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
        {% assign tech_tags = "hermes-agent|debian|freebsd|llm-local|linux|freebsd|open-source|self-hosted|ai" | split: "|" %}
        {% for tag in post.tags %}
          {% if tech_tags contains tag %}
            <span class="post-item-badge">{{ tag }}</span>
            {% break %}
          {% endif %}
        {% endfor %}
      {% endif %}
    </li>
    {% endfor %}
  </ol>
</section>
