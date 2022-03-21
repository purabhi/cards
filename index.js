let id=null
$('.sidenav_button img').click(()=>{
  $('.sidebar').css('width','400px')
   $('.dark-bg').css('display','block')
    mymove();
})

function mymove(){
    console.log('started');
    let elem=$('.sidebar .sidebar-icon');
//     elem.animate({
//        transform:"rotate(20deg)"
// },5000);
elem.removeClass("removeanimate");
elem.addClass("animate")

}
function notmove(){
    let elem=$('.sidebar .sidebar-icon');
    elem.removeClass("animate");
    elem.addClass("removeanimate")
}
$('.sidebar .sidebar-icon').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
    notmove();
})
$('.dark-bg').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
    notmove();
})

// FOR SMALLER SCREEN
$('#icon_img').click(()=>{
    $('.sidebar').css('width','100%')
    $('.dark-bg').css('display','block')
})



  
