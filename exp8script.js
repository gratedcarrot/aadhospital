$(document).ready(function () {

$('#box1').hover(function () {
$(this).animate({
width: '+=30px',
height: '+=30px',});
}, 
function () {
$(this).animate({
width: '-=30px',
height: '-=30px',});
});

   
$('#box2').click(function () {
$(this).animate({
opacity: 0.5,
height: 'toggle'}, 1000, 
function () {
$(this).animate({ opacity: 1, height: 'toggle' }, 1000);
});
});

   
$('#box3').dblclick(function () {
$(this).fadeOut(1500).fadeIn(1000);
});

   
$('#box4').click(function () {
$(this).animate({  
opacity: 0.5,
height: 'toggle'}, 1000, 
function () {
$(this).animate({ opacity: 1, height: 'toggle' }, 1000);
});
});

   
$('#toggleButton').click(function () {
$('.box').fadeToggle(1000);
});

    
$('#offerBox').click(function () {
$(this).html("25% discount to MPSTME students!");
$(this).css({
"background-color": "green",  
"line-height": "normal",  
"height": "auto",         
"padding": "20px"
});
});
});
