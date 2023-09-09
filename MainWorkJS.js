function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
function stickyMenu(){
    var con_1 = document.getElementById('con-1');
    var con_2 = document.getElementById('con-2');
    var sticky = document.getElementById('sticky');
    var meta = document.getElementById('meta');
    var spin = document.getElementById('spin');
    var zoom = document.getElementById('zoom');
    if(window.pageYOffset > 150){
        if(chk1){
            zoom.classList.add('zoom-ing');
            setTimeout(function(){zoom.remove();}, 500);
            chk1 = false;
        }
        sticky.classList.add('opacitymax');
        spin.classList.add('neon-light');
        setTimeout(function(){spin.classList.add('spin-fade');}, 1000); 
        setTimeout(function(){meta.classList.add('opacitymax2');}, 1100); 
    }
    var bg = document.getElementById('fck-bg');
    if(window.innerHeight > con_1.getBoundingClientRect().top){ 
        bg.classList.add('fck-bg2');
    }
    else{
        bg.classList.remove('fck-bg2');
    }
    if(window.innerHeight > con_2.getBoundingClientRect().top){ 
        bg.classList.add('fck-bg3');
    }
    else{
        bg.classList.remove('fck-bg3');
    }
}
function ani_obj() {
    var left = document.querySelectorAll(".ani-left");
    var right = document.querySelectorAll(".ani-right");
    for (var i = 0; i < left.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = left[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight) {
            left[i].classList.add("active");
            right[i].classList.add("active");
        } else {
            left[i].classList.remove("active");
            right[i].classList.remove("active");
        }
    }
}
var chk1 = true;
var open = true;
function pro_open(){
    var pro = document.getElementById('profile-panel');
    var pro_bottom = document.getElementById('profile-bottom');
    var arrow = document.getElementById('arrow-spin');
    var p1 = pro_bottom.getBoundingClientRect().top;
    var p2 = pro_bottom.getBoundingClientRect().bottom;
    var p3 = p1-p2;
    if(open){
        document.getElementById('profile-panel').style.transform = 'translateY(' + p3 + 'px)';
        arrow.classList.add('down');
        open = false;
    }
    else{
        document.getElementById('profile-panel').style.transform = 'translateY('+0+'px)';
        arrow.classList.remove('down');
        open = true;
    }
}
if(window.innerWidth < 540){
    var miss = document.getElementById('miss');
    
    miss.remove();
}
function ro_spin(){
    var ro = document.getElementById('ro-spin');
    var windowHeight = window.innerHeight;
    var elementTop = ro.getBoundingClientRect().top;
    var elementBottom = ro.getBoundingClientRect().bottom;
    var elementVisible = 200;
    var dist = 800;
    if(elementTop < windowHeight - elementVisible){
        ro.classList.add('up');
        if(windowHeight > elementBottom + dist){
            ro.classList.add('down');
        }
        else{
            ro.classList.remove('down');
        }
    }
    else{
        ro.classList.remove('up');
    }
}
function procal(){
    var h1 = document.getElementById('lastpage');
    var h2 = document.getElementById('profile-button');
    var k1 = h1.getBoundingClientRect().top;
    var k2 = h2.getBoundingClientRect().bottom;
    var k3 = k2 - k1 + 50;
    document.getElementById('lastpage').style.height= k3 + 'px';
}
window.onscroll = function(){
    stickyMenu();
    reveal();
    ani_obj();
    ro_spin();
    procal();
}

