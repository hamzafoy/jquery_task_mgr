/* Click Event that helps detect double-clicks for mobile usage as well */
let dbltouched = false;
$('li').on('click', function() {
    if (dbltouched) {
        $(this).remove();
    }
    dbltouched = true;
    setTimeout(() => {
        dbltouched = false;
    }, 300);
});

$('#task-manager-screen').hide().fadeIn(1500);