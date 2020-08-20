// Check off specific todos by clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed'); 
});

// Click on X to delete To-do

$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        // Grabbing a new todo from text input
        var todoText = $(this).val();
        // Create a new li and add to ul
        $('ul').append(`<li>${todoText}</li>`);
    }
});