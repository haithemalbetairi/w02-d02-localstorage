$(document).ready(function (){
  console.log('JS WORKING!');

  // a place to store all of the saved colors
  var savedColors = [];

  // ---------------------------------------------------------------------------
  // Part 1 - retrieveColors
  //   this function will get any saved colors from local storage and call 
  //   renderSavedColors
  // ---------------------------------------------------------------------------
  function retrieveColors(){
    if(localStorage.getItem('savedColors')) {
      savedColors = JSON.parse(localStorage.getItem('savedColors'))
      renderSavedColors();
    }
  }


  // ---------------------------------------------------------------------------
  // Part 2 - API call
  //   this function will construct the url from the given hex and then make a 
  //   call to the color api. If it is successful, call parseData
  // ---------------------------------------------------------------------------
  // This function is already set up to run when the 'save' button is clicked.
  // it will pass the hex number of the color input as an argument
  function makeCall(hex) {
    $.ajax({
      method: 'GET',
      url: 'http://www.thecolorapi.com/id?hex=' + hex,
      success: parseData,
      error: function(reply) {
        console.log('error from colors api')
        console.log(reply)
      }
    })
  }


  // ---------------------------------------------------------------------------
  // Part 3 - Parsing Data
  //   this function will pick out the necessary properties from the returned 
  //   data, create an object, add it to the savedColors and save them to 
  //   localStorage
  // ---------------------------------------------------------------------------
  function parseData(data) {
    var color = {
      hex: data.hex.value,
      rgb: data.rgb.value,
      hsl: data.hsl.value,
      cmyk: data.cmyk.value
    }

    savedColors.push(color);
    localStorage.setItem('savedColors', JSON.stringify(savedColors))
    renderSavedColors();
  }


  // ---------------------------------------------------------------------------
  // Part 4 - Rendering Colors
  //   this function will loop through all of the savedColors and add them 
  //   to the DOM. Check the readme for specifics with elements and classes 
  //   for styling!
  // ---------------------------------------------------------------------------
  function renderSavedColors() {
    var $saved = $('#saved-colors').empty();
    
    savedColors.forEach(function(color) {
      var $container = $('<div>').addClass('color-container').appendTo($saved);
      var $swatch = $('<div>').addClass('color-swatch').css('background-color', color.hex).appendTo($container)
      var colorKeys = Object.keys(color)

      colorKeys.forEach(function(format) {
        $('<p>').text(color[format]).appendTo($container)
      })
    })

  }




  // ============================================================================
  // Nothing under this line needs to be touched!
  // Feel free to look through it though!

  // A function to init the app
  function init() {
    // set the value of the color input to a random color
    $('#color-input').val(randomColor());
    // add the button event listener
    buttonListener();
    retrieveColors();
  }

  // invoke the init function
  init();

  // function to add the click event listener to the save button
  function buttonListener() {
    $('#save-color').on('click', function (event) {
      // retrieve the value of the '#color-input'
      // use the 'substr' method to remove the '#' from the start of the string
      var hex = $('#color-input').val().substr(1, 6);
      // invoke the `makeCall` function with the resulting string as the argument
      makeCall(hex);
    })
  }

  // function to create a random hex color
  function randomColor() {
    // array of all the characters that can be in a hex color
    var hexValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    // create an array to push to while creating the hex color
    // it starts with a # as the first character
    var color = ['#'];

    // Hex colors are 6 characters long, so create a for loop that will
    // iterate 6 times
    for (var i = 0; i < 6; i++) {

      // get a random index from the hexValues array
      var randomIndex = Math.floor(Math.random() * hexValues.length);

      // get the character that corresponds to the the random index
      var randomChar = hexValues[randomIndex];

      // push it into the color array
      color.push(randomChar);
    }
    // return the string value of all of the character's in the color array joined
    return color.join('');
  }

 
})
