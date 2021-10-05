$(document).ready(function(){
    var  todo =$(".todo");
   todo.mouseenter(function(){
       console.log("hola")
       $("#color").text("Estas fueron mis lecturas de agosto")
       $("#color").css("color","blue")
    });

   todo.mouseleave(function(){
       $("#color").text("Estas fueron mis lecturas de agosto")
       $("#color").css("color","blueviolet")
    });
  
   todo.click(function(){
       $("#texto").text()
       $("#texto").css("color","blue")
   });

});


$(document).ready(function(){
   var  todito =$(".todito");
   todito.click(function(){
       $("#escondido").text()
       $('#escondido').text('El primer día de cada mes lanzo el wrap up del mes anterior ¡Atentx!')
   });
   
});

document.body.style.backgroundColor = "#AA0000";