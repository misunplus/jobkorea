$(document).ready(function(){
    var swiper = new Swiper('.slide1', {
        // 버티컬 위아래
        direction: 'vertical',
        // 페이징부분은 안쓸거라 삭제
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        slidesPerView:'auto',
        autoplay: {delay: 1000,},
        loop:true  
           
    });
     $(".search10 .more").on("click", function(){
         $(".search10").toggleClass("on");
     });
    

});



