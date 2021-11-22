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
    /*::::
        Creating an event listener to detect mouse clicks on li elements.
        The event listener will do the following:
            a. Listen for single-clicks and open clicked li to be edited.
            b. Listen for double-clicks which will delete clicked li.
    ::::*/
    $(document).on('click', 'li', function (e) {
        //Storing <ul> in a variable for reference
        let list = $(this).parent().html();
        /*::::
          If statement checks if editable input field has been added.
          The existence of an input field will prevent a 2nd one being added.
        ::::*/
        if (list.indexOf('input') != -1) {
            let editActiveMsg = `<p class="task-dashboard__msg">You are still editing a task!</p>`;
            if (dashboard.children().is('.task-dashboard__msg')) {
                dashboard.children().replaceWith(editActiveMsg);
                dashboard.children().delay(1500).fadeOut(3000);
                //Using setTimeout to give time for new msg to appear before listing # of tasks again
                setTimeout(() => {
                    dashboard.children().replaceWith(standardMsg);
                    dashboard.children().delay(5000).fadeOut(1500);
                }, 3000);
            }
        }
        else {
            /*::::
            This else block will render an edit field that takes the clicked list item's text and
            use said text as the default text that a user can change and alter.
            ::::*/
            let clickedLiValue = $(this).text().trim();
            let editForm = `<input type="text" id="edit-field" name="edit-field" size="20" value="${clickedLiValue}" />`;
            $(this).children('p').hide();
            $(this).append($(editForm).hide().fadeIn(1500));
            $('#edit-field').on('keypress', function (e) {
                let key = e.keyCode;
                let formValue = $(this).val();
                let formParent = $(this).parent();
                if (key == 13) {
                    formParent.replaceWith(`<li class="task-list__item"><p>${formValue}</p></li>`);
                }
            });
        }
        if (isADoubleClick) {
            let removalMsg = `<p class="task-dashboard__msg">Removed an old task!</p>`;
            dashboard.children().replaceWith(removalMsg);
            dashboard.children().fadeOut(3000);
            $(this).remove();
            let numOfTasks = new Array($('.task-list__item'));
            standardMsg = `<p class="task-dashboard__msg">Welcome, you have ${numOfTasks[0].length} task(s) pending!</p>`;
            setTimeout(() => {
                dashboard.children().replaceWith(standardMsg);
                dashboard.children().delay(5000).fadeOut(1500);
            }, 3000);
        }
        isADoubleClick = true;
        setTimeout(() => {
            isADoubleClick = false;
        }, 300);
    });
    /*::::
    This event listener listens for the add task form's submission and appends
    the ul with the created li.
    ::::*/
    $('#add-task-form').on('submit', function (e) {
        //Prevents page reload upon form submission
        e.preventDefault();
        let formValue = $('#addition-field').val();
        let addedMsg = `<p class="task-dashboard__msg">Added a new task!</p>`;
        if (dashboard.children().is('.task-dashboard__msg')) {
            dashboard.children().replaceWith(addedMsg);
            dashboard.children().fadeOut(3000);
        }
        //Appends a li with the value submitted in the add-task form
        ulList.append(`<li class="task-list__item"><p>${formValue}</p></li>`);
        let numOfTasks = new Array($('.task-list__item'));
        standardMsg = `<p class="task-dashboard__msg">Welcome, you have ${numOfTasks[0].length} task(s) pending!</p>`;
        setTimeout(() => {
            dashboard.children().replaceWith(standardMsg);
            dashboard.children().delay(5000).fadeOut(1500);
        }, 3000);
        //Clears the add-task form's input from the typed and submitted text
        $('#addition-field').val('');
    });
});
