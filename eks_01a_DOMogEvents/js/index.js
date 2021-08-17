
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let	number = 5;
	let count = document.getElementById('text-count');
	let incrementor = document.getElementById('btn-count-increase');		
	let reductor = document.getElementById('btn-count-decrease');
	
	function updateNumber(){
		document.getElementById('text-count').innerHTML = number;
	}

	updateNumber();

	incrementor.addEventListener('click', plusOne);

	function plusOne(){
		if(number<10){
			number++;
			updateNumber();
		}
	}


	reductor.addEventListener('click', minusOne);
	
	function minusOne(){
		if(number>0){
			number--;
			updateNumber();
		}
	}

}); // Afslutter: DOMContentLoaded