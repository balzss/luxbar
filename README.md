# Luxbar

Featherweight, Responsive, CSS Only Navigation bar

![Screencap](http://i.imgur.com/bJ6Ty8B.gif)

[Try it out at the demo page](https://balzss.github.io/luxbar/demo)

# Getting started

Get it with bower:

```
bower install luxbar
```

Or use CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/luxbar/0.1.2/luxbar.css">
```

[Or download the source
directly](https://github.com/balzss/luxbar/archive/0.1.2.zip)

Then use the HTML code either from the [interactive demo page](https://balzss.github.io/luxbar/demo) or from below (the CLASS-NAMES-IN-CAPS are customizable, and you have to replace them with one of the options listed in the customization section):

```html
<div class="luxbar LUXBAR-STYLE-NAME">
    <input type="checkbox" id="luxbar-checkbox">
    <div class="luxbar-menu LUXBAR-MENU-COLORSCHEME">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                <a class="luxbar-brand" href="#">Brand</a>
                <label class="luxbar-hamburger LUXBAR-ANIMATION-STYLE"
                        for="luxbar-checkbox"> <span></span> </label>
            </li>
            <li class="luxbar-item active"><a href="#">Home</a></li>
            <li class="luxbar-item dropdown"><a href="#">Users</a>
                <ul>
                    <li class="luxbar-item" ><a href="#">Max</a></li>
                    <li class="luxbar-item" ><a href="#">Edgar</a></li>
                    <li class="luxbar-item" ><a href="#">John</a></li>
                </ul>
            </li>
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

# FAQ

### Who is this intended for?

For everyone who wants a responsive navigation bar that looks good on every screensize, lightweight and easy to implement.

### Why should I use this instead of existing solutions (e.g. Bootstrap's navbar)?

Existing "premade" navbars are usually packed with a full blown CSS framework and rely heavily on JS. If you are already using Bootstrap for your site maybe it's not worth it but I would still recommend giving it a try for the fancy colors and animations.

### How light it is actually?

The original CSS file is about 9KB, the minified is about 7KB and the minified version gzipped is about only 1KB.

### What are the future plans/TODO?

- Add more themes and animations
- Add options to use the hamburger menu on every screensize
- Add alignment options
- Add dropdown menus
- Add support for opening sideways

### How can I contribute to this project?

Pick a bug from [here](https://github.com/balzss/luxbar/issues) or a feature from the TODO list above and let me know that you want to work on that at [balazs.saros@gmail.com](mailto:balazs.saros@gmail.com)

### I found a bug, what should I do?

Please report it [here](https://github.com/balzss/luxbar/issues).

### Can I use it in a closed source project?

It is licensed under the MIT license, you can use it anywhere you want.

### Have these questions really been asked frequently?

No, I just found this format a good way to give general information :)
