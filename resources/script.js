/* Click Event that helps detect double-clicks for mobile usage as well */
let dbltouched = false;
let editForm = `<input type="text" id="edit-field" name="edit-field" size="12" required>`
$('li').on('click', function() {
    let list = $(this).html();
    if(list.indexOf('input') != -1) {
        console.log(`This is already in edit mode!`)
    } else {
        $(this).append(editForm)
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