// Show Hidden Menu selector
const selectElement = el => document.querySelector(el);
const selectAllElement = el => document.querySelectorAll(el);

// Select one Element
const navMenu = selectElement('.nav_menu');
const navClose = selectElement('#close');
const navToggle = selectElement('#nav_toggle');



// Select multiple Elements
const navLink = selectAllElement('.nav_link');
const para = selectAllElement('.info .par');


// Show Menu using if statement
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
        navToggle.style.display = 'none';
        navMenu.style.display = 'block';
    });
} 

// Hide Menu with close icon
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.style.display = 'none';
        navToggle.style.display = 'block';
    })
}

// Remove mobile menu when any icon is clicked
Array.from(navLink).forEach(nav => nav.addEventListener('click', removeMenu)); 

function removeMenu() {
    console.log('check');
    navMenu.classList.remove('show_menu');
    navToggle.style.display = 'block';
}

// Read More
Array.from(para).forEach(par => {
    const infoBtn = document.getElementById('btn');
    let p = par.innerText;

    par.innerText = p.substring(0, 200) + '...';

    // If Readmore btn is clicked, show all text vice versa
    infoBtn.addEventListener('click', () => {
        if (infoBtn.innerText === 'Read More') {
            par.innerText = p;
            infoBtn.innerText = 'Showless';
        } else {
            par.innerText = p.substring(0, 200) + '...';
            infoBtn.innerText = 'Read More';
        }
    })

})


// Arrow Skill
let arrow = document.getElementsByClassName("uil-angle-down");
let skillList = document.getElementsByClassName("skills__list");


Array.from(arrow).forEach(function (arr) {
   arr.addEventListener('click', function () {
      for (let i = 0; i < skillList.length; i++) {
        skillList[i].classList.toggle  
      }
   })
})