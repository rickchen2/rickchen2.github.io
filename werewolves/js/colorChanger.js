
function OnSelectedIndexChange(id, selectid){

	if (document.getElementById(selectid).value == "1" ){
    	kill(id);
    }
    else if (document.getElementById(selectid).value == "2"){
    	guard(id);
    }
    else if (document.getElementById(selectid).value == "3"){
    	magic(id);
    }
    else if (document.getElementById(selectid).value == "4"){
    	guardAndMagic(id);
    }
    else{
    	reset(id);
    }


}


function kill(id) {
	var ccolor = document.getElementById(id);
	ccolor.style.backgroundColor = 'red';
}

function guard(id) {
	var ccolor = document.getElementById(id);
	ccolor.style.backgroundColor = '#42f492';

}

function magic(id) {
	var ccolor = document.getElementById(id);
	ccolor.style.backgroundColor = '#42f492';

}

function guardAndMagic(id){
	var ccolor = document.getElementById(id);
	ccolor.style.backgroundColor = 'red';
}

function reset(id) {
	var ccolor = document.getElementById(id);
	ccolor.style.backgroundColor = 'white';

}


