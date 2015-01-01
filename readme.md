# README #

** Long Story Short ##

GitHub Pages is a feature of GitHub that automatically turns certain repositories into websites. Importantly for our purposes, it uses [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/) software to allow for easy creation of static sites from Makrdown files. Thus, all we have to worry about is the `_posts` folder that contains all of the content for our site/Handbook: hosting and site-generation is automatically taken care of.

To access the Handbook, visit [http://harvardfop.github.io](http://harvardfop.github.io).

## Editing ##

The process for editing a page is the same regardless of the particular page you want to edit. The following are the pages you'll care about:

- The landing page (i.e. the one that says "Congratulations!" at the top), which is called `index.html`
- All of the content pages of the Handbook, which are Markdown files (i.e. they end in `.md`) contained in the `_posts` folder

To edit a page, first click on it's name. You should then see a rendered version of the page (if it's a Markdown file) or the actual code (if it's `index.html`). Next, click on the pencil-like icon on the top right of the box containing the content. (It should be to the right of the words "Raw," "Blame," and "Histroy.") Now you'll be in the editor...go crazy! Markdown syntax is very simple to understand (here's a [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)), but feel free to toggle between the "Edit file" view and the "Preview changes" view. Ignore the stuff at the top of the Markdown files (that render as a table) since they're necessary for Jekyll to work correctly.

When you're done editing, simply hit the big "Commit changes" button at the bottom of the page. It's probably best to include a short description of your changes in the box provided. Your changes will be rendered instantly at [http://harvardfop.github.io](http://harvardfop.github.io).