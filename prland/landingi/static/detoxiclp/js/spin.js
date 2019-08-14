// // -------------spin-------------------
// var resultWrapper = document.querySelector('.spin-result-wrapper');
// var wheel = document.querySelector('.wheel-img');

// function spin() {
//     if (wheel.classList.contains('rotated')) {
//         resultWrapper.style.display = "block";
//     } else {
//         wheel.classList.add('super-rotation');
//         setTimeout(function () {
//             resultWrapper.style.display = "block";
//         }, 8000);
//         setTimeout(function () {
//             $('.spin-wrapper').slideUp();
//             $('.order_block').slideDown();
//         }, 10000);
//         wheel.classList.add('rotated');
//         var fiveSeconds = new Date().getTime() + 900000;
//         $('#clock').countdown(fiveSeconds, {elapse: true})
//             .on('update.countdown', function (event) {
//                 var $this = $(this);
//                 $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
//             });
//     }
// }

// var closePopup = document.querySelector('.close-popup');
// $('.close-popup, .pop-up-button').click(function (e) {
//     e.preventDefault();
//     $('.spin-result-wrapper').fadeOut();
//     var top = $('.toform').offset().top;
//     $('body,html').animate({scrollTop: top}, 800);
// });


// // --------------SCROLL-------------------
// $("a").on("touchend, click", function (e) {
//     e.preventDefault();
//     $('body,html').animate({scrollTop: $('.toform').offset().top}, 400);
// });

// // -----------------POPUP--------------------
// var popupShow = 1
// $('html').mouseleave(function () {
//     if (popupShow === 1) {
//         popupShow = 0;
//         $('.popup, .background').fadeIn();
//     }
// });
// $('.close, .popup_btn').click(function () {
//     $('.popup, .background').fadeOut();
// });

// // ----------------COUNTER-----------------------

// $(".b_t_n").on("touchend, click", function (e) {
//     e.preventDefault();
//     $('body,html').animate({scrollTop: $('.toform').offset().top}, 400);
// });


           var resultWrapper = document.querySelector('.spin-result-wrapper');
           var wheel = document.querySelector('.wheel-img');
           setTimeout(function () {
               $('a').click(function (e) {
                   e.preventDefault();
                   var top;
                   if (localStorage.isSpinned) {
                       top = $('.toform').offset().top + 150;
                   } else {
                       top = $('.toform').offset().top;
                   }
                   $('body,html').animate({
                       scrollTop: top
                   }, 800);
               });
           }, 500)

           function spin() {
               if (wheel.classList.contains('rotated')) {
                   resultWrapper.style.display = "block";
               } else {
                   wheel.classList.add('super-rotation');
                   setTimeout(function () {
                       resultWrapper.style.display = "block";
                   }, 8000);
                   setTimeout(function () {
                       $('.spin-wrapper').slideUp();
                       $('.order_block').slideDown();
                       start_timer();
                   }, 10000);
                   wheel.classList.add('rotated');
               }
           }
           var closePopup = document.querySelector('.close-popup');
           $('.close-popup, .pop-up-button').click(function (e) {
               e.preventDefault();
               $('.spin-result-wrapper').fadeOut();
               var top = $('.toform').offset().top;
               $('body,html').animate({
                   scrollTop: top
               }, 800);
           });

           var time = 600;
           var intr;

           function start_timer() {
               intr = setInterval(tick, 1000);
           }

           function tick() {

               if (localStorage.evpenirumofficialv3time) {
                   if (localStorage.evpenirumofficialv3time <= 0) {
                       time = 5;
                   } else {
                       time = localStorage.evpenirumofficialv3time;
                   }

               } else {
                   time = 600;
               }
               time = time - 1;
               localStorage.evpenirumofficialv3time = time;

               var mins = Math.floor(time / 60);
               var secs = time - mins * 60;
               if (mins == 0 && secs == 0) {
                   clearInterval(intr);
               }
               secs = secs >= 10 ? secs : "0" + secs;
               $("#min").html("0" + mins);
               $("#sec").html(secs);

               localStorage.evpenirumofficialv3time = time;
           }

           // function that changes display of given element (ele) to given property (changeTo) 
           function changeDisplay(ele, changeTo) {
               ele.style.display = changeTo;
           }



           // check for spin run 
           const spinBtn = document.querySelector('.wheel-cursor');
           spinBtn.addEventListener('click', spinned);

           function spinned() {
               // save "spinned = true" variable in local storage 
               localStorage.isSpinned = true;
           }

           // on every page load, check if there is "spinned" variable in LS, if true - display form, if false - display spin

           if (localStorage.isSpinned) {
               const _spin = document.querySelector('#js-hide-spin');
               const _form = document.querySelector('#js-form-block');
               changeDisplay(_spin, 'none');
               changeDisplay(_form, 'block');
               start_timer();
           }
           $(window).load(function() {
            $(".comments__like").off()
        });
           