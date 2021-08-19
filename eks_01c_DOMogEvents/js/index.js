
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let	number = 5;
	let maxNumber = 10;
	let minNumber = 0;
	let count = document.getElementById('text-count');
	let incrementor = document.getElementById('btn-count-increase');		
	let reductor = document.getElementById('btn-count-decrease');
	
	function updateNumber(){
		document.getElementById('text-count').innerHTML = number;
	}

	updateNumber();

	function checkMinMaxValue(direction){
		if(direction === "inc" && number < maxNumber){
		number++;
		updateNumber();
		}
		if(direction === "dec" && number > minNumber){
		number--;
		updateNumber();
		}
	}

	
	
	incrementor.addEventListener('click', () => checkMinMaxValue("inc"));


	reductor.addEventListener('click', () => checkMinMaxValue("dec"));

}); // Afslutter: DOMContentLoaded