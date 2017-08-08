# React Seed App

This is a bare-bones [React](https://facebook.github.io/react/) seed app to get you started.  
It is an alternative to the NPM module [create-react-app](https://github.com/facebookincubator/create-react-app)
developed by Facebook.

Like other React starter apps, 
it relies on [Webpack](https://github.com/webpack/webpack) 
and [Babel](https://babeljs.io/) to make it browser friendly,
but not much else.

According to its documentation, 
Facebook's *create-react-app* hides the WebPack configuration file 
and other details so that developers can focus on their code.  
Instead, it provides a bevy of customizable turn-key features to allow you to optimize your app 
and make it compatible with a wide range of browsers and mobile platforms.  
Since I'm just getting started with React, 
I wanted something lightweight and transparent without a lot of opinionated "magic".

I also added support for testing with [jest](https://facebook.github.io/jest/)
and [enzyme](https://github.com/airbnb/enzyme).
These can be replaced with another set of testing tools, if you desire,
by installing other packages and updating the line '"test": "jest"' in package.json.

If I need other features and customizations (and I probably will), 
I want to add and configure them myself so that I know where all the skeletons are buried.

## Resources
* https://smashingboxes.com/blog/learn-react-part-1/
* https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel