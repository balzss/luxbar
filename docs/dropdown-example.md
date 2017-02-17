## Example usage of the dropdown menu:
More info on customization can be found in the [demo
page](https://balzss.github.io/luxbar)

```html
<div class="luxbar LUXBAR-STYLE-NAME">
    <input type="checkbox" id="luxbar-checkbox" class="luxbar-checkbox">
    <div class="luxbar-menu-right luxbar-menu-dark">
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
