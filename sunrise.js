// JavaScript Document
var sunrise = {};
sunrise.init = function()
{
	
	if(window.innerWidth < 769)
	{
		console.log(window.innerWidth);
		$('#mobileMenuBtn').click(sunrise.showMenu);
	}
	return;
}
sunrise.showMenu = function(e)
{
	$('#menu').slideToggle('fast');
	return;
}
$(document).ready(sunrise.init);