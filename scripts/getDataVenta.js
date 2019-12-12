
var productos = document.getElementById('container')

function loadData(){
	console.log('fff')
	fetch('/Datos/productos.json')
	   .then(res => res.json())
	   .then(datos=>{

	   console.log(datos)
	   	AddToHTML(datos);
	   	//console.log(datos)
	   })
     .then(function(){
	   	paginacion()
	   })

}

function AddToHTML(datos) {
	
	 productos.innerHTML= " "

	 for(let valor  of datos){ 
	 	productos.innerHTML += ` 
	 		<div class='col-md-3' id = ${valor.id}>

	 			<div class="card mb-4 shadow-sm border-top-0 border-right-0 border-bottom-0 border-info">
	 				<img class="card-img-top" id="adv"  src=${valor.url}   alt="">
	 				<div class="card-body">
	 					<h5 class="card-title" >${valor.nombre}</h5>
	 					<p class='card-text' >${valor.Descripcion}</p>
	 					<div class="d-flex justify-content-between align-items-center">
	 					<small class="text-muted">${valor.Precio} </small>
             <button class="btn btn-primary shop-item-button"type="button"
            onclick="addToCardClicked(event);"
             >ADD TO CART</button>
	 					</div>
	 				</div>


	 			</div>

	 		</div>
	 	`
	 

	 }


	// body...
}

function paginacion(){

	var  numeroDprodcutos = $("#container .col-md-3").length
  console.log(numeroDprodcutos)

	var limitePpage = 8;

	$("#container .col-md-3:gt(" + (limitePpage -1) + ")").hide();
	//console.log('hooo')

	var TotalPaginas = Math.round(numeroDprodcutos/limitePpage);

	$('.pagination').append("<li class='paginaActual page-item active '> <a href='javascript:void(0)' class='page-link'>"+1+"</a> </li>  ")

	for (var i = 2; i <= TotalPaginas; i++) {
		$('.pagination').append(" <li class='paginaActual page-item '> <a href='javascript:void(0)' class='page-link'>"+i+"</a> </li>  ")
		
	}
		//console.log($(".pagination ").length)

	$(".pagination li").on( "click",function(){
				if (!$(this).hasClass("active") ) {
					var paginaActual = $(this).index();
					 $(".pagination li").removeClass("active");
					 $(this).addClass("active")
					 $("#container .col-md-3").hide();
					 var TotalReal = limitePpage * paginaActual;
					 for (var  i = TotalReal - limitePpage; i < TotalReal; i++) {
							$("#container .col-md-3:eq(" +i+ ")").show();
					 	
					 }

				}

		 
	});

	$(".pagination").append(" <li id='nextPage'> <a href='javascript:void(0)' class='page-link'> &raquo</a></li>  ")

	$("#nextPage").on("click", function(){
		var paginaActual= $(".pagination li.active").index();
		if (paginaActual != TotalPaginas) {
				paginaActual++;
				$(".pagination li").removeClass("active");
				$("#container .col-md-3").hide();
				 var TotalReal = limitePpage * paginaActual;
					 for (var  i = TotalReal - limitePpage; i < TotalReal; i++) {
							$("#container .col-md-3:eq(" +i+ ")").show();
					 	
					 }

		}

		$(".pagination li.paginaActual:eq(" + (paginaActual-1) + ")").addClass("active");
		//alert(paginaActual)
		
	})

	$("#PrePage").on("click", function(){
		

		var paginaActual = $(".pagination li.active").index();
		console.log(paginaActual)

		if (paginaActual != 1) {
			paginaActual--;
				$(".pagination li").removeClass("active");
				$("#container .col-md-3").hide();
				 var TotalReal = limitePpage * paginaActual;
					 for (var  i = TotalReal - limitePpage; i < TotalReal; i++) {
							$("#container .col-md-3:eq(" +i+ ")").show();
					 	
					 }

				
		}
		$(".pagination li.paginaActual:eq(" + (paginaActual-1) + ")").addClass("active");
		//alert(paginaActual)
		
	})








}


document.addEventListener('DOMContentLoaded', function() {

    loadData()


    $('#Buscar').click(function(){
      //alert("beto");
      var divs = $('.col-md-3');

      //divs.each(function(){
          //$(this).show()
      //}  );
      var textoBusqueda = $('#busqueda').val();
      
    if(textoBusqueda.length>0){

      var divs = $('.col-md-3');

      divs.each(function(){

        var h5 = $(this).find('h5') 
        if(h5.text().indexOf(textoBusqueda)>=0) {
              $(this).show()
        }else {
             $(this).hide()
           }

      })

    }else {
      
       var lis = $(".paginaActual")
       lis.each(function(){
         if($(this).hasClass("active")){
            var paginaActual = $(this).index()
            var TotalReal = limitePpage * paginaActual;
        for (var  i = TotalReal - limitePpage; i < TotalReal; i++) {
							$("#container .col-md-3:eq(" +i+ ")").show();
					 	
					 }

         }
       })
        
       
      }
       return false;
      

    })
    
})