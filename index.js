const yesBtn = document.querySelector('.yesbtn')
const noBtn = document.querySelector('.nobtn')
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('show');
});

yesBtn.addEventListener('click',()=>{
  alert("YESSSS")
})

noBtn.addEventListener('click',()=>{
  alert("NO")
})

