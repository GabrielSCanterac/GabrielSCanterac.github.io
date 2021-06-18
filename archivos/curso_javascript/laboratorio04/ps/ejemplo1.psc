Algoritmo Ejemplo1
	//definiendo cariables
	definir edad como entero;
	definir men como texto;
	//inicializamos las viariables
	edad=0; men="";
	//capturamos valores
	escribir "ingresa tu edad:";
	leer edad;
	//condiciones
	si (edad>=18) Entonces
		men="eres mayor de edad";
	SiNo
		men="eres menor de edad";
	FinSi
	//mostrando resultado
	escribir "la edad es: ",edad;
	escribir men;
	
FinAlgoritmo
