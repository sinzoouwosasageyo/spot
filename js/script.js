$(function(){
  $(".open_btn").on("click",function(){
    $(".open_btn").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});
// 6개의 점들에게 모두 open_btn 이라는 클래스가 부여된 상태에서
// 이것을 클릭할 시 나 자신 이외의 모든 것들은 active 클래스가 부여되는 것을 지우고
// 나 자신에게만 active 클래스가 토글 형태로 부여되게 함

var tuto_close = new EzenAddClass("#tuto_close",{
  class:"tutoActive",
});
// 튜토리얼 창에 별도로 클래스를 부여하는 플러그인 사용
// 다른 6개의 점들과는 독립되게 동작하기 위해서 클래스 명을 다르게 지정함

var menu_btn = new EzenAddClass(".menu_btn",{
  class:"showActive",
  afterFun:function(){
    var allactive = document.querySelectorAll(".active");
    allactive.forEach(function(x){
      x.classList.remove("active");
    });
  }
});
// 화면 우측 카메라 버튼으로 동작하는 전체메뉴 버튼
// 이것 역시 다른 것들과는 독립되게 동작하기 위해서 클래스 명을 다르게 지정했고
// 마찬가지로 클릭 시 나 자신에게만 active 클래스가 부여되고
// 다른 것들에게서는 클래스 부여 상태를 취소함

var custom_link = new EzenAddClass("#custom_link",{
  class:"customActive",
  remove:".custom_close"
});

var credit = new EzenAddClass("#credit_link",{
  class:"creditActive",
  remove:".credit_close"
});

var credit = new EzenAddClass("#check_link",{
  class:"checkActive",
  remove:".check_close"
});


var maxCount = 4;   // 카운트 최대값은 2
var count = 0;    // 카운트, 0으로 초기화 설정

function CountChecked(field){   // field객체를 인자로 하는 CountChecked 함수 정의
	if (field.checked) {    // 만약 field의 속성이 checked 라면(사용자가 클릭해서 체크상태가 된다면)
		count += 1;   // count 1 증가
	}
	else {    // 아니라면 (field의 속성이 checked가 아니라면)
		count -= 1;   // count 1 감소
	}
	
	if (count > maxCount) {   // 만약 count 값이 maxCount 값보다 큰 경우라면
		alert("카드 혜택은 최대 4개까지만 선택 가능합니다!");	// alert 창을 띄움
	field.checked = false;    // (마지막 onclick한)field 객체의 checked를 false(checked가 아닌 상태)로 만든다.
	count -= 1;   // 이때 올라갔던 카운트를 취소처리해야 하므로 count를 1 감소시킨다.
	}
}

function countReset(){
  count = 0;
}

var camera_bolt = new EzenAddClass(".camera_bolt",{
  class:"blinkActive",
  afterFun:function(){
    var allactive = document.querySelector(".camera_bolt");
    setTimeout(function(){
      allactive.classList.remove("blinkActive");
    },400);
  }
});
var camera_bolt = new EzenAddClass(".camera_live",{});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper 홈페에지에서 나오는 기본 설정들을 대부분 그대로 가져옴