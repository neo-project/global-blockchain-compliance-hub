# README #

## Long Story Short ##

GitHub Pages is a feature of GitHub that automatically turns certain repositories into websites. Importantly for our purposes, it uses [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/) software to allow for easy creation of static sites from Markdown files. Thus, all we have to worry about is the `_posts` folder that contains all of the content for our hub; hosting and site-generation are automatically taken care of.

To access the Hub, visit [https://neo-project.github.io/global-blockchain-compliance-hub/](https://neo-project.github.io/global-blockchain-compliance-hub/).

## Editing ##

The process for editing a page is the same regardless of the particular page you want to edit. The following are the pages you'll care about:

- The landing page (i.e. the one that says "Welcome to NEO's Global Blockchain Compliance Hub!!" at the top), which is called `index.html`
- All of the content pages of the Hub, which are Markdown files (i.e. they end in `.md`) contained in the `_posts` folder

**Edit a Page**
To edit a page, first click on it's name. You should then see a rendered version of the page (if it's a Markdown file) or the actual code (if it's `index.html`). Next, click on the pencil-like icon on the top right of the box containing the content. (It should be to the right of the words "Raw," "Blame," and "History.") Now you'll be in the editor and can add the desired content. 

When you're done editing, simply hit the big "propose file change" button at the bottom of the page. Include a short description of your changes in the box provided. You will be led to a page titled "Comparing Changes" that compares your branch to the master branch. You will need to submit a pull request to render your changes to the live site at [https://neo-project.github.io/global-blockchain-compliance-hub/](https://neo-project.github.io/global-blockchain-compliance-hub/). If all looks good, click "Create pull request," another edit box will pop up below, and then click "Create pull request" again below the box to confirm. The NEO Admin project owners will need to approve your changes for them to appear on the site. Please only open one pull request at a time--add all of your edits for a given editing session to one pull request, so that the admins do not need to click through dozens of pull requests. 


**Add a Page or Section**
All pages and sections are in the [posts](https://github.com/neo-project/global-blockchain-compliance-hub/tree/master/_posts) folder of this repository. 

To add a page to an existing section:
1) Go into the folder that you would like to add a page to. For example, if you are adding a new page under Belgium, go into the Belgium folder. 
2) Select "Create New File" on the top right corner. This will open an empty dialogue box. Name the file on the top using the nomenclature used throughout the rest of the site (ex: 1111-01-01-belgium-registry-requirements.md). Because we are using Jekyll, it is necessary to use this nomenclature for the posts to appear properly on the site. 
3) The top of the post must contain the section at the top with layout, date, name, title, category, and comments. For more information on this, see the "re-ordering" section below or reference any of the post pages.
4) Below the top section, add the information you'd like to include on your page. 
5) Once done, scroll down and click "create pull request". Another edit box will pop up below, and then click "Create pull request" again below the box to confirm. The NEO Admin project owners will need to approve your changes for them to appear on the site. Please only open one pull request at a time--add all of your edits for a given editing session to one pull request, so that the admins do not need to click through dozens of pull requests. 

To add a new section: 
1) Goto the [posts](https://github.com/neo-project/global-blockchain-compliance-hub/tree/master/_posts) folder and select "Create New File". 
2) To create a new folder, name the file with the name of the folder you want (for example, Belgium), followed by a / , and then name the post that will go in the folder. For example, if you were creating the first post in the Belgium folder, you would type the following: "Belgium/1111-01-01-belgium-registry-requirements.md"). When you type / , a new box will automatically pop up. This means that a new folder is being created. 
3) Create posts in your new folder! Be sure to follow the directions in "Re-Ordering" below to ensure that the folder is properly formatted to appear on the site. 
4) Once your first post in your folder is created, click "create pull request" for the post and folder to be reviewed by the NEO Admin project owners. 

**Delete a Page**
To delete a page, simply delete the .md file that contains it.

Here are a few notes:

- Markdown syntax is very simple to understand (here's a [cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)), and feel free to toggle between the "Edit file" view and the "Preview changes" view to get a sense of what your changes will look like.
- Ignore the stuff at the top of the Markdown files (that renders as a table) since it's only necessary for Jekyll to work correctly.
- Browse through different files to get a sense of how links are created, pictures are inserted, etc. It's probably best to maintain consistency in terms of formatting and style.

## Re-Ordering ##

Remember that stuff you were just told to ignore? Well now it's your new best friend! When editing a post, that stuff won't look like a table but rather like the below:
```
---
layout: post
date: 0002-12-01
name: belgium-registry-requirements
title: "Belgium: Non-profit/For-profit Company Registry Requirements"
category: belgium
comments: true
---
```
For re-ordering individual posts (and re-naming/re-ordering entire sections too), the two fields you'll care about are the `date` and `category` ones.

The `category` field includes the name of the entire section. It should be in all lowercase, and spaces should be replaced with a `-` (e.g. the "Belgium: Non-profit/For-profit Company Registry Requirements" section is written as `belgium-registry-requirements`, but don't worry, it will eventually render correctly). Make sure the `category` field is the same for all posts you want within that section.

The `date` field is used to order the sections as well as the posts within each section. It's a roundout process, but it's necessary given that we're using Jekyll. The year part of the date (i.e. the first four numbers) corresponds to the section order. For example, the `belgium-registry-requirements` post above goes in the first section (i.e. `belgium`) and so the year part of its date is `0002` (see below for a table of the current year numbers and their corresponding sections). The month part of the date (i.e. the second two numbers) corresponds to the order of the posts within a given section; however, it goes in reverse order (i.e. the first post in the section is the one with the number `12`). Since the `belgium-registry-requirements` post is the first post in the `belgium` section, the month part of its date is `12`. The final two numbers (i.e. the day part of the date) are always `01` since we don't need to use them in our ordering hierarchy.

| Section                 | Year  |
|:-----------------------:|:-----:|
| about                   | 0001  |
| belgium                 | 0002  |
| germany                 | 0003  |
| gibraltar               | 0004  |
| hong-kong               | 0005  |
| japan                   | 0006  |
| korea                   | 0007  |
| luxembourg              | 0008  |
| netherlands             | 0009  |
| singapore               | 0010  |
| switzerland             | 0011  |
| isle-of-man             | 0012  |
| usa                     | 0013  |
| california              | 0014  |
| new york                | 0015  |
| russia                  | 0016  |
| turkey                  | 0017  |


Please edit the above table if you change the order of the sections.

## Please help us grow the community and continue to grow and update our Hub as regulations change!
