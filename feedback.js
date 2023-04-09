try {
  var x = myframe.document.querySelectorAll('textarea');
  for (var i = 0; i < x.length; i++) {
    x[i].value = Math.floor(Math.random() * 10).toString();
  }
  x = myframe.document.querySelectorAll('input[type="radio"]');
  for (var i = 1; i < x.length; i++) {
    if (x[i].getAttribute('name') == 'check') continue;
    var randomIndex = Math.floor(Math.random() * (x.length - 1)) + 1;
    x[randomIndex].click();
  }
} catch (err) {
  console.log(err);
}
