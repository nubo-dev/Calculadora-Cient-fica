// Función que ejecuta los números y signos
function caracter(valores) {
  document.getElementById("display").value += valores;
}

// Limpiar pantalla
function clr(valores) {
  document.getElementById("display").value = valores;
}

// Función de igualdad
function equal() {
  try {
    clr(eval(document.getElementById("display").value));
  } catch (e) {
    clr("Error");
  }
}

// Calculo de PI
function pi() {
  pi = Math.PI;
  document.getElementById("display").value += pi;
}

// Función que calcula el seno, coseno de un valor
function d(valores) {
  // Seno
  if (valores == "sin") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.sin(x);
  }

  // Cosiente
  if (valores == "cos") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.cos(x);
  }

  // CHyperbolic Sine
  if (valores == "sinh") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.sinh(x);
  }

  // Cotangente
  if (valores == "cot") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = 1 / Math.tan(x);
  }

  // Coseno hiperbólico
  if (valores == "cosh") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.cosh(x);
  }

  // Secante
  if (valores == "sec") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = 1 / Math.cos(x);
  }
  // Tangente
  if (valores == "tan") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.tan(x);
  }

  // Tangente hiperbólico
  if (valores == "tanh") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.tanh(x);
  }

  // Cosecante
  if (valores == "csc") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = 1 / Math.sin(x);
  }

  // Cosecante
  if (valores == "csc") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = 1 / Math.sin(x);
  }

  // Logaritmo
  if (valores == "log") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.log(x);
  }

  // Potencia x2
  if (valores == "x2") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.pow(x, 2);
  }

  // Potencia x3
  if (valores == "x3") {
    // Función que tenga dos parametros
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.pow(x, 3);
  }

  // Potencia
  if (valores == "raiz") {
    var x = document.getElementById("display").value;
    x = x;
    document.getElementById("display").value = Math.ceil(x);
  }
}

// Eliminar un caracter
function del() {
  var anterior = document.getElementById("display").value
  var nuevoValor = anterior.substring(0,anterior.length-1);
  document.getElementById("display").value = nuevoValor;
}
