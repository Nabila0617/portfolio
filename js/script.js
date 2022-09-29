
var typed = new Typed(".typing",{
  strings: ["Web Developer"],
  typeSpeed: 80,
  backSpeed: 80,
});

//==== nav menu open-close
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex"; //flex vabe ashbe

    closeBtn.style.display = "inline-block"; //close menu show korbe

    menuBtn.style.display = "none"; //open menu chole jabe
})

const closeNav = () => {
   menu.style.display = "none"; //chole jabe

   menuBtn.style.display = "inline-block"; //open menu show korbe

   closeBtn.style.display = "none"; //close menu chole jabe
}
closeBtn.addEventListener('click', closeNav);
