"use strict";
$(function () {
    //Creating variable to store boolean value related to a li item being single- or double-clicked.
    let isADoubleClick = false;
    //Storing DOM elements in JQuery variables.
    let ulList = $('#task-manager__list');
    let dashboard = $('#task-dashboard');
    //Counting # of task items and displaying it as an initial message sent to dashboard.
    let numOfTasks = new Array($('.task-list__item'));
    let standardMsg = `<p class="task-dashboard__msg">Welcome, you have ${numOfTasks[0].length} task(s) pending!</p>`;
    //Displaying the # of tasks on dashboard and letting it fade after a short period.
    dashboard.append(standardMsg);
    dashboard.children().delay(5000).fadeOut(1500);
    /*****
        Creating an event listener to detect mouse clicks on li elements.
        The event listener will do the following:
            a. Listen for single-clicks and open clicked li to be edited.
            b. Listen for double-clicks which will delete clicked li.
    *****/
    $(document).on('click', 'li', function (e) {
        let list = $(this).parent().html();
    });
});
