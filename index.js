window.onload = function(){
    var browse = navigator.userAgent.toLowerCase(); 
        
    if( (navigator.appName == 'Netscape' && browse.indexOf('trident') != -1) || (browse.indexOf("msie") != -1)) {
         alert("본 사이트는 크롬버전에 최적화되어있습니다.");        
    }
 
};
