// toggle line =>
function toggleMenu() {
  var $myNav = $('#myNav'); //메뉴 감싸는 전체 컨테이너 변수 저장
if ($myNav.css("width") == "0px"){
  $('.toggle-container').addClass('active');
  $myNav.css("width", "100%");
}  else {
    $('.toggle-container').removeClass('active');
    $myNav.css("width", "0%");
  }
}


// 만약에 가로사이즈가 0이면 토글 버튼에 액티브 클래스 추가하고 메뉴 너비 100%로 열기
// 그렇지 않으면 액트비 클래스 제거하고 메뉴 너비 0으로 설정 후 메뉴 닫기


//  jQuery
$(function(){
// 레이어 팝업
$(".layerPopup").on("click", function(){
  $(".popup, .bg").fadeIn();
});
$(".close, .bg").on("click", function(){
  $(".popup, .bg").fadeOut();
});
});