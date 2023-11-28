const fs = require("fs");
const {Triangle,Square,Circle} = require("./lib/shapes");
const {promptUser} = require("./lib/questions")


function writeFile(fileName,answers) {
    let svgString = "";
    svgString = '<svg version = "1.1" width "300" height = "200" xm1ns = "http://www.w3.org/2000/svg>';
    svgString += "<g>";
    svgString += `${answers.shape}`;

    let shapeCHoice;
    if(answers.shape === "triangle") {
        shapeChoice = new Triangle();
        svgString +=  `<polugon points = "150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile('logo.svg',svgString,(err) => {
        err ? console.log(err) : console.log('Successfully Generated logo.svg!')
    })
}

promptUser();
/* function init() {
    promptUser()
    .then((answers) => writeFile('logo.svg', generateSvg(answers)))
    .then(() => console.log('Successfully created your logo!'))
    .catch((err) => console.error(err));
};

init(); */