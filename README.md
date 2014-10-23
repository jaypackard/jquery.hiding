Don't use a complicated fronted MVC for hiding and showing.  Just label HTML with *_hiding and *_hideable with this plugin.  

A checked box with a *_hiding class unhides the corresponding *_hideable elements.  A *_hiding non-empty text input unhides the corresponding *_hideable elements.  A *_hiding element with a checked child or non-empty text input also unhides the corresponding *_hideable elements.

Usage:
$('#container').hiding()
