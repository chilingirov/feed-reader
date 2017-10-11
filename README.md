# Project Overview

Feed Reader is a  web-based application that reads RSS feeds. This project is part of the Udacity's Front-End Developer Nanodegree.

## Goal of this project

In this project I use Jasmine to write reliable test suits to check the logic of the application, the event handling and the DOM manipulations.
Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.
Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## How to run

1. Download the zip file in a folder in your computer.
2. Extract the files in the folder
3. Open index.html in your browser


## Tests

1. Check if allFeeds variable has been defined and is not empty
2. Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
3. Loop through each feed in allFeeds object to check if it has a name defined and that name is not empty
4. Check if the menu element is hidden by defalut after the page is loaded
5. Check if the menu changes visibility when is clicked
6. Check if when the loadFeed function is called there is at least one .entry element within the .feed container
7. Check if when a new feed is loaded content actually changes

## Reference

[Jasmine 2.2 documentation](https://jasmine.github.io/2.2/introduction)
