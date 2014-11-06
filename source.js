/**
 * Element Height Equalizer
 *
 * @author:
 * Bill Columbia - hello@billcolumbia.com
 *
 * @description:
 * Small bit of JS that takes an array of elements (using jQuery, please)
 * and finds the tallest element, and then applies that height to all of the elements
 * in that array. This can get heavy on the render so don't go too crazy ;)
 *
 * @param: {string} selector:
 * Usually the class you want to use as a hook for an array of
 * elements. Something like '.eq-hook-thing-name'
 *
 * @param: {number} bottomPadding:
 * Optional bit of 'padding' for the bottom of the element.
 *
 * @param: {boolean} onResize:
 * Optional argument for enabling resize event listeners with
 * smartresize. Read more here: http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
 * Heads up - I will not use the standard resize event in this bit of JS
 *
 * @param: {number} minWidth:
 * Optional argument for setting a minimum window width as a requirement for the
 * function to execute. Helps when the things you are resizing are stacked on smaller
 * viewports rather than side by side.
 */

function HeightEqualizer( options ) {

  this.maxHeight        = 0;
  this.$elementsToWatch = $(options.selector);
  this.bottomPadding    = options.bottomPadding || 0;
  this.onResize         = options.onResize      || false;
  this.minWidth         = options.minWidth      || 0;
  this.$document        = $(document);

  this.onThisPage() && this.largerThanMinViewport() && this.init();
  this.onThisPage() && this.onResize && this.watchForResize();
}

HeightEqualizer.prototype.onThisPage = function() {
  // Return whether or not the given hook is in the DOM
  if ( this.$elementsToWatch.length ) {
    return true;
  };
  return false;
}

HeightEqualizer.prototype.largerThanMinViewport = function() {
  // Return whether or not the given hook is in the DOM
  if ( window.innerWidth >= this.minWidth ) {
    return true;
  } else {
    return false;
  };
}

HeightEqualizer.prototype.setAutoHeight = function() {
  // Resets height to auto
  this.$elementsToWatch.css('height', 'auto');
}

HeightEqualizer.prototype.findMaxHeight = function() {
  // Reset height to auto to avoid compound calc errors on next run
  this.setAutoHeight();

  // Iterate over elements and compare / set maxHeight
  $.each( this.$elementsToWatch,
    // Proxy may not be needed, but my JS n00bishness can't think of a better
    // way to handle this at the moment.
    $.proxy( function(i,targetEl) {
      if ( $(targetEl).outerHeight() > this.maxHeight ) {
        // Set new height record ( plus optional extra padding )
        this.maxHeight = $(targetEl).outerHeight() + this.bottomPadding;
      }
    }, this)
  );
}

HeightEqualizer.prototype.setNewHeight = function() {
  // Set new standard height across array of elements
  this.$elementsToWatch.css( 'height', this.maxHeight );
  // Reset max height avoid compound calc errors on next run
  this.maxHeight = 0;
}

HeightEqualizer.prototype.init = function() {
  // Methods to run on initialization
  this.findMaxHeight();
  this.setNewHeight();
}

HeightEqualizer.prototype.watchForResize = function() {
  // Proxy may not be needed, but my JS n00bishness can't think of a better
  // way to handle this at the moment.
  // HEADS UP: I will not use the standard resize event in this bit of JS,
  // you are however, more than welcome to fork this and use it at your own risk.
  $(window).smartresize( $.proxy(function(){
    if ( this.largerThanMinViewport() ) {
      // Re-init if minWidth is met
      this.init();
    } else {
      this.setAutoHeight();
    };
  }, this) );
}
