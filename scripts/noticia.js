var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

function loadPromo(){
	fetch('/Datos/promociones.json')
	   .then(res => res.json())
	   .then(datos=>{
       for(let promo of datos.promociones){
          var div = $("<div></div>");
          div.attr("class","m-5 col-md-2  text-center bg-light")
          var h6= $("<h6></h6>")
          h6.attr("class","promo"+promo.id) 
          h6.text(promo.descripcion)

          var img=$("<img></img>")
          img.attr("src",promo.url)
          img.attr("class","img-fluid textpromo"+promo.id+" my-1")
          console.log(promo.url)
          div.append(img)
          div.append(h6)
          $(".promociones").append(div)
       }
     })
     .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
      });    

}

loadPromo();