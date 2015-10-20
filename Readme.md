Setup a Static Page with ES6 Modules
====================

I recommended cloning an empty repo from Github with the default Node `gitignore` file. Saved me some time.
1. `git clone foo`
2. `npm init`
    * entry: `bundle.js`
    * If you're running Mocha for testing, use the following test script: `mocha --compilers js:babel/register`
3. `npm install babel --save-dev`
4. `npm install babel-core --save-dev`
5. `npm install webpack --save-dev`
6. To facilitate transpiling your code from ES6 to ES5 add the following to the "scripts" portion of your `package.json` file:
 ```
 "build": "./node_modules/.bin/webpack"
 ```

7. Now we add a new file, webpack.config.js in your root directory
```
module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'lib/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  }
};
```
8. Add your javascript files to the `src` directory. Your transpiled files will be in the `lib` so be sure to point to that in your html files.
