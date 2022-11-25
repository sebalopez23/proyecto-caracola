// $('.valpo').click(function() {
//    $('.zona1').toggle();
//    $('.zona2').hide();
//    if(screen.width < 576){
//     location.href = "index.html#region";
//   }
// });
// $('.coquimbo').click(function() {
//    $('.zona2').toggle();
//    $('.zona1').hide();
// });

// $(document).ready(function () {
//     $('.coquimbo').click(function (e) {
//         e.preventDefault(); $('.zona1').show();
//         $('.zona2, .zona3, .zona4').hide();
//         if(screen.width < 576){
//             location.href = "index.html#region";
//           }
//     });
// });
$('.valpo').click(function (e) {
    e.preventDefault(); $(".zona2").show();
    $(".zona1, .zona3, .zona4").hide();
    if(screen.width < 576){
        location.href = "index.html#region";
      }
});
// $('.biobio').click(function (e) {
//     e.preventDefault(); $('.zona3').show();
//     $('.zona1, .zona2, .zona4').hide();
//     if(screen.width < 576){
//         location.href = "index.html#region";
//       }
// });
// $('.lagos').click(function (e) {
//     e.preventDefault(); $('.zona4').show();
//     $('.zona1, .zona2, .zona3').hide();
//     if(screen.width < 576){
//         location.href = "index.html#region";
//       }
// });







