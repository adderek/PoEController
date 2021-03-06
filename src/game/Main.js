var Logger = require('./Logger');
var Controller = require('./Controller');
var Window = require('./Window');

Logger.info('using screen resolution: ' + Window.resolution);

var Game = require('./Game');
var SignatureDetection = require('./SignatureDetection');

SignatureDetection.loadSignatures();
Game.init();