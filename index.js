const fs = require("fs");
const {triangle,square,circle} = require("./lib/shapes");
const {promptUser} = require("./lib/questions")


function init() {
    promptUser()
    .then((answers) => writeFile('logo.svg', generateSvg(answers)))
    .then(() => console.log('Successfully created your logo!'))
    .catch((err) => console.error(err));
};

init();