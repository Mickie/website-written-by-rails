
$(function(){
    $('.dropdown-toggle').dropdown();
    $("#slides").slidesjs({
       width:940,
       height:528,
        play:{
            active:true,
            auto:true,
            interval:4000,
            swap:true
        }
    });
})

