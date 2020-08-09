const translate = document.querySelectorAll(".translate");
const scroll_id = document.querySelector("#scroll");
const header = document.querySelector("header");

let header_height = header.offsetHeight;
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    
    translate.forEach(element => {
        let speed = element.dataset.speed;

        element.style.transform = `translateY(${scroll * speed /-1.5}px)`;  
    })
    scroll_id.style.opacity = -scroll / (header_height / 2) + 1;
    
});