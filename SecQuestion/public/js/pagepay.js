$(document).ready(function(){
    let but =$('#submit');
    let small =$('small');

    $('#phone').mask("+7-(999)-999-99-99");


    $('#amount').on('change',function(){
        let amount = parseInt($('#amount').val(),10)
        if(amount > 1000){
           but.hide();
              small.css('color',"red")
         }
        else{
              but.show(); 
                small.css('color',"black")
                
         }
    })
});
