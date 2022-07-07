
$("#heading").css(
    "color","red"
    )
$(".para").css({
    "color":"blue",
    "font-size":"20px"
})

$(".para-3").after(`<a href="https://www.facebook.com/">facebook</a>`)
$("#title").html("Đây là tiêu đề")

$(".description").addClass("text-bold")

$(".para-3").first().replaceWith(`<button>Click me</button>`)


