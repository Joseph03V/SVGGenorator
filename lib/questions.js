const inquirer = require("inquirer");

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
            choices: ["Triangle","Square","Circle"],
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'What color do you want your shape? Enter a color or its hex value.',
        }
        ]) 
 } 

module.exports = {promptUser}