// User agent sniffing (for mailto bugs)
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

// 2257 copyright call
$("#twotwofiveseven").fancybox({
    type: 'iframe',
    maxWidth: 800,
    closeClick: false,
    title: '',
    helpers : {
        overlay : {
            closeClick: false
        }
    }
});
