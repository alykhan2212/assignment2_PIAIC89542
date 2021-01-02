let time = parseInt(prompt("Please enter time:", "HHMM"));
let greetings;

if(time < 0 || time>2359)
{
    greetings="Incorrect Time/Format";
}
else if(time>=0000 && time<1200)
{
    greetings="Good Morning";
}
else if(time>=1200 && time<1700)
{
    greetings="Good Afternoon";
}
else if(time>=1700 && time<2100)
{
    greetings="Good Evening";
}
else if(time>=2100 && time<=2359)
{
    greetings="Good Night";
}
else{
	greetings="Try again with valid input";
}

document.write(greetings);
