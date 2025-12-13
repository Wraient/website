+++
title = "test2"
description = "Using This Theme"
date = 2025-11-27

[taxonomies]
tags = ["theme"]

[extra]
go_to_top = true
toc = true
toc_inline = true
+++

## Download and Install

In your blog directory:

```bash
git submodule init
git submodule add https://github.com/jhq223/xuan.git themes/xuan
```

Enable in `config.toml`:

```toml
theme = "xuan"
```

## Update

```bash
git submodule update --remote --merge
```

## Configure Pages

### 1. Create an Archives Page

Create a folder named `archive` (or any name you prefer) in the `content` directory, and create `_index.md` inside it:

```toml
+++
title = "Archives"
template = "archive.html"
sort_by = "date"
+++
```

### 2. Create a Friends/Links Page

Create a folder named `links` in the `content` directory, and create `_index.md` inside it:

```toml
+++
title = "Friends"
template = "links.html"
+++

Here you can write some information about applying for friend links. **Markdown** is supported.
```

## Customization

### Using a Background Image

Add custom CSS in `config.toml`:

```toml
[extra]
styles = ["mods.css"]
```

Enter the content:

```css
body {
    background-image: var(--bg-overlay), url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
```

Modify the opacity:

```scss
@import "../themes/xuan/sass/_variables.scss";

@include theme-variables using ($theme) {
    @if $theme == "dark" {
        --bg-overlay: linear-gradient(rgb(0 0 0 / 0.9), rgb(0 0 0 / 0.9));
    }

    @else {
        --bg-overlay: linear-gradient(rgb(255 255 255 / 0.8), rgb(255 255 255 / 0.8));
    }
}
```
