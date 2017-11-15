/* globals require:true, console:true, process:true */

// This script will send a message to a [logstash](http://logstash.net/)
// server using the [TCP input](http://logstash.net/docs/1.1.13/inputs/tcp)
// and then quit. If there is no listener, it will just quit.

'use strict';

var net = require('net');

var logHost = '127.0.0.1',
  logPort = 5000,
  sender = require('os').hostname();

var conn = net.createConnection({
    host: logHost,
    port: logPort
  }, function () {
    // var message = {
    //   '@tags': ['nodejs', 'test'],
    //   '@message': '2017-09-19 16:46:57.415 +1000 Checking Limit 101 100' + new Date().get,
    //   '@fields': {
    //     'sender': sender
    //   }
    // }
    var test = {
      "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
      }
    };
    var message = "2017-09-19 16:46:57.415 +1000";
    conn.write(message + JSON.stringify(test));
    process.exit(0);
  })
  .on('error', function (err) {
    console.error(err);
    process.exit(1);
  });
