$( document ).ready(function() {
	var tab=$('#tab_menu_list > li');
	var content=$('#tab_menu_wrap > li');
	tab.on('click',function(e){
		var tg=$(this);
		i=tg.index();
		content.css('display','none');
		content.eq(i).css('display','block');
		tab.attr('class','submenubox_quarter');
		tab.eq(i).attr('class','submenubox_quarter_on');
		});


     $("#menu_hover").hover(function(){
        $("#menu_hover_show").stop().slideToggle("fast");
    });
     $("#coffee_hover").hover(function(){
        $(".coffee_submenu").stop().slideToggle("fast");
    });
     $("#store_hover").hover(function(){
        $(".store_submenu").stop().slideToggle("fast");
    });
     $("#responsibility_hover").hover(function(){
        $(".respon_submenu").stop().slideToggle("fast");
    });
     $("#whatsnew_hover").hover(function(){
        $(".new_submenu").stop().slideToggle("fast");
    });

//슬라이드 내려오기

$('#topboxbtn').click(function() {
        if($("#slidebtn_wrap").css("top")=='-100px'){
        $("#slidebtn_wrap").animate({top:0},{duration:300});
        $("#wrap").animate({top:100},{duration:300});
        $('.topbar_wrap').animate({top:100},{duration:300});
        }
        else if($("#slidebtn_wrap").css("top")=='0px'){
        $("#slidebtn_wrap").animate({top:-100},{duration:300});
        $("#wrap").animate({top:0},{duration:300});
        $(".topbar_wrap").animate({top:0},{duration:300});
       
        }
    });
//검색바 보이기
     $("#searchbtn , .siconbox").click(function(){
         $("#searchingbox").css({display:"block"});
        $("#searchingbox").animate({width: "201px"},500);        
    });
    $(".closebtn_box").click(function(){
        if($("#searchingbox").css('width')=="201px")
        $("#searchingbox").animate({width: "0px"},500,function(){
            $("#searchingbox").css({display:"none"});
        });
 });
      
 });   

//아코디언 메뉴 푸터

$(function(){
       $('.m_footer_accordion').hide();   
       $('.m_footer_box1').click(function(){       
         $(this).next().slideToggle();
       });
       $(".new_event_box1").mouseenter(function(){
        $(".new_event_slide1").css({display:"block"});
        $(".new_event_slide1").animate({bottom:0},{duration:300});
    });
      $(".new_event_box1").mouseleave(function(){
        $(".new_event_slide1").animate({bottom:-277},{duration:300});
    });
      $(".new_event_box2").mouseenter(function(){
        $(".new_event_slide2").css({display:"block"});
        $(".new_event_slide2").animate({bottom:0},{duration:300});
    });
      $(".new_event_box2").mouseleave(function(){
        $(".new_event_slide2").animate({bottom:-277},{duration:300});
    });
       $(".new_event_box3").mouseenter(function(){
        $(".new_event_slide3").css({display:"block"});
        $(".new_event_slide3").animate({bottom:0},{duration:300});
    });
      $(".new_event_box3").mouseleave(function(){
        $(".new_event_slide3").animate({bottom:-277},{duration:300});
    });
       $(".new_event_box4").mouseenter(function(){
        $(".new_event_slide4").css({display:"block"});
        $(".new_event_slide4").animate({bottom:0},{duration:300});
    });
      $(".new_event_box4").mouseleave(function(){
        $(".new_event_slide4").animate({bottom:-277},{duration:300});
    });
      $('#q_menu').animate({'top':$(document).scrollTop()+20+'px'},500);//Ã³À½½ÃÀÛÇÏ´ÂÀ§Ä¡

$(window).scroll(function(){
  $('#q_menu').stop();
  $('#q_menu').animate({'top':$(document).scrollTop()+20+'px'},1000);
}); 
});

$(function(){
     $("#mcboxwrap_top").animate({left:"35px",opacity:1 },1200);
      $("#mcboxwrap_bottom").animate({left:"35px",opacity:1},1200); 
       $('.bxslider').bxSlider(); 
     
}); 
$(function(){
  var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
    };

    var map = new naver.maps.Map('map', mapOptions);
  });



