const inquirer = require("inquirer");
const {triangle,square,circle} = require("./shapes");
const fs = require("fs");


/* const {writeFile} = require("../index")
 */
const promptUser = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Choose three letters for your logo (Max is 3 letters)',
            validate:(input) => {
                if (input.length > 3) {
                  return 'Username must be 3 characters long.';
                }return true
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want your text? Enter a color or its hex value.',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?',
            choices: ["triangle","square","circle"] 
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color do you want your shape? Enter a color or its hex value.',
        }
        ]) 

        .then ((answers) => {
            writeFile("logo.svg", answers);
        })
 } 


 function writeFile(fileName,answers) {
    let svgString = "";
    svgString = '<svg version = "1.1" width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg"> ';

    let shapeChoice;
    if(answers.shape == "triangle") {
        shapeChoice = new triangle();
        svgString +=  `<polygon points = "150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape == "square") {
        shapeChoice = new square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        shapeChoice = new circle();
        svgString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`;
    }

    svgString += `<text x="150" y="125" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated your svg logo!");
      });
}

module.exports = {promptUser, writeFile}