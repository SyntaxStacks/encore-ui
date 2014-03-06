var fs = require('fs');
function saveScreenshot(ptor, filename) {
  return ptor.takeScreenshot().then(function(data) {
    var filepath = './test/captures/' + filename;
    var screenshot = data.replace(/^data:image\/png;base64,/, '');
    fs.writeFile(filepath, screenshot, 'base64',
    function(err) {
      if (err) {
        throw err;
      }
    });
  });
}

module.exports = {
    saveScreenshot: saveScreenshot
};
