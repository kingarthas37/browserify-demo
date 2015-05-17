global.jQuery = require('jquery'); 
var swfobject = require('swfobject');
var flashDetect = require('flash-detect');

 require('jcarousel');

$(function() {
    
    
    
    
    console.log(swfobject);
    
    console.log(flashDetect.installed);


    $('.jcarousel').jcarousel();
    
    
    
});