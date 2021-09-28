const slides = document.querySelectorAll('.slide');
const bodyBg = document.querySelector('body');

const clearClass = ()=>{
    for(let slide of slides){
        slide.classList.remove('active');
    }
}

slides.forEach((slide)=>{
    slide.addEventListener('click',(e)=>{
        let bgUrl=e.target.getAttribute('style');
        bodyBg.style=`${bgUrl}`;
        clearClass();
        slide.classList.add('active');
    })
})

