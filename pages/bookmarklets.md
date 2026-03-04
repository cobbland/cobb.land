---
layout: page.njk
title: 'Bookmarklets'
permalink: /bookmarklets/
tags: [page]
date: 2026-03-03T11:50:00.00-05:00
---

Bookmarklets let you modify webpages with custom JavaScript, which is fun.

To use one of the below bookmarklets, drag it into your web browser's bookmarks bar, or manually create a new bookmark with the url beginning with `javascript:` followed by the js from one of the options below (potentially after [URL encoding](https://meyerweb.com/eric/tools/dencoder/) it).

(See [A Complete Guide to Bookmarklets](https://css-tricks.com/a-complete-guide-to-bookmarklets/) for more information.)

## Defuddle

<a class="bookmarklet" href="javascript:(()%20%3D%3E%20window.location.replace(%27https%3A%2F%2Fdefuddle.md%2F%27%20%2B%20document.URL))()%3B">Defuddle</a>

Convert articles to markdown using [Defuddle](https://defuddle.md).

```js
(() => window.location.replace('https://defuddle.md/' + document.URL))();
```

## Light Mode

<a class="bookmarklet" href="javascript:(()%20%3D%3E%20%7B%0A%20%20%20%20const%20style%20%3D%20document.createElement(%22style%22)%3B%0A%20%20%20%20style.innerHTML%20%3D%20%27body%20%7B%20background%3A%20%23FFF%20!important%3B%20color%3A%20%23000%20!important%3B%20%7D%27%3B%0A%20%20%20%20document.head.appendChild(style)%3B%0A%7D)()%3B">Light Mode</a>

Force light mode on websites that are designed by evil people who live in the shadows.

```js
(() => {
    const style = document.createElement("style");
    style.innerHTML = '*, .post__content { background: #FFF !important; color: #000 !important; }';
    document.head.appendChild(style);
})();
```

## Play Faster

<a class="bookmarklet" href="javascript:(()%20%3D%3E%20document.getElementsByTagName(%27video%27)%5B0%5D.playbackRate%20%3D%202.5)()%3B">Play faster</a>

<a class="bookmarklet" href="javascript:(()%20%3D%3E%20document.getElementsByTagName(%27video%27)%5B0%5D.playbackRate%20%3D%203)()%3B">Play FASTER!</a>

Play videos (on YouTube, PeerTube, and probably other places) faster. Replace `playbackRate` with desired speed.

```js
(() => document.getElementsByTagName('video')[0].playbackRate = 2.5)();
```