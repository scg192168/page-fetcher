const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const filepath = args[1];
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  const content = body;
  fs.writeFile(filepath, content, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${content.length} bytes to ${filepath}`);
  });
});
