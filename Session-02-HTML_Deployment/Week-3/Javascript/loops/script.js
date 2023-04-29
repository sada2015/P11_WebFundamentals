var inputLenght = prompt("Enter Number");
function drawTriangle(triangleSize) {
  let line = 0;
  for (var i = 0; i < inputLenght; i++) {
    line++;
    document.write("<br/>");
    for (var x = 0; x < line; x++) {
      document.write(" * ");
    }
  }
}

drawTriangle(inputLenght);
