$(function() {

/* Click Event that helps detect double-clicks for mobile usage as well */
let dbltouched = false;
/* let editForm = '<input type="text" id="edit-field" name="edit-field" size="12">'; */
let ulList = $('#task-manager__list');

$(document).on('click', 'li', function(e) {
    let list = $(this).html();
    if(list.indexOf('input') != -1) {
        console.log(`This is already in edit mode!`)
    } else {
        console.log($(this).text());
        let clickedLiValue = $(this).text().trim();
        console.log(clickedLiValue)
        let editForm = `<input type="text" id="edit-field" name="edit-field" size="16" value="${clickedLiValue}" />`;
        $(this).append(editForm);
        $('#edit-field').on('keypress', function(e) {
            let key = e.keyCode;
            let formValue = $(this).val();
            let formParent = $(this).parent();
            if (key == 13) {
                formParent.replaceWith(`<li class="task-list__item">${formValue}</li>`);
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


$('#add-task-form').on('submit', function(e) {
    e.preventDefault();
    let formValue = $('#addition-field').val();
    ulList.append(`<li class="task-list__item">${formValue}</li>`)
    console.log(formValue);
    console.log(ulList);
});


$('#task-manager-screen').hide().fadeIn(1500);

});