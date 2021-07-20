# What is this?

Formerly a part of the benyakiredits repository, this is a React Typescript-powered page to show a few components I have developed. Most of these components are not developed in React and instead reworked manually. Initially developed as a side project, the webpack configuration was done manually.

## How do I install this?
1. Clone/fork the repo
2. npm install
3. npm run dev
4. Remember to run npm run build and using those files when getting ready for production.

## What is the structure of the app?
Stateful components are in components/Layout and components/Display. Everything else in components is stateless.

Layout includes the components that control mostly the layout of the app. The handler components controls an arrow that, upon being clicked, loads in the sidebar component that covers most of the page and from which the user can choose which Display component to load as well as a few options to set and a search bar to filter the components.

The Display components all fill out a ShowcaseItem component with three parts:
1. The showcase component
2. An options menu
3. A description/explanation of how the component works and why it exists

The store folder consists of contexts. The Options context keeps track of the options of the sidebar component (and saves/loads them from local storage) as well as what showcase item is loaded.

Each showcase item has its own store that is loaded inside of that showcase item. I could easily have done without the many stores, but I found it easier than handing the information up and down, and it seemed to be precisely why React contexts exist.

Every other folder should be obvious as to what it does.

## What are the actual showcase items?

1. ClickInBox
> Upon clicking the background, a div will be temporarily generated where the mouse clicked
2. ColorBoxes
> Boxes with colors in them that switch between all the named CSS colors
3. ConcentricCircles
> A canvas element that, upon the mouse entering it, will generate concentric circles from the nearest corner that spread out across the canvas.
4. FilterGenerator
> Exactly what its name suggests

## Planned changes
* Add testing
* Add routing

## Changelog
* 7/19/2021: Separated this from the benyakiredits repo