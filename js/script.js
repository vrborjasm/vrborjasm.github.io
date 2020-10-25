const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".navbar .menu-btn");
const menuBtnIcon = document.querySelector(".navbar .menu-btn i");
const menu = document.querySelector(".navbar .menu");
const scrollUpBtn = document.querySelector(".scroll-up-btn");
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const linkList = document.querySelectorAll(".menu li");
const section = document.querySelectorAll("section");
const segment = document.querySelectorAll(".item");

const textArray = ["an Engineer","a Gamer","a Programmer","a Front-end Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")){
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    if(textArrayIndex < textArray.length-1) {
      setTimeout(erase, newTextDelay);
    }
  }
}

function erase() {
  if(charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")){
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    setTimeout(type, typingDelay + 1100); 
  }
}

window.addEventListener("load", function() {
  setTimeout(type, newTextDelay + 250) ;
})

menuBtn.addEventListener("click", function(){
  menu.classList.toggle("active");
  menuBtnIcon.classList.toggle("active");
})

window.addEventListener("scroll", function(){
  if(window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if(window.scrollY > 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

window.addEventListener("scroll", function(){

  if(window.scrollY == 0) {
    linkList[1].classList.remove('active');
    linkList[2].classList.remove('active');
    linkList[3].classList.remove('active');
    linkList[4].classList.remove('active');
    linkList[0].classList.remove('active');
  }

  if(window.scrollY > section[0].offsetTop) {
    linkList[1].classList.remove('active');
    linkList[2].classList.remove('active');
    linkList[3].classList.remove('active');
    linkList[4].classList.remove('active');
    linkList[0].classList.add('active');
  } 
  
  if(window.scrollY > section[1].offsetTop - 72) {
    linkList[0].classList.remove('active');
    linkList[2].classList.remove('active');
    linkList[3].classList.remove('active');
    linkList[4].classList.remove('active');
    linkList[1].classList.add('active');
  }

  if(window.scrollY > section[2].offsetTop - 72) {
    linkList[0].classList.remove('active');
    linkList[1].classList.remove('active');
    linkList[3].classList.remove('active');
    linkList[4].classList.remove('active');
    linkList[2].classList.add('active');
  }

  if(window.scrollY > section[3].offsetTop - 72) {
    linkList[0].classList.remove('active');
    linkList[1].classList.remove('active');
    linkList[2].classList.remove('active');
    linkList[4].classList.remove('active');
    linkList[3].classList.add('active');
  }

  if(window.scrollY > section[4].offsetTop - 72) {
    linkList[0].classList.remove('active');
    linkList[1].classList.remove('active');
    linkList[2].classList.remove('active');
    linkList[3].classList.remove('active');
    linkList[4].classList.add('active');
  }
});

scrollUpBtn.addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

linkList.forEach(link => {
  link.addEventListener("click", function(){
    menu.classList.remove("active");
    menuBtnIcon.classList.remove("active");
  })
});

function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if (entry.intersectionRatio != 0) { 
    segment[0].classList.add("complete")
    segment[1].classList.add("complete")
    segment[2].classList.add("complete")
    segment[3].classList.add("complete")
    segment[4].classList.add("complete")
    segment[6].classList.add("complete")
    segment[7].classList.add("complete")
    segment[9].classList.add("complete")
    segment[10].classList.add("complete")
    segment[12].classList.add("complete")
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.querySelector('#skills'));