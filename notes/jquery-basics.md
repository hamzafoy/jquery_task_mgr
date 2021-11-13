
# `JQuery Basics`

  

<br><br>

  

## Advantages of JQuery

  

* JQuery utilizes *CSS selectors* to select elements in order to make changes to them.

* JQuery has a multitude of methods that can perform common tasks such as looping through elements, adding (or removing) elements from the DOM tree, handle events, handle *AJAX* requests, & more.

* JQuery allows you to *chain methods* together, allowing multiple methods to be applied against a selected element.

* JQuery utilizes *feature detection* (through a series of conditionals) that helps find the best way to achieve a method execution or other task.

  

<br>

  

## Selecting Elements

  

*  `$('*')` selects all elements

*  `$('element name')` selects all instances of a given HTML element

*  `$('#id')` selects element whose *id attribute* has the specified value.

*  `$('.class')` does the same as #id, but selects based on .class attribute.

* You can use **hierarchy** selectors such as `parent > child`, `prev + next`, & `prev ~ siblings`.

*  `$('element:not(selector)')` selects all elements except that element which has the specified selector. Ex: `$(span:not(#cool))`.

  

<br>

  

## JQuery Ready Method

```

$(document).ready(function() {

//JQuery Script here

});

```

`.ready()` is a useful method in that it checks that the page is fully loaded before executing the code written inside. You can place the `<script>` tag in the .html file to just before the closing `<body>` tag, but this method ensure that JQuery waits for the page to completely load in cases where it is imported from another file or the `<script>` tag is placed elsewhere in the .html file.

<br>

## Accessing an Element's Content

* `.html()` method can retrieve HTML tags & content from a selected element. It retrieves only the HTML inside the first element that matches the selector along with any of its *descendants*.
* `.text()` method can retrieve the **text** only from a selected element. It will return the content from every element selected along with the text from any descendants. Be mindful of how this works when reading the text from multiple elements matching your provided selectors and how there won't be spaces between the text of the multiple elements.

<br>

## Updating Elements

* `.html()` & `.text()` can take a function that passes new content to update the element selected before the method call. Ex:
```
$('p.rogue').html(function() {
	return `<em>${variable}</em>`
}
```

* `.replaceWith()` method replaces every element matching the selector with new content.
* `.remove()` method removes all instances that match the selected element.
* Remember that `.html()` & `.replaceWith()` carry same security risks as the DOM's `innerHTML` property.