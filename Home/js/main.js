// 移动设备隐藏
$(document).ready(function() {
  $(".btn-mobile-menu__icon").click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      // 隐藏
      $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');

    } else {
      // 显示
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    // 箭头向上
    $('.btn-mobile-menu__icon').toggleClass('fa fa-bars fa fa-chevron-circle-up animated fadeIn');
  });
});

//计算版权当前时间
$(document).ready(function() {
  var myDate = new Date;
  var year = myDate.getFullYear();
  $("#time").html(year);
});

//调用手机QQ
function chatQQ(){
  window.location.href="mqqwpa://im/chat?chat_type=wpa&uin=2045105376&version=1&src_type=web&web_src=oicqzone.com";
}
//判断移动端设备
browserRedirect();
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
    //window.location.href = "ME/index.html";
  }
}