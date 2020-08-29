$(document).ready(function(){
  function showMenu(menuName) {
    menuList=['mba','datascience','machinelearning','blockchain','law','software','management', 'executive', 'executive2'];
    $('#'+menuName+'-menu').hover(function(){
      for (index = 0; index < menuList.length; index++) { 
        if(!($('#'+menuList[index]).hasClass("display-none"))){
          $('#'+menuList[index]).addClass("display-none");
          $('#'+menuList[index]+'-menu').removeClass("dropdown-item-active");
        }
        $('#'+menuName).removeClass("display-none");
        $('#'+menuName+'-menu').addClass("dropdown-item-active");
    } 
    })
    $('#'+menuName+'-menu1').hover(function(){
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
menuList=['mba','datascience','machinelearning','blockchain','law','software','management', 'executive', 'executive2'];
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

  });

  $('.apply-now-menu').click(function(){
    $('#apply-now-container').removeClass("display-none");
    $('#rest').addClass("display-none");
    $('.body').css("background-color","#585858");
    $('.top-nav').addClass("display-none");

  });

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
  });

  $('#apply-now-container-close').click(function(){
    $('#apply-now-container').addClass("display-none");
    $('#rest').removeClass("display-none");
    $('.body').css("background-color","white");
    if ($(this).scrollTop() >$('#banner').height()){  
        $('.top-nav').removeClass("display-none");
      }
      else{
        $('.top-nav').addClass("display-none");
      }
  });



  $('.navbarDropdown').mouseenter(function(){
    $('.dropdown-programs').toggleClass("display-none");
    $('#navbarDropdown').find("i").toggleClass("fa-caret-up");
  })

  $('.navbarDropdown2').mouseleave(function(){
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


//-----------FORM--------------------
$("#applynow-submit").click(function(){
  var c = document.getElementById('banner');
  var coursename = c.getElementsByTagName('h2')[0].innerText;
  alert(coursename);
  var name = document.getElementById('applynow-firsname').value+" " + document.getElementById('applynow-lastname').value;
  var contact = document.getElementById('applynow-contact').value;
  var email = document.getElementById('applynow-email').value;
  var city = document.getElementById('applynow-city').value;
  var designation = document.getElementById('applynow-designation').value;

  $.post("formsubmit.php", {NAME:name, CONTACT:contact, EMAIL:email, CITY: city, DESIGNATION:designation, COURSE:coursename}, function(data, res){
    if(data.includes('Success'))
    {
      alert("Form Submitted Successfully");
    }
    else{
      alert("Some Error Occurred");
      console.log(data);
    }
  });

  /*$.ajax("/formsubmit.php",{
    type:'POST',
    dataType: 'json',
    data: {NAME:name, CONTACT:contact, EMAIL:email, CITY: city, DESIGNATION:designation, COURSE:coursename},
    contentType: "application/json; charset=utf-8",
    crossDomain : true,
    success:function(data, status, xhr){
      alert(data);
    },
    error:function(jqXhr, textStatus, errorMessage){
      console.log(errorMessage, textStatus, jqXhr);

    }
  });*/

});

var section = document.getElementById('fees');
var principle = section.getElementsByTagName('p')[0].innerText;
principle = Number(principle.replace(",", "").replace("₹", "").replace(",", "").replace(" ", "").replace("*",""));
var interest = Math.round(Number(principle/10));


var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx_loan = document.getElementById('myChart-loan');
var ctx_loan = document.getElementById('myChart-loan').getContext('2d');
var ctx = $('#myChart');
var ctx_loan = $('#myChart-loan');
var ctx = 'myChart';
var LOAN_DATA = [interest, principle];
var LOAN_LABELS = ['Interest', 'Principle Amt'];
var DATA = [principle];
var LABELS = ['EMI-1'];

data = {
    datasets: [{
                  data: DATA,

                  // These labels appear in the legend and in the tooltips when hovering different arcs
                  backgroundColor: [
                              'rgba(255, 99, 132)',
                              'rgba(54, 162, 235)',
                              'rgba(255, 206, 86)',
                              'rgba(115, 196, 54)'
                          ],
                }],
    labels: LABELS,
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: '#fff',
                boxWidth:10,
            }
        }
    }
};

loan_data = {
    datasets: [{
                  data: LOAN_DATA,

                  // These labels appear in the legend and in the tooltips when hovering different arcs
                  backgroundColor: [
                              'rgba(255, 139, 132)',
                              'rgba(54, 112, 235)',
                              'rgba(155, 206, 86)',
                              'rgba(195, 196, 54)',
                              'rgba(95, 236, 154)'
                          ],
                }],
    labels: LOAN_LABELS,
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: '#ffffff',
                boxWidth:10,
            }
        }
    }
};
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data
});

var myPieChart2 = new Chart(ctx_loan, {
    type: 'pie',
    data: loan_data
});

function changeData(num){
  var emis = Number(principle/num);
  emis = Math.round(emis);
  //DATA=[];
  //LABELS=[];
  myPieChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
  for(var i=0; i<num; i++)
  {
    DATA[i]=emis;
    let nn = i+1;
    LABELS[i]="EMI-"+nn.toString();
  }
  myPieChart.data.labels=LABELS;
  myPieChart.update();
}


function changeDataLoan(num){
  var emis = Number(principle/num);
  emis = Math.round(emis);
  //DATA=[];
  //LABELS=[];
  myPieChart2.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
  for(var i=1; i<=num; i++)
  {
    LOAN_DATA[i]=emis;
    let nn = i+1;
    LOAN_LABELS[i]="L-"+nn.toString();
  }
  myPieChart2.data.labels=LOAN_LABELS;
  myPieChart2.update();
}
