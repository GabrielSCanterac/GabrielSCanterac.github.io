Algoritmo Ejemplo2
	//definiendo cariables
	Definir tur, men como texto;
	//inicializando variables
	tur=""; men="";
	//capturando valores
	Escribir "Ingrese el turno M o T o N: ";
	Leer tur;
	//condicion
	si(tur="m") Entonces
		men="Mañana";
	SiNo
		si(tur="t") Entonces
			men="Tarde";
		SiNo
			si(tur="n") Entonces
				men="Noche";
			SiNo
				men="No es una letra valida";
			FinSi
		FinSi
	FinSi
	//mostrando resultados
	Escribir "La turno es: ",men;
FinAlgoritmo
