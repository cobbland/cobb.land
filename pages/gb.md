---
layout: page.njk
title: "GB"
permalink: /gb/
tags: [page]
date: 2026-04-07T14:00:00.00-04:00
---

## Colors

Press and hold one of the following button combinations while turning on the gb.

| Color Filter    | Button Press  |
| :-------------- | :------------ |
| Brown           | UP            |
| Blue            | LEFT          |
| Pastel          | DOWN          |
| Green           | RIGHT         |
| Red             | UP + A        |
| Dark Blue       | LEFT + A      |
| Orange          | DOWN + A      |
| Dark Green      | RIGHT + A     |
| Dark Brown      | UP + B        |
| Grayscale       | LEFT + B      |
| Yellow          | DOWN + B      |
| Negative        | RIGHT + B     |
| DMG 1 (Gameboy) | RIGHT + A + B |
| DMG 2 (Gameboy) | LEFT + A + B  |

## EverDrive

*These instructions are specifically for the [EverDrive-GB X7](https://krikzz.com/our-products/cartridges/edgbx7.html), though they'll likely work close enough for other EverDrives.)*

**To setup an EverDrive cartridge:**

1. Format a microSD card with FAT32
2. Download and write to the formatted card the contents of the latest [OS file(s)](https://krikzz.com/pub/support/everdrive-gb/x-series/OS/)
3. Add roms to card
4. Sort roms using [FATsort](https://fatsort.sourceforge.io)
    1. [Install](https://formulae.brew.sh/formula/fatsort)
    2. Find the drive to sort using `lsblk`
    3. Unmount the drive using `umount`
    4. Sort using `fatsort` (example: `fatsort /dev/sbc1`)
5. Insert card into cartridge and cartridge into Game Boy

**Tips for using an EverDrive:**

- Tips will go here 
