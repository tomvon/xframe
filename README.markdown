#XFrame (BETA)#

##A responsive front end framework for data rich web applications.##

![XFrame Front End Framework Screenshot](/img/xframe-screen.png?raw=true "XFrame Front End Framework Screenshot")

XFrame is currently in development and there may be still some significant changes, however it is mostly stable in test and I'm using it on projects now. If you wish to use it please be aware of any updates. Please star and/or watch this repo for updates. I would love to hear feedback if you have comments or recommendations.

XFrame is CSS and Javascript geared specifically for data rich web applications. The three main goals for XFrame are: 

- Create a visually pleasing and readable foundation for semantic HTML markup. 
- Provide elegant handling of large data sets by default.
- Ensure that applications render appropriately across various screen sizes.

****

###Features###

- Supports semantic HTML.
-  Built in responsive navigation based on an standard unordered list (UL). Supports sub navigations items (nested ULs).
-  Responsive 12 column grid system with breakpoints for small, medium and large screens.
-  Auto leveling of column heights for layout consistency.
-  Automatic full screen overlays for wide tables.
-  Clean, readable, visual formatting of pages and all markup including forms and form elements.
- Easily customizable with CSS.
- Built with SASS and JQuery.

****

###Usage###

Simply link to XFrame's **xframe.css** and **xframe.js** files from your web page.

****

###Documentation###

XFrame comes with a sample PHP site to preview a working example. Just view the index.php file in a PHP enabled location.

###Head###

Include the meta viewport tag to ensure pages render appropriately on all screen size. Include a link to XFrame's style.css file.

```html
<head>
    <title>XFrame</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="css" href="/css/xframe.css">
</head>
```

###Overlays###

Include the xover div to enable full screen overlays.

```html
<div class="xover">
    <a href="#" class="close">X</a>
    <div class="xdata"></div>
</div>
```

###Action Menu###

Include the xactions div to enable the Action Menu. The Action Menu will style a standard unordered list but the contents of the xdata div can be whatever is appropriate for that page's specific menu.

```html
<div class="xactions">
    <a href="#" class="open">&#10095;</a> <div class="title">Actions</div>
    <a href="#" class="close">X</a>
    <div class="xdata">
        <ul>
            <li>Save Preferences</li>
            <li>Tabulate Sum</li>
            <li>Delete</li>
            <li>Send an Alert</li>
            <li>Change Status</li>
        </ul>
    </div>
</div>
```

###Header and Navigation###

These are optional. You can include just the xheader by itself if you wish. The layout will adjust if there's no navigation present. If you include the navigation you must include but the xmenu and xnav divs. The xnav div must contain an unordered list with the xnav id. Nested ULs will be treated as sub-menu items.

```html
<div class="xheader">
    <h1>
        <img src="/img/xframe-logo.png" alt="XFrame" class="xlogo">
        <a href="/">XFrame</a>
    </h1>
</div>

<div id="xmenu">
    <a href="#">&#9776; Menu</a>
</div>
<div class="xnav">
    <ul id="xnav">
        <li><a href="/">Home</a></li>
        <li><a href="/">Network Performance</a></li>
        <li class="subnav"><a href="/">All Systems</a>
            <ul>
                <li><a href="/">System 1</a></li>
                <li><a href="/">System 2</a></li>
            </ul>
        </li>
        <li><a href="/">Reporting</a></li>
        <li><a href="/">Documentation</a>
            <ul>
                <li><a href="/">Networks</a></li>
                <li><a href="/">Systems</a></li>
            </ul>
        </li>
        <li><a href="/">Contact</a></li>
    </ul>
</div>
```

###Content###

The page's main content are must be contained in an xcontent div.

```html
<div class="xcontent">
    <!-- Main Content -->
</div>
```

###Groups and Posts###

Post are individual boxes of content contained within an xpost classed div. All groups of Posts must be contained within an xgroup div. An xgroup can contain one post or all posts on a page. It allows for better grouping of content as needed.

```html
<div class="xgroup">
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
</div>
```

###12 Column Grid System###

XFrame has breakpoints for small, medium and large screens. To establish a layout for each case you use the xlg- and xmed- classes for posts. If neither class is set the post will be the full with of the enclosing div. You specify the number of columns a post should take up by appending a number to the classes like xlg-6 for 6 columns on large screens.

In the example below there will be a row of 4 boxes on large screens (3 columns + 3 columns + 3 columns + 3 columns = 12 columns) and a row of 2 boxes on medium screens (6 columns + 6 columns = 12 columns). The heights of all posts in the same row will be equalized, based on the tallest content, automatically.

*Big thanks to [Zurb's Foundation Framework](http://foundation.zurb.com/ "Zurb's Foundation Framework") for the inspiration behind the 12 column grid format. I recommend taking a look at Foundation if you have not yet and are interested in front end frameworks.*

```html
<div class="xgroup">
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="xpost xlg-3 xmed-6">
        <p>Lorem Ipsum</p>
    </div>
</div>
```

###Forms###

Form content should use fieldset and label tags to ensure appropriate formatting.

```html
<form method="post" action="/">
    <fieldset>
        <label for="name">Name</label>
        <input type="text" name="name">
    </fieldset>
    <fieldset>
        <input type="submit" value="submit">
    </fieldset>
</form>
```

###Footer###

Place a link to JQuery followed by a link XFrame's main.js file right before the closing body tag. Use an xfooter classed div for footer content.

```html
</div><!- closing xcontent div -->
<div class="xfooter">
    <p>&copy; 2014 XFrame</p>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="/js/xframe.js"></script>

</body>
</html>
```