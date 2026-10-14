//가장 먼저 하는 일
//console에 log로 해당 파일이 연결되어있는지 찍어보기.
console.log("complete");
//전체화면 사이즈 출력
console.log($(window).width());
console.log($(window).height());
//현재 브라우저 창의 가로세로 길이를 변수에 각각 지정해서 사용할 수 있다.
let wWidth = $(window).width();
let wHeight = $(window).height();
//변수에 할당된 값을 확인할 때 또 log를 찍어볼 수 있다.
// console.log(wWidth);
// console.log(wHeight);

//mousemove 이벤트가 일어날때마다 mouse커서의 x,y값을 구해서 적용할 수 있다.
//mousemove가 일어날때마다 마우스의 X,Yㅏㄱㅄ을 구해서 function을 진행해라
$(document).mousemove(function (e) {
  //function(e)의 e는 event를 의미하며, 문서(document)에서 mousemove가 발생할 때마다 {}중괄호 안의 코드를 실행해라
  $("#status").html(e.pageX + "," + e.pageY);
  //#은 css 중에서 id 요소를 지ㅣ칭하는 기호
  //status라는 친구가 적용된 요소의 안쪽 html내용을 pageX,pageY 기능을 통해 불러와서 표시해라
  $(".box").css("width", e.pageX);
  //class가 box로 적용된 요소의 너비를 mousemove이벤트의 커서 X좌표 값으로 설정해라
  $(".box").css("height", e.pageY);
  //class가 box로 적용된 요소의 높이를 mousemove이벤트의 커서 Y좌표 값으로 설정해라
});

//고양이랑 풀숲 배경 조정해보기
$(document).on("mousemove", function (event) {
  //마우스의 X,Y좌표값 변수 할당
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  //1.마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  //2. 마우스 커서에 고양이 이미지 따라다니게 하기
  //고양이 이미지의 가로세로 너비를 각각 변수에 할당함.
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  //이미지의 left, top 값의 변화를 위에서 선언한 mouse X,Y 좌표값을 가져와서 적용함.
  // 이미지의 position 값을 적용할 때, 고양이 이미지의 절반을 계산해서 넣음.
  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});
