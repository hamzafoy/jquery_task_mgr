/* Click Event that helps detect double-clicks for mobile usage as well */
let dbltouched = false;
let editForm = '<input type="text" id="edit-field" name="edit-field" size="12">';
$('li').on('click', function() {
    let list = $(this).html();
    console.log(list);
    if(list.indexOf('input') != -1) {
        console.log(`This is already in edit mode!`)
    } else {
        $(this).append(editForm);
        $('#edit-field').on('keypress', function(e) {
            e.stopPropagation;
            let key = e.keyCode;
            console.log($(this).val());
            let formValue = $(this).val();
            let formParent = $(this).parent();
            console.log($(this).parent());
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




$('#task-manager-screen').hide().fadeIn(1500);