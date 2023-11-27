const inquirer = require ('inquirer');
const {writeFile} = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Choose three letters for your logo'
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