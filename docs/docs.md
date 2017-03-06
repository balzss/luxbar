# User documentation
This is a documentation on the usage of the Luxbar library. If you can't find something you can ask about it [here](https://github.com/balzss/luxbar/issues).

## Table of content
- Getting started / Setup information
- Adding menu items
- Dropdown menu
- Style options
- Leave out the brand
- Alignement options
- Hamburger animation

## Getting started / Setup information
There are 4 ways to get Luxbar (preferred methods are either NPM or Bower):

#### NPM:
```
npm install luxbar
```
#### Bower:
```
bower install luxbar
```
#### CDN (using this in production is discouraged):
```
<link rel="stylesheet" href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css">
```
#### Source:
Download it from the [release page](https://github.com/balzss/luxbar/releases) .  
This includes everything from the repo even the demo page so for normal usage NPM or Bower is the recommended method.

After choosing one of the above mentioned method paste this "base" module into your project:
```html
<div class="luxbar <name-of-style>">
    <input type="checkbox" id="luxbar-checkbox" class="luxbar-checkbox">
    <div class="luxbar-menu <menu-alignement> luxbar-menu-dark">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                <a class="luxbar-brand" href="#">Brand</a>
                <label class="luxbar-hamburger <hamburger-animation>"
                        for="luxbar-checkbox"> <span></span> </label>
            </li>
            <li class="luxbar-item active"><a href="#">Menu Item 1</a></li>
            <li class="luxbar-item"><a href="#">Menu Item 2</a></li>
            <li class="luxbar-item"><a href="#">Menu Item 3</a></li>
        </ul>
    </div>
</div>
```

## Adding menu items
The base module includes three menu items. You can have more by adding `<li class="luxbar-item"><a href="#">Menu item name</a></li>` to the luxbar-navigation list. Adding the classname `active` to the luxbar-item will make it visually selected. You can have multiple selected items.

## Dropdown menu
Adding dropdown menus to your navbar is similar to adding normal items but instead you should use a nested element like this:
```html
<li class="luxbar-item dropdown"><a href="#">Dropdown Menu</a>
    <ul>
        <li class="luxbar-item" ><a href="#">Dropdown Item 1</a></li>
        <li class="luxbar-item" ><a href="#">Dropdown Item 2</a></li>
        <li class="luxbar-item" ><a href="#">Dropdown Item 3</a></li>
    </ul>
</li>
```

## Style options
At the moment there are 4 available style options: `luxbar-default`, `luxbar-static`, `luxbar-fixed`, `luxbar-fixed-bottom`. To set this you have to change the class name in the base module from `<name-of-style>` to one of the listed options.

#### luxbar-default
This style will adopt the padding and margin options you apply to it's parent container and will look something like this:

![luxbar-default](http://i.imgur.com/y7N0sHt.png)

#### luxbar-static
This style will stay at to top of the page and will take up 100% of your page's width and will look something like this:

![luxbar-static](http://i.imgur.com/XrPVZZZ.png)

#### luxbar-fixed
This style will be always at the top of your screen even when you scroll down and will look something like this:

![luxbar-fixed](http://i.imgur.com/h6DBQsI.png)

#### luxbar-fixed-bottom
This style will be always at the bottom of your screen even when you scroll down and will look something like this:

![luxbar-fixed-bottom](http://i.imgur.com/WBmoRS1.png)

## Leave out the brand
If you want to leave out the brand from your navbar simply delete the `<a class="luxbar-brand" href="#">Brand</a>` part from your base module.

## Alignement options
At the moment there are 2 available alignement options: `luxbar-menu-left`, `luxbar-menu-right`. To set this you have to change the class name in the base module from `<menu-alignement>` to one of the listed options.

#### luxbar-menu-left
This will align the menu items at the very left of the navbar and will look something like this:

![luxbar-menu-left](http://i.imgur.com/UXjXsL0.png)

#### luxbar-menu-right
This will align the menu items at the very right of the navbar and will look something like this:

![luxbar-menu-left](http://i.imgur.com/XrPVZZZ.png)

## Hamburger animation
In mobile view (under 786px) there is an animated hamburger icon which transforms into an 'X' when you click it. There are 2 different animations for this: `luxbar-hamburger-spin`, `luxbar-hamburger-doublespin`. To set this you have to change the class name in the base module from `<hamburger-animation>` to one of the listed options.

#### luxbar-hamburger-spin
Please note that the blue highlight is only there because I recorded it in chrome's mobile view and it won't be there in an actual phone.

![luxbar-hamburger-spin](http://i.imgur.com/jjjowwe.gif)

#### luxbar-hamburger-doublespin
Please note that the blue highlight is only there because I recorded it in chrome's mobile view and it won't be there in an actual phone.

![luxbar-hamburger-doublespin](http://i.imgur.com/4VjRVhf.gif)
