---
title: Good Web Search
summary: An extension for Chromium-based browsers
tags: tech
date: 2026-01-18T14:10:00.00-05:00
possed: https://dice.camp/@cobb/115906855071117759
---

Search on the web is so broken right now. Ads, auto generated "answers", "related" searches, LLM slop—the list goes on and on. In an effort to curb some of this crap, I spent Friday hacking together a little extension for Chromium-based browsers. I call it **[Good Web Search](https://github.com/cobbland/good-web-search)**. Right now, all it does is adjusts search parameters for potentially better results and offers a few alternative search options, but I hope to add more features as time goes on (and as I learn how to properly make an extension in the first place).

All of the extension's features work when using the Vivaldi browser (and should work with other Chromium-based browsers, though I haven't tested yet) and searching on Google, with some of the features working on StartPage, DuckDuckGo, et cetera. It can force Google to use the "web" search mode, removing a lot of the cruft, and can append "before:2023" and/or "-ai" to search queries to get rid of most of the rest. Each of the aforementioned features can be toggled off and on in the extension's popup menu, where it also links to some websites where you might rather be searching anyway (Wikipedia, et cetera).

I'm pretty happy with it so far. If you try it out, [let me know](/contact) how it goes and if you encounter any bugs or have suggestions for improvement!