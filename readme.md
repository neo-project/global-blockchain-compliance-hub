# README #

## Long Story Short ##

GitHub Pages is a feature of GitHub that automatically turns certain repositories into websites. Importantly for our purposes, it uses [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/) software to allow for easy creation of static sites from Markdown files. Thus, all we have to worry about is the `_posts` folder that contains all of the content for our site/Handbook; hosting and site-generation are automatically taken care of.

To access the Handbook, visit [http://harvardfop.github.io](http://harvardfop.github.io).

## Editing ##

The process for editing a page is the same regardless of the particular page you want to edit. The following are the pages you'll care about:

- The landing page (i.e. the one that says "Congratulations!" at the top), which is called `index.html`
- All of the content pages of the Handbook, which are Markdown files (i.e. they end in `.md`) contained in the `_posts` folder

To edit a page, first click on it's name. You should then see a rendered version of the page (if it's a Markdown file) or the actual code (if it's `index.html`). Next, click on the pencil-like icon on the top right of the box containing the content. (It should be to the right of the words "Raw," "Blame," and "Histroy.") Now you'll be in the editor...go crazy!

To delete a page, simply delete the .md file that contains it.

Here are a few notes:

- Markdown syntax is very simple to understand (here's a [cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)), and feel free to toggle between the "Edit file" view and the "Preview changes" view to get a sense of what your changes will look like.
- Ignore the stuff at the top of the Markdown files (that renders as a table) since it's only necessary for Jekyll to work correctly.
- Browse through different files to get a sense of how links are created, pictures are inserted, etc. It's probably best to maintain consistency in terms of formatting and style.

When you're done editing, simply hit the big "Commit changes" button at the bottom of the page. We recommend including a short description of your changes in the box provided. Your changes will be rendered instantly at [http://harvardfop.github.io](http://harvardfop.github.io).

## Re-Ordering ##

Remeber that stuff you were just told to ignore? Well now it's your new best friend! When editing a post, that stuff won't look like a table but rather like the below:
```
---
layout: post
date: 0001-12-01
name: goals-and-history
title: "The Goals and History of FOP"
category: philosophy
comments: true
---
```
For re-ordering individual posts (and re-naming/re-ordering entire sections too), the two fields you'll care about are the `date` and `category` ones.

The `category` field includes the name of the entire section. It should be in all lowercase, and spaces should be replaced with a `-` (e.g. the "Policies and Procedures" section is written as `policies-and-procedures`, but don't worry, it will eventually render correctly). Make sure the `category` field is the same for all posts you want within that section.

The `date` field is used to order the sections as well as the posts within each section. It's a roundout process, but it's necessary given that we're using Jekyll. The year part of the date (i.e. the first four numbers) corresponds to the section order. For example, the `goals-and-history` post above goes in the first section (i.e. `philosophy`) and so the year part of its date is `0001` (see below for a table of the current year numbers and their corresponding sections). The month part of the date (i.e. the second two numbers) corresponds to the order of the posts within a given section; however, it goes in reverse order (i.e. the first post in the section is the one with the number `12`). Since the `goals-and-history` post is the first post in the `philosophy` section, the month part of its date is `12`. The final two numbers (i.e. the day part of the date) are always `01` since we don't need to use them in our ordering hierarchy.

| Section                 | Year  |
|:-----------------------:|:-----:|
| philosophy              | 0001  |
| policies-and-procedures | 0002  |
| preparation             | 0003  |
| technical-skills        | 0004  |
| interpersonal-skills    | 0005  |
| back-on-campus          | 0006  |
| emergencies             | 0007  |

P.S. Please edit the above table if you change the order of the sections in the Handbook.

## You Rock ##

My socks :p
