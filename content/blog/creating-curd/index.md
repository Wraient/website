+++
title = "Creating Curd"
description = "How i created CLI app to watch japanese animation"
date = 2025-12-28T05:49:00+05:30

[taxonomies]
tags = ["Developement"]

[extra]
go_to_top = true
katex = true
banner = "zoro_with_luffy.png"
archive = ""
trigger = ""
disclaimer = ""

# toc = true
# toc_inline = true
+++
> [!NOTE]
> TL;DR: I created a CLI app to watch anime using CLI
# Introduction
Imagine this, you switch to linux <span class="spoiler">(Arch btw)</span> and you start using cli for everything, you find <a class="external" target="_blank" href="https://github.com/justchokingaround/jerry">a cli app to watch anime using CLI</a> you love it, But one day you sit down to eat with delicious food and start an anime, but it takes a minute to start one episode and you have to sit there waiting for the anime to start just looking at the food. THAT IS HELL.

This happened to me alot of times so i looked around and found how ani-cli was so fast, i knew it was possible to have anime streaming faster so i decided to make one.

# The Plan
I had the source code of <a class="external" target="_blank" href="https://github.com/pystardust/ani-cli">ani-cli</a> ported to python already because of my another project <a class="external" target="_blank" href="https://github.com/wraient/TwitchParty">TwitchParty</a> I took the anime searching, episode selection and stream link generation part, tested them and then started adding features one by one in cli

- Search for anime
- Select episode
- Start streaming in mpv
- Add database to resume
- Store anilist anime id in database
- Update to/from anilist automatically
- Add discord RPC

At this point my codebase was a mess of 1500 lines of python (which used to be seperate files but due to logistic problems of keeping them all in one folder i decided to merge them all into <a class="external" target="_blank" href="https://github.com/Wraient/curd/commit/a992c39690263279b6c1283f6ce09a6bd79cf549">one chungus file</a>) there was no executable i can ship and hence couldn't have it on aur in a way i would've wanted, So i decided to rewrite it in rust... no lmao but just imagine lol. So i decided to rewrite it in go.

# Rewrite

I had been learning Go for about a week before and it looked really fun, and thought i'd learn it as it goes (Very proud of that decision), So i start rewriting all of the logic from python to go and realise python indeed was a simple language just look at this

```python
if skip_filler and is_filler or skip_recap and is_recap and not rewatching:
    print("starting next.")
```

Admitted, it can be done in other languages too but this just reads like english, and i find it beautiful.

With the new cli selection using <a class="external" target="_blank" href="https://github.com/charmbracelet/bubbletea">BubbleTea</a> i was able to make a cli that was both fast and pretty.

With the rewrite i could even tackle the problems i had been facing in python version due to the architecture of the codebase and this time i made it better to maintain.

And out came a executable which could run on any linux x86-64 machine with no dependencies. I added a few cases for Windows support and could write an Inno Setup for windows installation and uploaded it to the aur which was unbelievable.

![Curd Reaction](image-1.png)

This was one of the proudest moment of my life, where i could finally just `paru -S curd` and have my own program installed and run it.

I added CI/CD (<a class="external" target="_blank" href="https://github.com/Wraient/curd/commits/main/?before=c3fa51fd5f8c51e7fcfd275a51d270a40462485a+35">Hell</a>) and even more features:

- Add Intro/Outro skipping using <a class="external" target="_blank" href="https://api.aniskip.com/api-docs">AniSkip</a>
- Add UI support using Rofi
- Configure it all using config file
- Skip filler and recap episodes using <a class="external" target="_blank" href="https://jikan.moe/">Jikan API</a>
- And so on..

This entire project had came way far away from what i thought i was making it for, I was spending more time fixing bugs for some Windows edge case than watching anime with it. But i also met alot of cool people because of it and learnt so many technologies, But as this was my first big project (above 5k lines) it inevitabily had alot of technical debt making it hard to add new features and maintain. So i decided to not spend so much time fixing them and instead focus on my new projects. The bad ending.

# Conclusion
Learning technologies as you go is probably the best way to develop a project and learn, but researching about the very fundamentals and core of your project is just as important so you do not have any fundamental limitations. But anyways just having fun is the most important thing. So create that project you have been thinking of it will be worth it.