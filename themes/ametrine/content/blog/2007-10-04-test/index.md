+++
title = "Testing with the Taste of Blood (Portal Reference, Get It? Get Itttt?) Bwaaaaaaa"
description = "Long description and blah blah blah whatever, I don't know, I like to yap a lot you can't imagine, well you can probably imagine by the amount of text here, but like it's just to make sure this thing doesn't overflow."
authors = ["Jimmy", "Bill", "Bob"]
updated = 2025-02-03
[taxonomies]
tags = ["Test", "Testing", "Long tag name", "Even longer tag name to make sure nothing overflows"]
categories = ["Test"]
[extra]
banner = "banner.jpg"
accent_color = "blue"
archive = "This page is in fact not archived. It is only here to demonstrate the archival statement."
trigger = "This page contains blackjack and hookers, and bad jokes such as this one."
disclaimer = """
- All tricks in this page are performed by the lab boys, don't try this at home.
- Don't expose yourself to 4000° kelvin.
- Don't take party escort submission position.
- Don't interact with asbestos and moon rocks.
- Don't visit [aperturescience.com](https://www.aperturescience.com).
"""
music = [
	{ type = "album", mbid = "dd8ce89b-e385-4886-83b8-4d06b55539a4", artist = "Artifyber", name = "Lazuli" }, # Optional artist and name, MBID alone would be sufficent still
	{ type = "track", mbid = "480835fa-368f-4916-948b-7e6e617ca64e" },
	{ type = "track", artist = "ivycomb", name = "NOTORIOUS" }, # No MBID, no cover art
	{ type = "track", artist = "my chemicla romance", name = "dead" }, # Malformed artist name, should autocorrect itself
]
[extra.weather]
condition = "Light Rain"
# Available styles: <cloudy, showers, snowing>
style = "showers"
# Any icon from https://phosphoricons.com
icon = "cloud-rain"
temp = "18"
# Defaults to Celsius, thus not actually needed
unit = "C"
[extra.fediverse]
# Long image thread
# host = "mastodon.social"
# user = "brownpau"
# id = "104529877688537579"

# Thread with multiple images per post
host = "mastodon.blaede.family"
user = "cassidy"
id = "112774854109302186"

# Thread with preview cards
# host = "mastodon.blaede.family"
# user = "cassidy"
# id = "110669429936617026"

# Post on GoToSocial
# host = "alpha.polymaths.social"
# user = "orbitalmartian"
# id = "01J7ETKJ19FGBDQGS1ZWZ3KEPP"

# Reactions, CWs (*key)
# host = "eepy.moe"
# user = "julia"
# id = "a1jkyrpkl7wv03ln"
# id = "a1jkjiaxl7wv03jx"

# An unholy of reactions (*key)
# host = "transfem.social"
# user = "puppygirlhornypost2"
# id = "a1jlqibk0rzf01ee"

# Reactions, CWs, image, and audio files (*oma)
# host = "woem.space"
# user = "astrid"
# id = "ApzBvyh6hg0D1hsiLQ"

# An unholy amount of explode reactions (Chuckya)
# host = "wetdry.world"
# user = "freeplay"
# id = "112050227607892926"

# i hate The GIF File Format (Chuckya)
# host = "wetdry.world"
# user = "esm"
# id = "109600565082951176"

# Three-digit faves/boosts counter
# host = "fuzzies.wtf"
# user = "micr0"
# id = "113800191555199439"
+++

Text can be **bold**, *italic*, ~~strikethrough~~, and ***~~all at the same time~~***.

[Link to another page](@/demo/page.md).

There should be whitespace between paragraphs[^1].

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a normal paragraph[^2] following a header.

😭😂🥺🤣❤️✨🙏😍🥰😊

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

> "Original content is original only for a few seconds before getting old"
> > Rule #21 of the internet

- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
- Item 3
- `Item 4`

1. Perform step #1
2. Proceed to step #2
3. Conclude with step #3

- [ ] Milk
- [x] Eggs
- [x] Flour
- [ ] Coffee
- [x] Combustible lemons

[![Rough Ametrine from Bolivia.](https://files.catbox.moe/7uisx8.jpg)](https://www.geologyin.com/2021/04/the-colorful-charm-of-ametrine.html)

| Character    | Show               | Quotes                            |
| :----------- | :----------------- | :-------------------------------- |
| Derpy Hooves | My Little Pony     | I just don't know what went wrong |
| Gir          | Invader ZIM        | GUESS WHO MADE WAAAAFFLES?!!      |
| WALL-E       | WALL-E             | Ooooo 0.0                         |
| Taco         | Inanimate Insanity | SOUR CREAM!                       |

```rust
let highlight = true;
```

```scss, linenos, linenostart=10, hl_lines=3-4 8-9, hide_lines=2 7
pre mark {
  // If you want your highlights to take the full width
  display: block;
  color: currentcolor;
}
pre table td:nth-of-type(1) {
  // Select a colour matching your theme
  color: #6b6b6b;
  font-style: italic;
}
```

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

***

[Backlink](@/demo/index.md)

[^1]: Footnote
[^2]: [Footnote (link)](https://example.org)
