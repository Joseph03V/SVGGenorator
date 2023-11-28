const inquirer = require("inquirer");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Choose three letters for your logo (Max is 3 letters)',
            validate: function (input) {
                if (input.length > 3) {
                  return 'Username must be 3 characters long.';
                }
                return 'text logged';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want your text? Enter a color or its hex value.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?',
            choices: ['circle,triangle,square']
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'What color do you want your shape? Enter a color or its he value.'
        }
    ])
}


function init() {
    promptUser()
    .then((answers) => writeFile('logo.svg', generateSvg(answers)))
    .then(() => console.log('Successfully created your logo!'))
    .catch((err) => console.error(err));
};

init();