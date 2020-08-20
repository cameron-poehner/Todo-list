// Check off specific todos by clicking
$('li').click(function() {
    $(this).toggleClass('completed'); 
});

// Click on X to delete To-do

$('span').click(function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});