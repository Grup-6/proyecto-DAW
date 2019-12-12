$("#iniciar-sesion").on("click",function(){
       var nombreButton = document.getElementById('nombre-input')

      // console.log(nombreButton)

        var pwdButton= document.getElementById('pwd-input')

        var c1= nombreButton.innerText==="" && pwdButton.innerText===""
        var c2= nombreButton.innerHTML==="" || pwdButton.innerText===""

        if( nombreButton.value.length == 0 && pwdButton.value.length == 0 ){
          alert("Campos invalidos!")
        }else{
          console.log("hola")
          document.location.href='ventas.html'
            

        }
        
    })