try {
  let n1 = 5;
  let n2 = 5;
  result = "division";

  switch (result) {
    case "add":
      console.log(n1 + n2);
      break;
    case "subtraction":
      console.log(n1 - n2);
      break;
    case "multiplication":
      console.log(n1 * n2);
      break;
    case "division":
      console.log(n1 / n2);
      break;
  }
} catch (error) {
  console.log("Operacion no valida");
}
