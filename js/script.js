$(document).ready(function(){
  function showMenu(menuName) {
    menuList=['mba','datascience','machinelearning','blockchain','law','software','management'];
    $('#'+menuName+'-menu').click(function(){
      for (index = 0; index < menuList.length; index++) { 
        if(!($('#'+menuList[index]).hasClass("display-none"))){
          $('#'+menuList[index]).addClass("display-none");
          $('#'+menuList[index]+'-menu').removeClass("dropdown-item-active");
        }
        $('#'+menuName).removeClass("display-none");
        $('#'+menuName+'-menu').addClass("dropdown-item-active");
    } 
    })
    $('#'+menuName+'-menu1').click(function(){
      for (index = 0; index < menuList.length; index++) { 
        if(!($('#'+menuList[index]+'1').hasClass("display-none"))&&menuList[index]!=menuName){
          $('#'+menuList[index]+'1').addClass("display-none");
          $('#'+menuList[index]+'-menu1').find("i").addClass("fa-angle-down");
          $('#'+menuList[index]+'-menu1').removeClass("dropdown-item-active");
        }
        $('#'+menuName+'1').toggleClass("display-none");
        $('#'+menuName+'-menu1').find("i").toggleClass("fa-angle-up");
        $('#'+menuName+'-menu1').toggleClass("dropdown-item-active");
    } 
    })
}
menuList=['mba','datascience','machinelearning','blockchain','law','software','management'];
for (index = 0; index < menuList.length; index++) { 
  showMenu(menuList[index]);
}


function showMenuIndex(menuName) {
  menuListIndex=['home','profile','messages','settings'];
  $('#pills-'+menuName+'-tab').click(function(){
    for (index = 0; index < menuListIndex.length; index++) { 
      if(!($('#pills-'+menuListIndex[index]).hasClass("display-none"))&&menuListIndex[index]!=menuName){
        $('#pills-'+menuListIndex[index]).addClass("display-none");
        // $('#pills-'+menuListIndex[index]+'-tab').find("i").addClass("fa-caret-right");
        $('#pills-'+menuListIndex[index]+'-tab').removeClass("active");
      }
      if($('#pills-'+menuName).hasClass("display-none")){
        $('#pills-'+menuName).removeClass("display-none");
        $('#pills-'+menuName+'-tab').addClass("active");
      }
      // $('#pills-'+menuName).removeClass("display-none");
      // $('#pills-'+menuName+'-tab').find("i").toggleClass("fa-caret-up");
      // $('#pills-'+menuName+'-tab').addClass("active");
  } 
  })
}

menuListIndex=['home','profile','messages','settings'];
for (index = 0; index < menuListIndex.length; index++) { 
  showMenuIndex(menuListIndex[index]);
}
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('#banner').height()){  
        $('.top-nav').removeClass("display-none");
      }
      else{
        $('.top-nav').addClass("display-none");
      }
    });
  $('.curriculum-menu').click(function(){
    $('#curriculum-container').removeClass("display-none");
    $('#rest').addClass("display-none");
    $('.body').css("background-color","#585858");
    $('.top-nav').addClass("display-none");

  })
  $('#curriculum-container-close').click(function(){
    $('#curriculum-container').addClass("display-none");
    $('#rest').removeClass("display-none");
    $('.body').css("background-color","white");
    if ($(this).scrollTop() >$('#banner').height()){  
        $('.top-nav').removeClass("display-none");
      }
      else{
        $('.top-nav').addClass("display-none");
      }
  })
  $('#navbarDropdown').click(function(){
    $('.dropdown-programs').toggleClass("display-none");
    $('#navbarDropdown').find("i").toggleClass("fa-caret-up");
  })
  $('#headingOne').click(function(){
    $('#arrow2').removeClass("fa-angle-up");
    $('#arrow3').removeClass("fa-angle-up");
    $('#arrow4').removeClass("fa-angle-up");
    $('#arrow5').removeClass("fa-angle-up");
    $('#arrow1').toggleClass("fa-angle-up");
  })
  $('#headingTwo').click(function(){
    $('#arrow1').removeClass("fa-angle-up");
    $('#arrow3').removeClass("fa-angle-up");
    $('#arrow4').removeClass("fa-angle-up");
    $('#arrow5').removeClass("fa-angle-up");
    $('#arrow2').toggleClass("fa-angle-up");
  })
  $('#headingThree').click(function(){
    $('#arrow1').removeClass("fa-angle-up");
    $('#arrow2').removeClass("fa-angle-up");
    $('#arrow4').removeClass("fa-angle-up");
    $('#arrow5').removeClass("fa-angle-up");
    $('#arrow3').toggleClass("fa-angle-up");
  })
  $('#headingFour').click(function(){
    $('#arrow1').removeClass("fa-angle-up");
    $('#arrow2').removeClass("fa-angle-up");
    $('#arrow3').removeClass("fa-angle-up");
    $('#arrow5').removeClass("fa-angle-up");
    $('#arrow4').toggleClass("fa-angle-up");
  })
  $('#headingFive').click(function(){
    $('#arrow1').removeClass("fa-angle-up");
    $('#arrow2').removeClass("fa-angle-up");
    $('#arrow3').removeClass("fa-angle-up");
    $('#arrow4').removeClass("fa-angle-up");
    $('#arrow5').toggleClass("fa-angle-up");
  })
  $('.slider1').click(function(){
    $('.slider2').removeClass("slider-active");
    $('.slider3').removeClass("slider-active");
    $('.slider4').removeClass("slider-active");
    $('.slider5').removeClass("slider-active");
    $('.slider1').addClass("slider-active");
  })
  $('.slider2').click(function(){
    $('.slider1').removeClass("slider-active");
    $('.slider3').removeClass("slider-active");
    $('.slider4').removeClass("slider-active");
    $('.slider5').removeClass("slider-active");
    $('.slider2').addClass("slider-active");
  })
  $('.slider3').click(function(){
    $('.slider1').removeClass("slider-active");
    $('.slider2').removeClass("slider-active");
    $('.slider4').removeClass("slider-active");
    $('.slider5').removeClass("slider-active");
    $('.slider3').addClass("slider-active");
  })
  $('.slider4').click(function(){
    $('.slider1').removeClass("slider-active");
    $('.slider2').removeClass("slider-active");
    $('.slider3').removeClass("slider-active");
    $('.slider5').removeClass("slider-active");
    $('.slider4').addClass("slider-active");
  })
  $('.slider5').click(function(){
    $('.slider1').removeClass("slider-active");
    $('.slider2').removeClass("slider-active");
    $('.slider3').removeClass("slider-active");
    $('.slider4').removeClass("slider-active");
    $('.slider5').addClass("slider-active");
  })
  $('.chat-box').click(function(){
    $('.chat-container').toggleClass("chat-container-visible");
  })
  $('#sidemenubutton').click(function(){
    $('.side-container').toggleClass("side-container-visible");
    $('#arrow-side').toggleClass("fa-angle-right");
  })
  $('.faq-card-btn1').click(
    function () {
      $('.card-back2').removeClass("card-active");
      $('.card-back3').removeClass("card-active");
      $('.card-back4').removeClass("card-active");
      $('.card-back1').toggleClass("card-active");
      $('.card-back5').removeClass("card-active");
      $('.card-back6').removeClass("card-active");
      $('.card-back7').removeClass("card-active");
      $('.card-back8').removeClass("card-active");
      $('.arrow-1').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    })
    $('.faq-card-btn2').click(
      function () {
        $('.card-back1').removeClass("card-active");
        $('.card-back3').removeClass("card-active");
        $('.card-back4').removeClass("card-active");
        $('.card-back5').removeClass("card-active");
        $('.card-back6').removeClass("card-active");
        $('.card-back7').removeClass("card-active");
        $('.card-back8').removeClass("card-active");
        $('.card-back2').toggleClass("card-active");
        $('.arrow-2').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
      })
      $('.faq-card-btn3').click(
        function () {
          $('.card-back1').removeClass("card-active");
          $('.card-back2').removeClass("card-active");
          $('.card-back4').removeClass("card-active");
          $('.card-back5').removeClass("card-active");
          $('.card-back6').removeClass("card-active");
          $('.card-back7').removeClass("card-active");
          $('.card-back8').removeClass("card-active");         
          $('.card-back3').toggleClass("card-active");
          $('.arrow-3').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        })
        $('.faq-card-btn4').click(
          function () {
            $('.card-back1').removeClass("card-active");
            $('.card-back2').removeClass("card-active");
            $('.card-back3').removeClass("card-active");
            $('.card-back8').removeClass("card-active");
            $('.card-back5').removeClass("card-active");
            $('.card-back6').removeClass("card-active");
            $('.card-back7').removeClass("card-active");
            $('.card-back4').toggleClass("card-active");
            $('.arrow-4').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
          })

          $('.faq-card-btn5').click(
            function () {
              $('.card-back1').removeClass("card-active");
              $('.card-back2').removeClass("card-active");
              $('.card-back3').removeClass("card-active");
              $('.card-back4').removeClass("card-active");
              $('.card-back8').removeClass("card-active");
              $('.card-back6').removeClass("card-active");
              $('.card-back7').removeClass("card-active");
              $('.card-back5').toggleClass("card-active");
              $('.arrow-5').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
            })

            $('.faq-card-btn6').click(
              function () {
                $('.card-back1').removeClass("card-active");
                $('.card-back2').removeClass("card-active");
                $('.card-back3').removeClass("card-active");
                $('.card-back8').removeClass("card-active");
                $('.card-back5').removeClass("card-active");
                $('.card-back4').removeClass("card-active");
                $('.card-back7').removeClass("card-active");
                $('.card-back6').toggleClass("card-active");
                $('.arrow-6').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
              })
              $('.faq-card-btn7').click(
                function () {
                  $('.card-back1').removeClass("card-active");
                  $('.card-back2').removeClass("card-active");
                  $('.card-back3').removeClass("card-active");
                  $('.card-back8').removeClass("card-active");
                  $('.card-back5').removeClass("card-active");
                  $('.card-back6').removeClass("card-active");
                  $('.card-back4').removeClass("card-active");
                  $('.card-back7').toggleClass("card-active");
                  $('.arrow-7').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
                })
                $('.faq-card-btn8').click(
                  function () {
                    $('.card-back1').removeClass("card-active");
                    $('.card-back2').removeClass("card-active");
                    $('.card-back3').removeClass("card-active");
                    $('.card-back7').removeClass("card-active");
                    $('.card-back5').removeClass("card-active");
                    $('.card-back6').removeClass("card-active");
                    $('.card-back4').removeClass("card-active");
                    $('.card-back8').toggleClass("card-active");
                    $('.arrow-8').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
                  })




    $('#myCarousel').carousel({
        interval: 1000
      })
      $('#recipeCarousel').carousel({
        interval: 10000
      })
      
      $('.s-carousel .s-carousel-item').each(function(){
          var minPerSlide = 3;
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<minPerSlide;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });


        //Set the carousel options
        $('#quote-carousel').carousel({
          pause: true,
          interval: 4000,
        });

      $('.bottom-menu').click(function(){
        $('.menu-selected').removeClass('menu-selected');
        $(this).toggleClass('menu-selected');
      });
          

      $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      
        for (var i=0;i<4;i++) {
          next=next.next();
          if (!next.length) {
            next=$(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
        }
      });
      

});

/*$(window).scroll(function() {
  var hT = $('#curriculum').offset().top,
      hH = $('#curriculum').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
      alert("Triggered");
  }
});*/


// Cache selectors
var lastId,
topMenu = $("#course-fixed-navbar"),
 topMenuHeight = topMenu.outerHeight()+100,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   //console.log("=====",cur.id);
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       console.log("----", id)
       // Set/remove active class
       //$('.bottom-menu').removeClass("menu-selected");
       menuItems
         .children().removeClass("menu-selected")
         .end().filter("[href='#"+id+"']").children().addClass("menu-selected");
   }                   
});
