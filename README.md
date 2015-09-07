
[![NPM](https://nodei.co/npm/myconfig.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/myconfig/)


# myconfig

This module enables you to manage configuration on a single file for multiple projects

## Configuration ##
project file_receiver

  {"file_receiver": {
    "port": 9001,
    "redisSocket": "/tmp/redis.sock",
    "maxDirs": -1,
    "maxFilesInDirs": 300,
    "fileNamePrefix": "pre_",
    "backoffTime": 120,
    "responseCode": 200,
    "responseText": {
      "status": "Good day."
    },
    "backoffCode": 503,
    "backoffText": {
      "status": "Service Unavailable",
      "waitTime": 120
    },
    "logLevel": "notice"

  }
}



## Usage ##


var config = require('../myconfig').get('file_receiver');

console.log(config)

## Output ##
{ file_receiver: 
   { port: 9001,
     redisSocket: '/tmp/redis.sock',
     maxDirs: -1,
     maxFilesInDirs: 300,
     fileNamePrefix: 'pre_',
     backoffTime: 120,
     responseCode: 200,
     responseText: { status: 'Good day.' },
     backoffCode: 503,
     backoffText: { status: 'Service Unavailable', waitTime: 120 },
     logLevel: 'notice' } }

