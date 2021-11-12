# `JQuery Basics`

<br><br>

## Advantages of JQuery

* JQuery utilizes *CSS selectors* to select elements in order to make changes to them.
* JQuery has a multitude of methods that can perform common tasks such as looping through elements, adding (or removing) elements from the DOM tree, handle events, handle *AJAX* requests, & more.
* JQuery allows you to *chain methods* together, allowing multiple methods to be applied against a selected element.
* JQuery utilizes *feature detection* (through a series of conditionals) that helps find the best way to achieve a method execution or other task.

<br>

## Selecting Elements

* `$('*')` selects all elements
* `$('element name')` selects all instances of a given HTML element
* `$('#id')` selects element whose *id attribute* has the specified value.
* `$('.class')` does the same as #id, but selects based on .class attribute.
* You can use **hierarchy** selectors such as `parent > child`, `prev + next`, & `prev ~ siblings`.
* `$('element:not(selector)')` selects all elements except that element which has the specified selector. Ex: `$(span:not(#cool))`.