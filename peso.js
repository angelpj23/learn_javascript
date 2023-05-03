// Escriba un código que reciba un peso de una persona y a partir 
// de ese peso pueda decir si esta persona es sobre peso o no considerando 
// que una persona que se considera sobre peso está por encima de 150 L
var libras = 90;

if (libras > 150) {
    console.log("Esta en sobre peso");
  
  }
  
  else if (libras <= 150 && libras >= 80) {
    console.log("Tiene un peso normal");
  }

  else if (libras < 80) {
    console.log("Esta muy delgado");
  }