---
tags:
  - tech
  - personal
  - writing
date: 2024-11-16
---
# Fancy initial letter

<span class="firstletter">I</span> <span class="firstwords">was browsing [The Folio Society's](https://www.foliosociety.com/)</span> website yesterday, as I am wont to do. Don't worry for me—I'm not at great risk of spending money because those books are just too dang expensive. But, man, do I want some (read: all) of them.

Among the many books that caught my eye—a [LotR](https://www.foliosociety.com/usa/the-lord-of-the-rings.html) boxed set (and [accompanying](https://www.foliosociety.com/usa/the-hobbit.html) [books](https://www.foliosociety.com/usa/the-silmarillion.html)), a [Dune collection](https://www.foliosociety.com/usa/the-dune-collection.html) (because I really need another one of those), and all the [books of Earthsea](https://www.foliosociety.com/usa/books-of-earthsea.html)—I spotted their [two-volume edition](https://www.foliosociety.com/usa/the-book-of-the-new-sun-2-volume.html) of *The Book of the New Sun*. Seeing the layout within its pages sent me on a typographic journey. I had to know: What is that big letter at the beginning of a chapter called? And, more importantly, how do I have that on my website?

![Mm, look at that initial.](/_stuff/attachments/bkn_03.jpg)

It turns out, its called an [initial](https://en.wikipedia.org/wiki/Initial) (or an initia, if we're talking about illuminated manuscripts, apparently). An initial is a letter at the beginning of a paragraph that's larger than the rest of the text. And I *think* the particular style of initial in question is a drop cap illustrated initial.

![Delamotte, F.: “Ornamental Alphabets, Ancient and Mediæval” (1879)](/_stuff/attachments/Ornamental_Alphabet_-_16th_Century.svg)

There are a variety of ways to add initials to website text. I read a few articles and followed a couple tutorials[^1], messing around with some of the more modern ways, but deciding to go with the most compatible route in the end. (Mostly because my site's current HTML and CSS is a mess, and because `initial-letter` isn't supported by my preferred browser.)

Here is the HTML I've added to my blog post template:

```html
<span class="firstletter">X</span><span class="firstwords">xxxx xxxxx xxxxx xxxxx xxxxx</span>
```

And here is the CSS:

```css
.firstletter {
  color: rgb(209, 77, 65);
  float: left;
  font-family: 'Typographer Woodcut Initials';
  font-size: 75px;
  line-height: 1;
  padding-top: 4px;
  padding-right: 8px;
}

.firstwords {
  font-variant: small-caps;
}
```

I have no doubt smarter folks than me could come up with better ways of doing this, but I'm pretty happy with what I managed to accomplish. (At least, until I get the website redesign itch again—it's coming!)

[^1]: ["Creating Beautiful and Accessible Drop Caps"](https://thegymnasium.com/courses/take5/creating-beautiful-and-accessible-drop-caps), ["Drop Caps"](https://css-tricks.com/snippets/css/drop-caps/), ["Drop caps & design systems"](https://product.voxmedia.com/2019/6/17/18524029/the-ballad-of-drop-caps-and-design-systems), ["Drop caps (styling the initial letter)"](https://rwt.io/typography-tips/drop-caps-styling-initial-letter)