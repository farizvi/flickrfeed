import { APPLICATION_PORT, FLICKR_API_URL, DEFAULT_FORMAT, FLICKR_CONSUMER_KEY, FLICKR_CONSUMER_SECRET } from "./constants";

var http = require("http");
var express = require("express");
var app = express();
var requestify = require("requestify");
var url = require("url");
var cors = require('cors');

app.use(cors());
app.options('*', cors());

http
  .createServer(function(request, response) {    
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': 2592000, // 30 days
      'Content-type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-type',
      'X-Content-Type-Options': 'nosniff'
    };

    if (request.method === 'OPTIONS') {
      response.writeHead(204, headers);
      response.end();
      return;
    }

    response.writeHead(200, headers);
    
    var parsedUrl = url.parse(request.url, true); // true to get query as object    

    let apiUrl = FLICKR_API_URL + "?format=" + DEFAULT_FORMAT;    
    
    requestify.get(apiUrl, { params: parsedUrl.query }).then(function(res) {
      var result = res.getBody();

      result = result.substring(result.indexOf('jsonFlickrFeed(') + 'jsonFlickrFeed('.length);
      result = result.slice(0, -1);

      response.end(result);
    })
    .catch(function(err){
      console.log(err);
    });
  })
  .listen(APPLICATION_PORT);

console.log("Server running at http://127.0.0.1:" + APPLICATION_PORT + "/");
