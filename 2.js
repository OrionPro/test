function illya () {

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
