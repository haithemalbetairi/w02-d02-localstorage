$(document).ready(function(){
  // keep track of the list items
  var listItems = [];
  
  // function to render all list items
  function renderItems() {
    // if there is a value in localStorage under listItems
    //   set listItems to the value
    //   loop through them and add them to the #list 
    if(localStorage.getItem('listItems')) {
      listItems = JSON.parse(localStorage.getItem('listItems'));

      listItems.forEach(function (item) {
        $('<li>').text(item).appendTo($('#list'));
      })
    }
  }

  renderItems();

  // When you submit the form
  //   prevent default
  
  $('form').on('submit', function(event){
    event.preventDefault();
    // get the value of the #listInput 
    // push it to the listItems 
    // save the key listItems to the stringified version of the listItems array
    // add the item to the #list
    if($('#listInput').val() !== '') {
      var value = $('#listInput').val();
      listItems.push(value);
      $('#listInput').val('');
      $('<li>').text(value).appendTo('#list');
    }
    
    localStorage.setItem('listItems', JSON.stringify(listItems));
  })
})