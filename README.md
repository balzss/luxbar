# Luxbar

Featherweight, Responsive, CSS Only Navigation bar

![Screencap](http://i.imgur.com/0eGzsNt.gif)

[Try out all the options at the demo page!](https://balzss.github.io/luxbar)

# Getting started

Get it with NPM:

```
npm install luxbar
```

Or with bower:

```
bower install luxbar
```

Or use the CDN:
```html
<link rel="stylesheet" href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css">
```

Then head over [to the demo page](https://balzss.github.io/luxbar) to generate your customized HTML code or use
the one below as a base and see the docs for options. (Demo page is highly
recommended for the newcomers)

```html
<div class="luxbar luxbar-static">
    <input type="checkbox" id="luxbar-checkbox" class="luxbar-checkbox">
    <div class="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                <a class="luxbar-brand" href="#">Brand</a>
                <label class="luxbar-hamburger luxbar-hamburger-doublespin"
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
        </ul>
    </div>
</div>
```

# Other
- If you have any questions maybe it's already answered in [the faq](https://github.com/balzss/luxbar/blob/master/docs/faq.md)
- If not then post your question to the issue page
- If you found a bug or have a feature request post it there as well
- You can message me directly at [balazs.saros@gmail.com](mailto:balazs.saros@gmail.com)
- Licensed under the MIT license
