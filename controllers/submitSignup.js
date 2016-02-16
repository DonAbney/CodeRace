function submitSignup(req, res) {
  var options = {
    root: './views/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };


  res.sendFile('success.html', options);

}

module.exports = doSignup;
