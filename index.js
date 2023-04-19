const inquirer =require('inquirer');
const fs=require("fs");
const {Triangle, Square, Circle}=require("./lib/shapes.js");

function writetoFile(fileName, answers){
    
    let svgName='';
    svgName= `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">`;

    svgName += `<g>`;
    svgName += `${answers.shape}`;

    let shapeChoice;
    

    if(answers.shape === 'Triangle'){
        shapeChoice=new Triangle();
        svgName += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapecolor}"/>`
    }else if(answers.shape==='Square'){
        shapeChoice = new Square();
        svgName += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapecolor}"/>`
    }else if(answers.shape=== 'Circle'){
        shapeChoice = new Circle();
        svgName += `<circle cx="150" cy="115" r="80" fill="${answers.shapecolor}"/>`
    }

    svgName += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>;`
    svgName += "</g>";
    svgName += "</svg>";

    fs.writeFile(fileName, svgName, (err) =>{
    err ? console.log(err) : console.log('Successfully created logo.svg')
    });
}

function promptUser(){
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'text',
        message:'Choose three characthers for your logo',
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Choose a color of your choice for your logo(Enter a color keyword OR a hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What type of shape would you like the logo to render',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Choose a color of your choice for your logo shape(Enter a color keyword OR a hexadecimal number)',
    },
])
    .then((answers)=>{
        if(answers.text.length !== 3){
            console.log('Must ennter up to three characthers');
            promptUser();
        }else{
            writetoFile('logo.svg', answers);
        }
    })
}

promptUser();

