$(function(){
    $(".login a").on("click",function(){
        $(".login").hide()
        $(".register").show()
    })

   $(".register a").on("click",function(){
        $(".login").show()
         $(".register").hide()
    })

    


})