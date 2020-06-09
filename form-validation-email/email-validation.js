function ValidateEmail(inputText)
{
var mailformat = /[a-z0-9._%+-]+@[outlook|gmail|hotmail]+\.[a-z]{2,3}/g
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}