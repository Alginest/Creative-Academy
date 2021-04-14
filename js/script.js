//Selectors
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');





//Event listeners
toggle.addEventListener('click', () => {
   toggle.classList.toggle('active');
   navigation.classList.toggle('active');
})


