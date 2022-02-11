

$(function(){
   $(".glitch").glitch({
        layers: ["red", "green"],
        offset: [10, 0],
      },5000);

      var timer = setInterval(function(){
        $(".scroll").toggleClass("active");
      },500);

      $(window).scroll(function(){
        var sct = $(this).scrollTop();
        console.log(sct);

        if(sct > 0){
            $("header").css({
                "opacity":"0",
                
            });
        }else{
            $("header").css({
                "opacity":"1",
            
            });
        }
    });
  
});
