Algoritmo Ejemplo2
	//definiendo variables
	definir n1,n2,n3,n4,prom Como Real;
	definir men como  texto;
	//inicializando variables
	n1=0; n2=0; n3=0; n4=0; prom=0; men="";
	//capturando valores
	escribir "Ingresa la nota 1:";
	leer n1;
	escribir "Ingresa la nota 2:";
	leer n2;
	escribir "Ingresa la nota 3:";
	leer n3;
	escribir "Ingresa la nota 4:";
	leer n4;
	//realizando operaciones
	prom=(n1+(2*n2)+n3+(3*n4))/7;
	//condicion
	si (prom>=13) Entonces
		men="aprobado";
	SiNo
		men="desaprobado";
	FinSi
	//mostrando resultados
	Escribir "el rpomedio es: ",prom;
	Escribir men;
FinAlgoritmo
