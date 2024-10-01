'use strict';

let menu=document.querySelectorAll('.menu_item');

menu.forEach(menu_item=>{
    let submenu=menu_item.querySelector('.submenu');
    let btn=menu_item.querySelector('.menu_b');


    menu_item.addEventListener('mouseenter',function(){
        submenu.classList.add('active');
        btn.classList.add('active');
        btn.style.color='#CBEA7B';
    })

    menu_item.addEventListener('mouseleave',function(){
        submenu.classList.remove('active');
        btn.classList.remove('active');
        btn.style.color='white';
      
    })

  

})


let sliderBody = document.querySelector('.slider__body');
let sliderNav = document.querySelector('.slider__nav');
let sliderItem = document.querySelector('.slider__item');
let sliderCom = Array.from(document.querySelectorAll('.slider__com'));
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

sliderNav.addEventListener('click', function(event){
    let targetDot = event.target.closest('.slider__dot');
    if(!targetDot) return;

    if(targetDot.classList.contains('active')) return;

    document.querySelector('.slider__dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider__com.active').classList.remove('active');

    sliderCom[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
})


let tab_one=document.querySelectorAll('.btn_one');
let inner_one=document.querySelectorAll('.inner_one');



tab_one.forEach((item,index)=>{
    item.addEventListener('click',function(){
        document.querySelector('.btn_one.active').classList.remove('active');
        item.classList.add('active');
       
        document.querySelector('.inner_one.active').classList.remove('active');
        inner_one[index].classList.add('active')

      




    })
}
)

document.querySelector('.ac').addEventListener('click',function(event){
    let target=event.target.closest('.asc_item');
    if(!target) return;

    target.classList.toggle('active');
    let p=target.querySelector('.n');
     


    let items = document.querySelectorAll('.asc_item');
    
    items.forEach(item => {
        if (item !== target) {
            item.classList.remove('active');
            item.classList.remove('btn');
            let p = item.querySelector('.n');
            if (p) p.style.height = '';
        }
    });

    if(target.classList.contains('active')){
        p.style.height=p.scrollHeight+'px';
        target.classList.add('btn');

    }else{
        p.style.height='';
    }

})



let num = document.querySelector(".num");
let fa = document.querySelector(".fa");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        num.classList.add("show");
      } else {
        num.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(fa);


function closeModal() {
    document.getElementById('modal').style.display = 'none';}

function Modal() {
    document.getElementById('modal').style.display = 'flex';


    document.getElementById('closeBtn').addEventListener('click', closeModal);


}


setTimeout(Modal, 3000);
