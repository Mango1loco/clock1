function back1(){
	$("#body").removeClass("back2");
	$("#body").removeClass("back3");
	$("#body").removeClass("back3");
	$("#body").toggleClass("back1");
}

function back2(){
	$("#body").removeClass("back1");
	$("#body").removeClass("back3");
	$("#body").removeClass("back3");
	$("#body").toggleClass("back2");
	$("#body").removeClass("back5");
}

function back3(){
	$("#body").removeClass("back2");
	$("#body").removeClass("back3");
	$("#body").removeClass("back4");
	$("#body").toggleClass("back3");
	$("#body").removeClass("back5");
}

function back4(){
	$("#body").removeClass("back1");
	$("#body").removeClass("back3");
	$("#body").removeClass("back2");
	$("#body").toggleClass("back4");
	$("#body").removeClass("back5");
}

function back5(){
	$("#body").removeClass("back1");
	$("#body").removeClass("back3");
	$("#body").removeClass("back2");
	$("#body").toggleClass("back5");
}


