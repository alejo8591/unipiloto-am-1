// Declaración de una variable global 

var a = "a";

function alcance_b(){
	var b = "b";

	function alcance_c(){
		var a = "f";
		var c = "c";

		function alcance_d(){
			var a = "aa";
			var d = "d";

			alert("Las variables a, b, c y d serian: " + a + ", " + b + ", " + c + ", " + d);
		}

		// llamado de la función con el alcance más interno
		alcance_d();
		
		alert("Las variables a, b y c serian: " + a + ", " + b + ", " + c);

	}

	// Llamado de la función alcance_c
	alcance_c();

	alert("Las variables a y b serian: " + a + ", " + b);

}

alcance_b();

alert("La variable más global de script es `a`, con un valor de: " + a);