const tabTitles=document.querySelectorAll(".tab-links");
const tabContents=document.querySelectorAll(".tab-contents");

tabTitles.forEach(tabTitle =>{
    tabTitle.addEventListener ('click', () =>{
    tabTitles.forEach(tabTitle =>tabTitle.classList.remove("active-link"));

    tabContents .forEach(tabContent =>tabContent.classList.remove("active-tab"));
     
    tabTitle.classList.add("active-link");

    const target = tabTitle.getAttribute('data-title');
    document.getElementById(target).classList.add('active-tab');
    })
});

const hamburger=document.querySelector("#hamburger-icon");
const navLinks=document.querySelector(".nav-items");
const closeIcon=document.querySelector("#close-icon");

hamburger.addEventListener("click", () => {
    hamburger.style.display="none" ;
    navLinks.style.right="0";
      
});

closeIcon.addEventListener('click', () => {
    navLinks.style.right="-200px";
    hamburger.style.display="block";

})

const roles= {
  en:["a web developper.", "multilingual.", " a teacher."],
  fr:["developeusse web", "traductrice", "professeur"]

};

const displayedRole=document.querySelector("#displayed-role");
const toggleBtn=document.querySelector("#toggle-lang");
const introText=document.querySelector("#intro-text");

let currentIndex=0;
let currentLanguage="en";

function showRole(){
  displayedRole.textContent=roles[currentLanguage]
  [currentIndex];

  if(currentIndex < roles[currentLanguage].length -1){
    currentIndex++;
  }else{
    currentIndex=0;
  }
}

setInterval(showRole,3000);





const scriptURL = 'https://script.google.com/macros/s/AKfycbweaBg7uO0UWKuxkFIkdCp4VM8mdswaidXwBBI_iKWoJxPknKK0UrRS2qTO_R8mQ4GZAQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const message=document.querySelector("#msg")
  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML='Message has been sent successfully'
        setTimeout(function (){
            message.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })