Pinwheel
========

A simple indeterminate spinner for the command line.

```
var Pinwheel = require('pinwheel')()
  , wheel = new Pinwheel('thinking...', { color: 'yellow' });
wheel.start();
someAsyncTask(wheel.stop);
```
