Algoritmo Ejemplo2
	//definiendo variables
	definir lad, area como entero;
	definir men como texto;
	//inicializando variables
	lad=0; area=0; men="";
	//capturando valores
	escribir "Ingresa el lado del cuadrado:";
	leer lad;
	//realizando operaciones
	area=lad*lad;
	//condicion
	si (area>100) Entonces
		men="Es un cuadrado grande";
	FinSi
	//mostrando resultados
	Escribir "El area del cuadrado es: ",area;
	escribir men;
FinAlgoritmo
