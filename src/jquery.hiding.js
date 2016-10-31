/*!
 * jQuery Hiding v 1.0.0
 * https://github.com/jaypackard/jquery.hiding
 *
 * Copyright 2014 Jay Packard
 * Released under the MIT license
 */
(function($) {
  $.fn.hiding = function() {
    var $container = $(this);

    $container.click(function(event) {
      if ($(event.target).is('input:checkbox'))
        perform($container);
    });  

    $container.keyup(function(event) {
      if ($(event.target).is('[class$="_hiding"]'))
        perform($container);
    });    

    return $container;
  };

  $.fn.trigger_hiding = function() {
    var $container = $(this);

    perform($container);

    return $container;
  }

  function perform($container) {
    $('[class*="_hideable"]', $container).hide();
    $('[class*="_hiding"]', $container).each(function() {
      var $this = $(this);
      if ( ($this.is('input:checkbox') && $this.is(':checked')) ||
          $this.find('input:checkbox:checked').length > 0 || 
          ($this.is('input:text') && $this.val()) || 
           $this.find('input:text').filter(function() { return $(this).val() != ""; }).length > 0 ||
           ($this.is('input:password') && $this.val()) || 
           $this.find('input:password').filter(function() { return $(this).val() != ""; }).length > 0 ) {
        $.each($this.attr('class').split(" "), function(i, cls) {
          if (cls.match('_hiding')) {
            var prefix = cls.substring(0, cls.length - 7);
            var $el = $('.' + prefix + '_hideable', $container);
            $el.show();      
          }
        });
      } 
    });
  }
})(jQuery);