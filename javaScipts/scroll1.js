$(document).ready(function(){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                    if(scroll > 300){ 
                    $('#videoId').get(0).pause()    ; 
                    }
                else{
                    $('#videoId').get(0).play();

                }   
            })
        })