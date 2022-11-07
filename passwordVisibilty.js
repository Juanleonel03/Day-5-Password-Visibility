const button = document.getElementById('button');
const input = document.getElementById('input')
button.addEventListener('click', ()=>{
  button.classList.toggle('bi-eye-slash')
  button.classList.toggle('bi-eye')
  input.type = input.type === "password" ? "text" : "password"

})