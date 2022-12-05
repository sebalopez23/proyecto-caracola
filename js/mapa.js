// $('.valpo').click(function() {
//    $('.zona1').toggle();
//    $('.zona2').hide();
//    
// });
// $('.coquimbo').click(function() {
//    $('.zona2').toggle();
//    $('.zona1').hide();
// });

// $(document).ready(function () {
//     $('.coquimbo').click(function (e) {
//         e.preventDefault(); $('.zona1').show();
//         $('.zona2, .zona3, .zona4').hide();
//     });
// });

$('.valpo').click(function (e) {
    e.preventDefault(); $(".zona2").show();
    $(".zona1, .zona3, .zona4").hide();
});

// $('.biobio').click(function (e) {
//     e.preventDefault(); $('.zona3').show();
//     $('.zona1, .zona2, .zona4').hide();   
// });

$('.lagos').click(function (e) {
    e.preventDefault(); $('.zona4').show();
    $('.zona1, .zona2, .zona3').hide();
});







