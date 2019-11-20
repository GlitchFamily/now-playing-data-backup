const fs = require('fs');
const path = require('path');
const glob = require('glob');
const YAML = require('yaml');

glob("./../json/**.json", function (er, files) {
  files.forEach(file => {
    const fileContent = JSON.parse(fs.readFileSync(file, 'utf8'))
    const fileName = path.basename(file)
    const fileYAML = YAML.stringify(fileContent)
    const newfileName = './../md/' + fileName.slice(0, -5) + '.md';
    fs.writeFile(newfileName, '---\r\n' + fileYAML + '---', function(err) {
      if(err) {
          return console.log(err)
      }
      console.log("youpi")
    });
  })
})
