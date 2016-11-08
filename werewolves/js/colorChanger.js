
var myCounter = { killcounter:0, guardcounter:0, magiccounter:0};


function kill(id) {
	var ccolor = document.getElementById(id);

	if (myCounter.killcounter == 0 &&  myCounter.guardcounter == 0 && myCounter.magiccounter == 0) {
		ccolor.style.backgroundColor = 'red';
		myCounter.killcounter = 1;

	}
	
	else if (myCounter.killcounter == 0 &&  myCounter.guardcounter == 1 && myCounter.magiccounter == 0){
		ccolor.style.backgroundColor = '#42f492';
		myCounter.killcounter = 1;

	}
	else if (myCounter.killcounter == 0 &&  myCounter.guardcounter == 0 && myCounter.magiccounter == 1){
		ccolor.style.backgroundColor = '#42f492';
		myCounter.killcounter = 1;

	}
	else if (myCounter.killcounter == 0 &&  myCounter.guardcounter == 1 && myCounter.magiccounter == 1){
		ccolor.style.backgroundColor = 'red';
		myCounter.killcounter = 1;

	}
	else	{
		ccolor.style.backgroundColor = 'white';
		myCounter.killcounter = 0;
		myCounter.guardcounter =0;
		myCounter.magiccounter =0;

	}
}



function guard(id) {
	var ccolor = document.getElementById(id);

	if ( myCounter.guardcounter == 0 && myCounter.killcounter == 0 && myCounter.magiccounter == 0) {
		ccolor.style.backgroundColor = '#42f492';
		myCounter.guardcounter = 1;

	}
	else if (myCounter.guardcounter == 0 && myCounter.killcounter == 0 && myCounter.magiccounter == 1) {
		ccolor.style.backgroundColor = 'red';
		myCounter.guardcounter = 1;

	}
	else if (myCounter.guardcounter == 0 && myCounter.killcounter == 1 && myCounter.magiccounter == 0) {
		ccolor.style.backgroundColor = '#42f492';
		myCounter.guardcounter = 1;

	}
	else if (myCounter.guardcounter == 0 && myCounter.killcounter == 1 && myCounter.magiccounter == 1) {
		ccolor.style.backgroundColor = 'red';
		myCounter.guardcounter = 1;
	}
	else {
		ccolor.style.backgroundColor = 'white';
		myCounter.guardcounter = 0;
		myCounter.killcounter =0;
		myCounter.magiccounter =0;
	}

}

function magic(id) {
	var ccolor = document.getElementById(id);

	if (myCounter.magiccounter == 0 && myCounter.killcounter == 0  &&  myCounter.guardcounter == 0 ) {
		ccolor.style.backgroundColor = '#42f492';
		myCounter.magiccounter = 1;

	}
	else if (myCounter.magiccounter == 0 && myCounter.killcounter == 1  &&  myCounter.guardcounter == 0) {
		ccolor.style.backgroundColor = '#42f492';
		myCounter.magiccounter = 1;

	}
	else if (myCounter.magiccounter == 0 && myCounter.killcounter == 0  &&  myCounter.guardcounter == 1) {
		ccolor.style.backgroundColor = 'red';
		myCounter.magiccounter = 1;

	}
	else if (myCounter.magiccounter == 0 && myCounter.killcounter == 1  &&  myCounter.guardcounter == 1) {
		ccolor.style.backgroundColor = 'red';
		myCounter.magiccounter = 1;

	}
	else {
		ccolor.style.backgroundColor = 'white';
		myCounter.magiccounter = 0;
		myCounter.killcounter = 0;
		myCounter.guardcounter =0;
	}

}