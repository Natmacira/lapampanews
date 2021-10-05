
document.addEventListener('DOMContentLoaded', function () {


  const paragraphDescription = document.querySelectorAll('.descripcion')

  const button = document.querySelector('#styleButton')

  button.addEventListener('click', function () {

    document.body.main.paragraphDescription.classList.toggle('descripcion-none');
  });






});