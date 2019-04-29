# Color Factory

![](https://media.giphy.com/media/q9mHLtnHONt4s/giphy.gif)

Time for some Ajax practice! Today we are going to create an application that lets you choose and save colors complete with their [hex _(hexadecimal)_](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet), [rgb _(red, green, blue)_](https://en.wikipedia.org/wiki/RGB_color_model), [hsl _(hue, saturation, lightness)_](https://en.wikipedia.org/wiki/HSL_and_HSV), and [cmyk _(cyan, magenta, yellow, key)_](https://en.wikipedia.org/wiki/CMYK_color_model) values!

We will be using [The Color API](http://www.thecolorapi.com/) to retrieve the different color conversions. And localStorage to save our colors!

## Setup

The HTML, CSS and part of the JavaScript has been provided for you. Fork and clone this repo and work in the `script.js` file to complete the app.

---

## Lab

### Part 1 - Retrieving the saved colors

Fill in the retrieveColors() function

1. Check local storage for a key of 'colors'
2. If it exists, set the savedColors variable to the JSON parsed value then call renderSavedColors with no arguements

### Part 2 - Making the Call

Complete the `makeCall()` function

***Note:***
>This function is already set up to run when the 'save' button is clicked. It will pass the hex number of the color input as an argument

1. Go to [The Color API](http://www.thecolorapi.com/) and read how to use the api
2. Read how to make a url that will return a JSON of color information using given a hex value.
3. Test the url! Here are some hex values you can use to test it:
    - 71C1D2   
    - 783BD2   
    - A0D223

4. In your `script.js` construct the url using the hex parameter and assign it to a variable.
5. Preform a GET Ajax call to the url you constructed
6. If the call is successful, invoke `parseData` using the response data as the argument

### Part 3 - Parsing the Data

1. Construct an object from the data parameter
    - This object should contain the hex value, RGB value, HSL value and CMYK value of the color. Here is an example:
    ```js
    const exampleColor = {
        hex: '#71C1D2',
        rgb: 'rgb(113, 193, 210)',
        hsl: 'hsl(191, 52%, 63%)',
        cmyk: 'cmyk(46, 8, 0, 18)'
    }
    ```
    ***Hint:***
    >`console.log` the data object to figure out where to find these values!

2. Push the object you created into the `savedColors` array.
3. Invoke `renderSavedColors` with no arguments.

### Part 4 - Rendering the Colors

1. Create a forEach loop that iterates through each of the `savedColors`
2. Inside of that loop:
    1. Create a `div` to hold all of the saved color's information. Give it a class of `color-container` and append it to `$saved`.
    2. Create a `div` that will show a preview of the color. Give it a class of `color-swatch`. Give it a background-color of the color's hex value and append it to the color container you just made.
    3. Create a `p` tag for the hex value of the color. Give it a text of the hex value and append it to the color container.
    4. Create a `p` tag for the RGB value of the color. Give it a text of the RGB value and append it to the color container.
    5. Create a `p` tag for the HSL value of the color. Give it a text of the HSL value and append it to the color container.
    6. Create a `p` tag for the CMYK value of the color. Give it a text of the CMYK value and append it to the color container.


