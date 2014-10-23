Don't use a complicated fronted MVC for hiding and showing.  Just label HTML with *_hiding and *_hideable with this plugin.  A checked box unhides the corresponding item.  A non-empty text input unhides the corresponding *_hideable elements.  An element with a checked child or non-empty text input also unhides the corresponding *_hideable elements.

Usage:
$('#container').hiding()
