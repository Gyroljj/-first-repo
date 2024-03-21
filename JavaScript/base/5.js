// var web = "ljj.com"
(function () {
    var $ = (window.$ = {});
    $.web = "ljj";
    var url = "ljj.com";
    var site = "李建军";
    $.getUrl = function () {
        return url;
    }
}.bind(window)())