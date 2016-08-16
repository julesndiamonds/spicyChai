<script>

$('h1') .css("background-color","Aquamarine");
$('p') .css("background-color","Chartreuse");
$('body').css("background-color","lightyellow");
</script>
</body>
</html>

<script>

// let's choose a new image

var backgroundImage = prompt("Strawberries or Lucy?", "Just pick one");

if (backgroundImage === "Strawberries"){
	$('body') .append('<div> Strawberry fields FOREVER</div>');
	$('p') .append('<img src="https://popandcircumstanceblog.files.wordpress.com/2013/06/strawberry_fields.jpg?w=1238">');
	$('p').css("background-color", "Yellow");
} else {
$('body') .append('<div>Lucy in the Sky with Diamonds</div>');
	$('p') .append('<img src="http://www.acting-man.com/blog/media/2016/03/lucy_in_the_sky_with_diamonds_by_motorhead15-d7frlon.jpg">');
	$('p').css("background-color", "LavenderBlush");
}

//if ('strawberry' {

//} else {
//console.log("The statement is false");
//}

//background-image: url("http://www.acting-man.com/blog/media/2016/03/lucy_in_the_sky_with_diamonds_by_motorhead15-d7frlon.jpg");//

</script>
