$('.slider_info').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$('.sliderInfo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

var modal=document.getElementById("Modal_map");
var btn=document.getElementById("Btn_map");
var span=document.getElementsByClassName("close_modal_map")[0];

btn.onclick=function(){
    modal.style.display="block";
}
span.onclick=function(){
    modal.style.display="none";
}
window.onclick=function(e){
    if(e.target==modal){
        modal.style.display="none";
    }
}