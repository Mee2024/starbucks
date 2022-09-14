const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click',function(){
   searchInputEL.focus();
});

searchInputEL.addEventListener('focus',function(){
  searchEL.classList.add('focused');
  searchInputEL.setAttribute('placeholder','통합검색');
});

searchInputEL.addEventListener('blur',function(){
  searchEL.classList.remove('focused');
  searchInputEL.setAttribute('placeholder','');
});


const badgeEL = document .querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY >500) {
  // 배지 숨기기 
  // gsap.to(요소, 지속시간, 옵션); 
  gsap.to(badgeEL, .6, {
    opacity: 0,
    display: 'none'
  });
  // 버튼보이기!
  gsap.to('#to-top', .2, {
    x: 0
   });
  } else {
// 배지 보이기
gsap.to(badgeEL, .6,{
  opacity: 1, 
  display: 'block' 
   });
   //버튼 숨기기!
 gsap.to('#to-top', .2, {
  x:100
 });
}
},300));
// _.throttle(함수,시간)


toTopEl.addEventListener('click', function (){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function(fadeEL,index){
  // gsap.to(요소, 지속시간, 옵션);
gsap.to(fadeEL, 1, {
  delay: (index + 1) *.7,  //0.7,1.4,2.1,2.7
  opacity: 1
});
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container',{
 // direction: 'horizontal'
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay:5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true  //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEL: '.promotion .swiper-prev',
    nextEL: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
  // 숨김 처리!
  promotionEL.classList.add('hide');
  }else {
 // 보임 처리!
 promotionEL.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size) {
  //gsap.to(요소,시간, 옵션);
  gsap.to(selector, //선택자
  random(1.5, 2.5), //애니메이션 동작 시간
  { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  }
  );
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',5,15);
floatingObject('.floating3',15,20);



const spyELs = document.querySelectorAll('section.scroll-spy');
spyELs.forEach(function(spyEl){
new ScrollMagic
 .Scene({
  triggerElement:spyEl,  // 보여짐 여부를 감시할 요소를 지정
  triggerHook: .8
 })
 .setClassToggle(spyEl, 'show')
 .addTo(new ScrollMagic.Controller());
});


//변수/변수이름/   객체    /메소드를 실행해서/ 요소를 찾아서 할당할것임. 요소가 .this-year//
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021