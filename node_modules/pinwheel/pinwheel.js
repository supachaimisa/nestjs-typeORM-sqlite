/*!
 * Module dependencies
 */

var colors = require('colors');

exports = module.exports = function (options) {

  options = options || {};

  var Pinwheel = function (taskmsg, opts) {
    opts = opts || {};

    this.color = opts.color || 'grey';

    this.mark = options.mark || '✔';

    this.interval = null;

    this.speed = opts.speed || 100;

    this.startTime = null;

    this.taskmsg = taskmsg || 'working...';

    this.wheel = options.wheel || '◜◝◞◟';
  };

  Pinwheel.prototype.start = function () {
    var self = this
      , pointer = 0
      , chars = this.wheel.split('')
      , len = chars.length;
    this.startTime = new Date();
    this.interval = setInterval(function () {
      process.stdout.write('\r' + chars[pointer][self.color] + ' ' + self.taskmsg);    
      pointer = ++pointer % len;
    }, this.speed);
  };

  Pinwheel.prototype.stop = function (msg, err) {
    if (err) {
      this.mark = '✖'.red;
      msg = (this.taskmsg + ' Error!').red;
    } else {
      msg = msg || this.taskmsg + ' done!';
      this.mark = this.mark.green;
    }
    var elapsed = (new Date() - this.startTime) + 'ms';
    clearInterval(this.interval);
    process.stdout.write('\r' + this.mark.bold + ' ' + msg.bold + ' ' + elapsed + '\n');
  };

  return Pinwheel;
};
