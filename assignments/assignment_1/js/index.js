$(document).ready(function(){
  // when you submit the form
  //  prevent default
  //  get the value of the #name input
  //  save it to local storage
  //  redirect to greet.html
  $('form').on('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('name', $('#name').val());
    window.location.href = 'greet.html';
  })
  
})