//browserify基本demo，无插件
//browserify entry.js > bundle.js

global.jQuery = require('jquery');
require('tipso');
require('jcarousel');
require('bootstrap');
require('validate');


(function($,window) {

    $(function(){

        $('.title-tipso').tipso();

        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            }).on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            }).jcarouselPagination();


        $("#commentForm").validate();

    });
    
})(jQuery,window);