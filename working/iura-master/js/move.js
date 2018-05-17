$(window).on("scroll", function() {
    if ($(this).scrollTop() > 50) {
       $("#header-nav-bar").addClass("not-transparent");
    }
    else {
        $("#header-nav-bar").removeClass("not-transparent");
    }
 });

$(".review").click(function() {
    $('.button-active').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').removeClass('in');
    $('html,body').animate({
        scrollTop: ($("#header").offset().top )},
        'slow');
});
$(".value").click(function() {
   $('.button-active').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').removeClass('in');
    $('html,body').animate({
        scrollTop: ($(".part-six").offset().top - 100)},
        'slow');
});
$(".skill").click(function() {
    $('.button-active').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').removeClass('in');
    $('html,body').animate({
        scrollTop: ($(".part-five").offset().top - 100)},
        'slow');
});
$(".contact-us").click(function() {
$('.button-active').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').removeClass('in');
    $('html,body').animate({
        scrollTop: ($("footer").offset().top - 100)},
        'slow');
});
$(".about").click(function() {
    $('.button-active').removeClass('active');
    $(this).addClass('active');
});

$(".part-five-button-1").click(function() {
  console.log('ádsad')
    $('.part-five-button-1').addClass('part-five-btn-active')
    $('.part-five-button-2').removeClass('part-five-btn-active')
    $('.part-five-list-1').css('display','block');
    $('.part-five-list-2').css('display','none');
});
$(".part-five-button-2").click(function() {
    $('.part-five-button-2').addClass('part-five-btn-active')
    $('.part-five-button-1').removeClass('part-five-btn-active')
    $('.part-five-list-2').css('display','block');
    $('.part-five-list-1').css('display','none');
});

$(".part-six-button-1").click(function() {
  console.log('ádsad')
    $('.part-six-button-1').addClass('part-six-btn-active')
    $('.part-six-button-2').removeClass('part-six-btn-active')
    $('.part-six-list-1').css('display','block');
    $('.part-six-list-2').css('display','none');
});
$(".part-six-button-2").click(function() {
    $('.part-six-button-2').addClass('part-six-btn-active')
    $('.part-six-button-1').removeClass('part-six-btn-active')
    $('.part-six-list-2').css('display','block');
    $('.part-six-list-1').css('display','none');
});