Algoritmo Ejemplo3
	//definiendo variables
	definir n1,n2,prom como real;
	definir men como texto;
	//inicializando variables
	nl=0; n2=0; prom=0; men="";
	//capturando valores
	escribir "Ingrese la nota 1:";
	leer n1;
	escribir "Ingrese la nota 2:";
     leer n2;
	//realizando operaciones
	prom=(n1+n2)/2;
	//condicion
	si (prom >=13) Entonces
		men="Aprobado";
	FinSi
	//mostrando resultados
	escribir "El promedio es: ",prom;
	escribir men;
FinAlgoritmo
