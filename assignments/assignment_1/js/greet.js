$(document).ready(function(){
  // When the page loads
  //   Check if there is a name in localStorage
  //     if there is, set #name text to the name
  //     if not, redirect to index.html
  if(localStorage.getItem('name')) {
    $('#name').text(localStorage.getItem('name'));
  } else {
    window.location.href = 'index.html';
  }
  
  
  // when #logout is clicked
  //   remove the name from localStorage
  //   redirect to index.html
  $('#logout').click(function () {
    localStorage.removeItem('name');
    window.location.href = 'index.html';
  })
  
})