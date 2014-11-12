# Element Height Equalizer

Small bit of JS that takes an array of elements (using jQuery, please) and finds the tallest element, and then applies that height to all of the elements in that array. This can get heavy on the render so don't go too crazy ;)

### Usage

- **selector:** (required) A string for the selector (of the elements) you wish to modify. Examples below.
- **bottomPadding:** (optional) {number} Defaults to 0. Some extra fluff for the height if you have things pos: abs; at the bottom
- **onResize:** (optional) {boolean} Defaults to false. If you want to trigger a recalc on resize, please note: you will need ['smart resize'](http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/) for this
- **minWidth:** (optional) Optional argument for setting a minimum window width as a requirement for the function to execute.

Here's a really simple example of how you can use this in your project.
```js

var aNameForYourInstance = new HeightEqualizer({
  selector: '.hook-name-for-your-thing-to-watch', // This can be whatever class you want
  bottomPadding: 50, // translates to a pixel value
  onResize: true, // Make sure you have smartresize if this is true!
  minWidth: 480 // translates to a pixel value
});
```


### Disclaimer

Made this in 20 minutes for re-use across marketing sites. This may not be a good solution for you if you have a ton of elements / instances.

I also know there are CSS hacks for similar results. This was the best option for the site at hand.

---

The MIT License (MIT)

Copyright (c) 2014 Bill Columbia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
