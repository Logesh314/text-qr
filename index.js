
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    {
        name: 'theme',
        message: 'Enter the url:',
    },
  ])
  .then((answers) => {
 
 
    var qr_svg = qr.image(answers.theme);
    qr_svg.pipe(fs.createWriteStream('url_qr.png'));

    
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log('Something else went wrong');
    }
  });