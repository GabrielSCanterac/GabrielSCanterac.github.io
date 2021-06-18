Algoritmo Ejemplo1
	//definiendo cariables
	Definir est Como Entero;
	Definir men como texto;
	//inicializando variables
	Escribir "Ingrese el numero de estacion 1, 2, 3 o 4";
	Leer est;
	//condicion
	si(est=1) Entonces
		men="Verano";
	SiNo
		si(est=2) Entonces
			men="Otoño";
		SiNo
			si(est=3) Entonces
				men="Invierno";
			SiNo
				si(est=4) Entonces
					men="Primavera";
				SiNo
					men="No es un numero valido";
				FinSi
			FinSi
		FinSi
	FinSi
	//mostrando resultados
	Escribir "La estacion es: ",men;
FinAlgoritmo

