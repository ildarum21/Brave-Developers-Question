$(document).ready(function(){
    let header =$('.hhead');
    let popup =$('.popup');

    setTimeout(function(){
        header.css('margin-top','0px');
    },1000)
    setTimeout(function(){
        $('#span').hide();
        popup.css('width','0px');
    },3000)
})