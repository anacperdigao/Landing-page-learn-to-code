function mensagem(){
    alert("Cadastro realizado com sucesso!");
}

function checkInputs(inputs) {

    var filled = true;
  
  inputs.forEach(function(input) {
    
    if(input.value === "") {
        filled = false;
    }
  
    });
  
  return filled;
  
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");

inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {

    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }

  });

});