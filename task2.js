let color = prompt("Please enter signal light colour");

switch(color.toLowerCase()){
	case "red":
		document.write("<h2> Must Stop </p>");
	break;

	case "yellow":
		document.write("<h2> Ready to move </p>");
	break;

	case "yellow":
		document.write("<h2> Move now </p>");
	break;

	default:
		document.write("<h2> Invalid input </p>");	
}