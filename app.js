// __npm - global command, comes with node__
// npm --version

// __loacl dependency - use it only in this particular project__
// npm i <packageName>

// __global dependency - use it in any project__
// npm install -g <packageName>

// __package.json - manifest file (stores important info about project/package)__
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
