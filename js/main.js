$(function(){
    
    
    
    //SCROLL TO SECTION  JQUERY----------------------------

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();
        nav.classList.toggle('nav_show');
        
        var elementId = $(this).data('scroll'),
            elementIdH = $(elementId).offset().top;
            
        $('html, body').animate({
            scrollTop: elementIdH + 1
        }, 400)
    })
    
    
    // HEADER FIXED and BTN_TO_TOP HIDDEN
    var header = document.querySelector('#header'),
        intro = document.querySelector('#intro'),
        inner = document.querySelector('#inner');
    
    var btn_to_Top = document.querySelector('#btn_to_Top');
    
    
    window.onscroll = checkHeaderPos
    window.onresize = checkHeaderPos
    window.onload = checkHeaderPos
    btn_to_Top.onclick = ScrollToTop
        
    function checkHeaderPos() {
        
        scrolled = window.pageYOffset;
        
        if (scrolled > intro.offsetHeight){
            header.style.position = 'fixed';
            header.style.background = 'rgba(0,0,0,0.8)';
            inner.style.margin = '0 auto';
            btn_to_Top.style.visibility = 'visible';
            
        }else if (scrolled < intro.offsetHeight){
            header.style.position = 'absolute';
            btn_to_Top.style.visibility = 'hidden';
        }
    }
    
    function ScrollToTop(){
        $('html, body').animate({
            scrollTop: 0
        }, 300)
    }
    
    
    //TIMER UNTIL TOURNAMENT-------------------------------------
    
    var out_time = document.querySelector('#out_time'),
        intro_data = document.querySelector('#intro_data').textContent,
        date_refactored = intro_data.slice(3, 5) + '.' + intro_data.slice(0, 2) + intro_data.slice(5),
        date_js = new Date(date_refactored),
        timer_tourn;
  
    timer_obr()

    function timer_obr() {
        var now = new Date(),
            dif = date_js.getTime() - now.getTime(),
            day = Math.floor(dif / 24 / 60 / 60 / 1000 % 31),
            hour = Math.floor(dif / 60 / 60 / 1000 % 24),
            min = Math.floor(dif / 60 / 1000 % 60),
            sec = Math.floor(dif / 1000 % 60);


        out_time.innerHTML = day + 'дн:' + hour + 'ч:' + min + 'м:' + sec + 'с';



        if (dif <= 0) {
            out_time.innerHTML = 'Время истекло';
            clearTimeout(timer_tourn)
        } else if (dif > 0) {
            timer_tourn = setTimeout(timer_obr, 1000)
        }
    }
    
    
    //BURGER (NAV - hidden / visible)-----------------------------

    var burger = document.querySelector('#burger'),
        nav = document.querySelector('#nav');

    burger.onclick = function (event) {
        event.preventDefault()

        nav.classList.toggle('nav_show');
    }
    
    
    
});