
var input = document.getElementById("result");

var calc = (number) => {

	input.value += number; 

}
var result = () => {

	try{

		input.value = eval(input.value);

	}
	catch(err){
		input.value = "Ошибка";
	}

	if (!isFinite(input.value)) {
		input.value = "Ошибка";
	}
	
}