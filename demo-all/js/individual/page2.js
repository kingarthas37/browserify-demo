
var swfobject = require('swfobject');
var flashDetect = require('flash-detect');

require('jquery-cookie');

$(function() {

    console.log('page2');
    console.log(swfobject);
    console.log(flashDetect.installed);
    $.cookie('user2323','kingarthas');

});