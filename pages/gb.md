---
layout: page.njk
title: "Game Boy"
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

## Links

A collection of (almost) organized links.

### Modding Resources 

- https://moddedgameboy.club/
- https://gbwiki.org/
- https://gameboy.github.io
- https://consolemods.org/wiki/Game_Boy:Game_Boy_Mods_Wiki

### Dev Resources

- [The Game Boy, a hardware autopsy](https://www.youtube.com/playlist?list=PLu3xpmdUP-GRDp8tknpXC_Y4RUQtMMqEu) (Video)
- [The Ultimate Game Boy Talk](https://media.ccc.de/v/33c3-8029-the_ultimate_game_boy_talk) (Video)
- [Pan Docs](https://gbdev.io/pandocs), Game Boy technical documentation
- [Awesome Game Boy Development list of resources](https://gbdev.io/resources.html)
- Especially relevant is the ["Software Development"](https://gbdev.io/resources.html#software-development) section
- [How to choose between C and ASM for GB?](https://gbdev.io/guides/tools.html#languages)
- [RGBDS](https://rgbds.gbdev.io/) (ASM language)
- [GB ASM Tutorial](https://gbdev.io/gb-asm-tutorial/index)
- [GBDK](https://github.com/gbdk-2020/gbdk-2020/) (C language)
- [API docs: Getting Started](https://gbdk.org/docs/api/docs_getting_started.html)
- [Examples](https://github.com/mrombout/gbdk_playground) / [Open Source GBDK games](https://gbdk-2020.github.io/gbdk-2020-gallery/?openSource=true&sortSelector=Featured&categoryTags=Game)
- [Docs, links and tools](https://gbdk.org/docs/api/docs_links_and_tools.html)
- [ZGB: a game engine using GBDK](https://github.com/Zal0/ZGB) / [CrossZGB](https://github.com/gbdk-2020/CrossZGB) (an updated fork of ZGB)
- [Dedicated Discord](https://discord.gg/XCbjCvqnUY)
- ["How-to make a Gameboy Game"](https://laroldsretrogameyard.com/category/tutorials/gb/) tutorial series
- [GBStudio](https://www.gbstudio.dev/) (no coding required)
- [Resources to get started](https://gbstudiocentral.com/resources/)
- [Dedicated Discord](https://discord.gg/knRryZWGcm)
- [Let's Build a Platformer Game!](https://gumpyfunction.itch.io/lets-build-a-platformer)
- [GBSDK](https://github.com/daid/gbsdk) (C + RGBDS ASM, without a standard library)
- [Documentation](https://daid.github.io/gbsdk/)
- [Source for a game](https://github.com/QuinnPainter/CrossConnect) and [another game](https://github.com/QuinnPainter/Wyrmhole) built with GBSDK
- [lsdpack](https://github.com/jkotlinski/lsdpack) and [lsdlack-kit](https://github.com/rondnelson99/lsdpack-kit) for making LSDJ playback ROMs (other audio drivers in ROM form are ok too)
- [awesome-gbdev](https://github.com/gbdev/awesome-gbdev) and **[here](https://gbdev.io/resources.html)**
- https://gbdev.io
- https://gbadev.net
- https://gbwiki.org

### Camera

- https://github.com/untoxa/gb-photo
- https://funtography.online/wiki/Game_Boy_Camera_Wiki
- https://gameboycameraclub.com
- https://gameboymaniac.com
- https://gameboycamera.com

### Communities

- https://hh.gbdev.io
- https://www.reddit.com/r/Gameboy/
- https://gbatemp.net
- https://www.videogamesage.com
