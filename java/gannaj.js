function validate()
{
	var text=document.getElementById("un").value;
	var password=document.getElementById("ps").value;
	if (text == "team" && password == "0000")
	{
		alert ("Logged in successfully!");
		return false;
	}
	else
	{
		alert ("Username and password are not valid");
	}
}