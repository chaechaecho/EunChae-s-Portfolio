
const headerE1 = document.querySelector('header')

window.addEventListener('scroll', function(){
    this.requestAnimationFrame(sc)
})

function sc(){
    let bs = window.scrollY
    if(bs > 0){
        headerE1.classList.add('on')
    }else{
        headerE1.classList.remove('on')
    }
}

const animationmove =  function(selector){
    const targetE1 = document.querySelector(selector)
    const bs = window.scrollY
    const targetscrollY = targetE1.getBoundingClientRect().top + bs
    window.scrollTo({
        top : targetscrollY, behavior : 'smooth'
    })
}
const scrollmove = document.querySelectorAll('[data-animation-scroll="true"]')

for(let i = 0; i < scrollmove.length; i++){
    scrollmove[i].addEventListener('click', function(){
    const target = this.dataset.target;
    animationmove(target)
    })
}
    const items = document.querySelectorAll('.portfolio-me li');
    const popup = document.querySelector('.popup');
    const close = document.querySelector('button');

    items.forEach((el, index) => {
        el.addEventListener('mouseenter', function(){
            el.querySelector('video').play();
        });
        el.addEventListener('mouseleave', function(){
            el.querySelector('video').pause();
            el.querySelector('video').currentTime = 0;
        });
        el.addEventListener('click', function(){
            let title = el.querySelector('h3').innerText;
            let text = el.querySelector('p').innerText;
            let videosrc = el.querySelector('video').getAttribute('src');

            popup.querySelector('.txt h2').innerText = title;
            popup.querySelector('.txt p').innerText = text;
            popup.querySelector('video').setAttribute('src', videosrc);
            popup.classList.add('on');
            popup.querySelector('video').play();
        });
    });

    close.addEventListener('click', function(){
        popup.classList.remove('on');
        popup.querySelector('video').pause();
    });

$(function () {

    $(window).scroll(function () {
   
      if ($(window).scrollTop() >= 200) {
        $(".gotop").fadeIn();
      } else {
        $(".gotop").fadeOut();
      }
    });
  
    $(".gotop").click(function (e) {
      e.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
  });
