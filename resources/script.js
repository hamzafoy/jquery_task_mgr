//Will run the code inside when page is fully loaded.
$(function() {

let dbltouched = false;
//Storing some DOM elements in variables
let ulList = $('#task-manager__list');
let dashboard = $('#task-dashboard');

/* 
Creating an event listener for mouse clicks that are applied to the list items.
The event listener will allow the following:
a. Single clicks will open the list item to be editable.
b. Double clicks will delete the list item.
*/
$(document).on('click', 'li', function(e) {
    let list = $(this).parent().html();
    /*
    This if statement checks to see if the input/edit field has already been added, if
    the edit field is already present on a given list item, a 2nd one is NOT added.
    */
    if(list.indexOf('input') != -1) {
        let editModeActiveMsg = `<p class="task-dashboard__msg">This is already in edit mode!</p>`;
        if (!dashboard.children().is('.task-dashboard__msg')) {
            dashboard.append(editModeActiveMsg)
            dashboard.children().fadeOut(3000);
        } else {
            dashboard.children().replaceWith(editModeActiveMsg)
            dashboard.children().fadeOut(3000);
        }
    } else {
        /*
        This else block will render an edit field that takes the clicked list item's text and
        use said text as the default text that a user can change and alter.
        */
       console.log($(this).children())
        let clickedLiValue = $(this).text().trim();
        let editForm = `<input type="text" id="edit-field" name="edit-field" size="20" value="${clickedLiValue}" />`;
        $(this).children('p').hide();
        $(this).append($(editForm).hide().fadeIn(1500));
        //The user will press the 'Enter' button on keyboard to submit their edit on a clicked list item.
        $('#edit-field').on('keypress', function(e) {
            let key = e.keyCode;
            let formValue = $(this).val();
            let formParent = $(this).parent();
            if (key == 13) {
                formParent.replaceWith(`<li class="task-list__item"><p>${formValue}</p></li>`);
            }
        });
    }
    if (dbltouched) {
        console.log(`Removing. . .`)
        $(this).remove();
    }
    dbltouched = true;
    setTimeout(() => {
        dbltouched = false;
    }, 300);
});

/*
This event listener listens for the add task form's submission and appends 
the ul with the created li.
*/
$('#add-task-form').on('submit', function(e) {
    //Prevents page reload upon form submission
    e.preventDefault();
    let formValue = $('#addition-field').val();
    //Appends a li with the value submitted in the add-task form
    ulList.append(`<li class="task-list__item"><p>${formValue}</p></li>`)
    //Clears the add-task form's input from the typed and submitted text
    $('#addition-field').val('');
});


$('#task-manager-screen').hide().fadeIn(1500);

});