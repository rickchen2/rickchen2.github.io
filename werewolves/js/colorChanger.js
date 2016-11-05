function colorChanger(id) {
	var ccolor = document.getElementById(id);

	if (ccolor.style.backgroundColor != 'red') {
		ccolor.style.backgroundColor = 'red';
	}
	else	{
		ccolor.style.backgroundColor = 'white';
	}
}