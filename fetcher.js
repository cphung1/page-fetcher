const request = require('request');
const args = process.argv;
const result = args.slice(2);
const fs = require('fs');
let address = result[0]
let path = result[1]

request(address, (error, response, body) => {
  // console.log('body:', body);
  // Print the HTML for the Google homepage.
  // console.log(body);
  if (error) {
    console.log(error);
    process.exit();
  }
  fs.writeFile(path, body, error => {
    if (error) {
      throw error;
    } 
    fs.stat(path, (error, stat) => {
      if (error) {
        throw error;
      }
      console.log(`Downloaded and saved ${stat.size} bytes to ${path}`);
    })

  })

});
