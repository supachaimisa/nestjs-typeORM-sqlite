var Pinwheel = require('./pinwheel')({ wheel: '◥◢◣◤', mark: '⚡' });

var wheel = new Pinwheel('thinking about a contrived example...', { color: 'blue' });

wheel.start();
setTimeout(function () {
  wheel.stop();

  var wheelie = new Pinwheel('I think an error is gonna happen...');
  wheelie.start();
  setTimeout(function () {
    var err = new Error('Something went wrong');
    wheelie.stop(null, err);
  }, 1000);
}, 2000);
