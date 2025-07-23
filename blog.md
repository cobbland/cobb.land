---
title: Blog
layout: layout.html
---
{% for post in collections.post %}
<div class="post-card">
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p class="date">{{ post.date }}</p>
</div>
{% endfor %}