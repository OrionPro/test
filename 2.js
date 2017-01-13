$(function () {

  //SVG Fallback
  // if(!Modernizr.svg) {
  //  $("img[src*='svg']").attr("src", function() {
  //      return $(this).attr("src").replace(".svg", ".png");
  //  });
  // };
});
$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() >= 10 && $(window).scrollTop() <= 199) {
    // tl.reverse();
  }
  if ($(window).scrollTop() >= 200 && $(window).scrollTop() <= 450) {
    tl.resume();
  }
  if ($(window).scrollTop() >= 350 && $(window).scrollTop() <= 550) {
    tl2.reverse();
  }
  if ($(window).scrollTop() >= 550 && $(window).scrollTop() <= 700) {
    tl2.resume();
  }
  if ($(window).scrollTop() >= 650 && $(window).scrollTop() <= 800) {
    tl3.resume();
  }
  if ($(window).scrollTop() >= 1400 && $(window).scrollTop() <= 1600) {
    tl4.resume();
  }
  if ($(window).scrollTop() >= 2300 && $(window).scrollTop() <= 2600) {
    tl5.resume();
  }
  if ($(window).scrollTop() >= 2900 && $(window).scrollTop() <= 3000) {
    tl7.resume();
  }
  if ($(window).scrollTop() >= 3300 && $(window).scrollTop() <= 3600) {
    tl8.resume();
  }
  if ($(window).scrollTop() >= 3800 && $(window).scrollTop() <= 3900) {
    tl9.resume();
  }
  if ($(window).scrollTop() >= 5700 && $(window).scrollTop() <= 5900) {
    tl10.resume();
  }
  if ($(window).scrollTop() >= 100 && $(window).scrollTop() <= 300) {
    tl12.resume();
  }
  if ($(window).scrollTop() >= 1000 && $(window).scrollTop() <= 1200) {
    tl13.resume();
  }
  if ($(window).scrollTop() >= 3600 && $(window).scrollTop() <= 3800) {
    tl14.resume();
  }
  if ($(window).scrollTop() >= 4800 && $(window).scrollTop() <= 5000) {
    tl15.resume();
  }
  if ($(window).scrollTop() >= 6200 && $(window).scrollTop() <= 6400) {
    tl16.resume();
  }
  if ($(window).scrollTop() >= 7600 && $(window).scrollTop() <= 7800) {
    tl17.resume();
  }
  if ($(window).scrollTop() >= 4500 && $(window).scrollTop() <= 4800) {
    tl18.resume();
  }
  if ($(window).scrollTop() >= 1800 && $(window).scrollTop() <= 2100) {
    tl21.resume();
  }
  if ($(window).scrollTop() >= 1200 && $(window).scrollTop() <= 1400) {
    tl22.resume();
  }
  if ($(window).scrollTop() >= 2800 && $(window).scrollTop() <= 3000) {
    tl23.resume();
  }
  if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 500) {
    tl25.resume();
  }
  if ($(window).scrollTop() >= 3000 && $(window).scrollTop() <= 3300) {
    tl26.resume();
  }
  if ($(window).scrollTop() >= 1100 && $(window).scrollTop() <= 1200) {
    tl27.resume();
  }
  if ($(window).scrollTop() >= 2000 && $(window).scrollTop() <= 2200) {
    tl27.resume();
  }
  if ($(window).scrollTop() >= 3300 && $(window).scrollTop() <= 3400) {
    tl29.resume();
  }
  if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 500) {
    tl30.resume();
  }
  if ($(window).scrollTop() >= 1200 && $(window).scrollTop() <= 1300) {
    tl31.resume();
  }
  if ($(window).scrollTop() >= 2000 && $(window).scrollTop() <= 2200) {
    tl32.resume();
  }
});

function setAnimation(down, up) {
  var section = document.querySelectorAll('section');


  // проебежим по всем секциям


  for (var i = 0; i < section.length; i++) {
    var sectionClass = section[i].getAttribute('class').split(' '),
        attribute = section[i].getAttribute('data-anchor');


    // пробежим по всем классам активной секции
    for (var j = 0; j < sectionClass.length; j++) {

      // если секция активна то...
      if (sectionClass[j] == 'active') {

        for (var q = 0; q < sectionClass.length; q++) {
          // проверяем на наличия класса animation
          if (sectionClass[q] == 'animation') {
            limit++;
            thisSection = parseInt(attribute);
          }
          if (sectionClass[q] !== 'animation') {
            section[i].classList.add('animation');
            limit = 0;
            nextSection = parseInt(attribute);
          }
        }
        if (limit == 0) {
          if (thisSection < nextSection) {
            // вызов анимации по скроллу вниз
            down[i].duration(2.5);
            down[i].play(0);
            for (var k = 0; k < section.length; k++) {
              // удаление всех классов animation, кроме активной секции
              if (k != i) {
                section[k].classList.remove('animation');
                down[k].pause(0);
              }
            }
          }
          if (thisSection > nextSection) {
            // вызов анимации по скроллу вверх
            up[i].duration(2);
            up[i].play(0);
            for (var k = 0; k < section.length; k++) {
              if (k != i) {
                section[k].classList.remove('animation');
                up[k].pause(0);
              }
            }
          }
        }
      }
    }
  }
}

function asldkfjklsdjfklsj () {


  if (document.documentElement.clientWidth > 992) {
    $('.section').each(function () {
      if ($(this).hasClass('active')) {
        var data = $(this).data('anchor');
        if (data != 1) {
          $(".top-panel").hide("fade", 200);
        } else {

          $(".top-panel").show("fade", 200);
        }
      }
    });
  } else {

  }

}


$(document).ready(function () {

  border1();
  border2();
  langList();
  aboutPhoto();
  buttonMobileMenu();
  console.log(navigator.userAgent)
  if (document.documentElement.clientWidth >= 1366 && document.documentElement.clientHeight < 650) {
    $('.title-2').css('padding-top', "40px");
  } else $('.title-2').css('padding-top', "");


  var dfhd = new MobileDetect(window.navigator.userAgent);

  var dfhdSafari = new MobileDetect(
      'Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
      ' Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)' +
      ' Version/4.0 Mobile Safari/534.30');

  if (document.documentElement.clientWidth >= 1366 && document.documentElement.clientHeight >= 650 && dfhd.mobile() == null) {
    anim();
    $('.main').fullpage({
      anchors: ['1', '2', '3', '4', '5', '6', '7', '8'],
      menu: '#desktop-menu',
      css3: true,
      navigation: true,
      responsiveSlides: true,
      responsiveWidth: 1366,
      responsiveHeight: 650,
      afterResponsive: function (isResponsive) {
        if (isResponsive == true) {
          $.fn.fullpage.setResponsive(true);
        } else $.fn.fullpage.setResponsive(false);

      }

    });
