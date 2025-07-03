import inquirer from 'inquirer';
import * as fs from 'fs';
import qr from 'qr-image';

function generate(){
document.getElementById("input").value
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Enter your name:',
    },
  ])
  .then((answers) => {
    const name = answers.username;

    // Generate QR and save to file
    const qr_svg = qr.image(name, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('user_qr.svg'));

    // Get QR as SVG string
    const svg_string = qr.imageSync(name, { type: 'svg' });
    console.log(svg_string);
    fs.writeFile("qr_text.txt",name, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})
  });
  
  
                                                                                                                                                                                                