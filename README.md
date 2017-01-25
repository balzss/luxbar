# Luxbar

Featherweight, Responsive, CSS Only Navigation bar

![Screencap](http://i.imgur.com/bJ6Ty8B.gif)

[try it out at the demo page](https://balzss.github.io/luxbar/demo)

# Getting started

Get it with bower:

```
bower install luxbar
```

Or use CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/luxbar/0.1.0/luxbar.min.css">
```

[Or download the source
directly](https://github.com/balzss/luxbar/archive/0.1.0.zip)

Then use the HTML code either from the [interactive demo page](https://balzss.github.io/luxbar/demo) or from below (the **bold** class names are cutomizable, and you have to replace them with one of the options listed in the customization section):

```html
<div class="luxbar luxbar-style-name">
    <input type="checkbox" id="luxbar-checkbox">
    <div class="luxbar-menu luxbar-menu-colorscheme">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                <a class="luxbar-brand" href="#">LUXBAR</a>
                <label class="luxbar-hamburger luxbar-hamburger-animation-style"
                        for="luxbar-checkbox"> <span></span> </label>
            </li>
            <li class="luxbar-item active"><a href="#">Home</a></li>
            <li class="luxbar-item"><a href="#">About</a></li>
            <li class="luxbar-item"><a href="#">Contact</a></li>
        </ul>
    </div>
</div>
```

## Customization:

### luxbar-style-name:

**luxbar-default**: stays on top, if you put it in a container, all padding rules will apply to it  
**luxbar-static**: stays on top, takes up the whole window width, and you can't apply padding to it  
**luxbar-fixed**: sticks to the top of the window and will be visible even if you scroll down  

### luxbar-menu-colorscheme:

**luxbar-menu-light**: light background color with dark font color  
**luxbar-menu-dark**: dark background color with light font color  
**luxbar-menu-transparent**: transparent background color with dark font color and underline for the active tab  
**luxbar-menu-material-red**: material red background color with light font color  
**luxbar-menu-material-indigo**: material indigo background color with light font color  
**luxbar-menu-material-cyan**: material cyan background color with light font color  
**luxbar-menu-material-green**: material green background color with light font color  
**luxbar-menu-material-amber**: material amber background color with light font color  
**luxbar-menu-material-brown**: material brown background color with light font color  
**luxbar-menu-material-bluegrey**: material bluegrey background color with light font color  

### luxbar-menu-animation-style:

**luxbar-hamburger-spin**: the top and bottom parts of the hamburger icon rotates 45 degrees to form an X  
**luxbar-hamburger-doublespin**: the top and bottom parts of the hamburger icon rotates 225 degrees to form an X  

# Other:

 - If you find any bug please report it
   [here](https://github.com/balzss/luxbar/issues)
 - For contribution guidelines, future plans and other information please check out the [FAQ](https://balzss.github.io/luxbar/faq)
