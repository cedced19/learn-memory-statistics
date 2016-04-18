# learn-memory-statistics

[![Build Status](https://travis-ci.org/cedced19/learn-memory-statistics.svg?branch=master)](https://travis-ci.org/cedced19/learn-memory-statistics)

A module to get statistics from data from a Learn Memory website.

```bash
npm install --save learn-memory-statistics
```

## Example:

```javascript
var statistics = require('learn-memory-statistics');
var request = require('request');

request('https://cedced19.github.io/learn-memory-static/data.json', function (error, response, body) {
        var data = JSON.parse(body);
	      console.log(statistics(data));
});
```
