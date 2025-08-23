---
title: Remove Unread Counts from Miniflux
summary: Because numbers are stressful
tags: 
date: 2025-08-23T12:23:00.00-04:00
possed: https://dice.camp/@cobb/115079051116418769
---

A recent <a href="https://kedara.eu/organising-feeds-permaculture">post by Ruben</a> and <a href="https://dice.camp/@kedara_eu@kedara.social/115077909529571008">conversation on Mastodon</a> inspired me to finally mess with some custom CSS to remove all the unread counters from my feed reader of choice—<a href="https://miniflux.app/">Miniflux</a>.

If you too happen to use Miniflux<sup><a href=#1down id="1up">1</a></sup> and want the same peaceful feed reading experience, here is the CSS I used<sup><a href=#2down id="2up">2</a></sup> (to be added under "Settings" then "Custom CSS":

<pre><code>.category-item-total, 
.feed-entries-counter, 
.unread-counter-wrapper, 
.error-feeds-counter-wrapper, 
#page-header-title > span {
    display: none !important;
}</code></pre>

<p class="note footnote"><a href="#1up" id="1down">1</a>: If you don't already have a feed reader, <a href="https://miniflux.app/">Miniflux</a> is a great option ($15/year or free if you self-host).</p>

<p class="note footnote"><a href="#2up" id="2down">2</a>: I know, I know—I used !important. But I had to in this case. Don't at me.</p>