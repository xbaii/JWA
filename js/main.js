// jQuery(document).ready(function ($) {
//
//   $('#checkbox').change(function(){
//     setInterval(function () {
//         moveRight();
//     }, 3000);
//   });
//
// 	var slideCount = $('#slider ul li').length;
// 	var slideWidth = $('#slider ul li').width();
// 	var slideHeight = $('#slider ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;
//
// 	$('#slider').css({ width: slideWidth, height: slideHeight });
//
// 	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//
//     $('#slider ul li:last-child').prependTo('#slider ul');
//
//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//
//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//
//     $('a.control_prev').click(function () {
//         moveLeft();
//     });
//
//     $('a.control_next').click(function () {
//         moveRight();
//     });


jQuery(document).ready(function ($) {

function do_slide(){
    interval = setInterval(function(){
      moveRight();
    }, 6000);
  }
  do_slide();
   $('ul li').hover(function(){
       clearInterval(interval);
     });
      $('ul li').mouseleave(function(){
       do_slide();
     });

	var slideCount = $('#oob_sli ul li').length;
	var slideWidth = $('#oob_sli ul li').width();
	var slideHeight = $('#oob_sli ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

//   $("#cbp-fwslider ul li:gt(0)").hide();
//
//   setInterval(function() {
//     $('#cbp-fwslider ul li:gt(0)').hide();
//     setInterval(function(){
//       $('#cbp-fwslider :first-child').fadeOut()
//          .next('li').fadeIn()
//          .end().appendTo('#cbp-fwslider');},
//       3000);
// });

	$('#oob_sli').css({ width: slideWidth, height: slideHeight });

	$('#oob_sli ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#oob_sli ul li:last-child').prependTo('#oob_sli ul');

    function moveLeft() {
        $('#oob_sli ul').animate({
            left: + slideWidth
        }, 700, function () {
            $('#oob_sli ul li:last-child').prependTo('#oob_sli ul');
            $('#oob_sli ul').css('left', '');
        });
    };

    function moveRight() {
        $('#oob_sli ul').animate({
            left: - slideWidth
        }, 700, function () {
            $('#oob_sli ul li:first-child').appendTo('#oob_sli ul');
            $('#oob_sli ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});
