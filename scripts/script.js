/*AIzaSyAd1oUxgcJPcPLPogP8ERbHWRWHpb_0UjI*/
/*
var map;
 function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -2.1406514, lng: -79.9539388},
          zoom: 15
        });
        var marker = new google.maps.Marker({

        position : {lat: -2.1406514, lng: -79.9539388},
        map:map
        

      });

      }
*/

var mymap = L.map('mapid').setView([-2.131496, -79.939364], 14);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWF2ZW5kYW4iLCJhIjoiY2p3NnVzdHozMjdxeDQzcXBnYjlwMTRqcyJ9.S00xReWyD9_Eb4B1h-VgIg'
}).addTo(mymap);

var marker = L.marker([-2.131496, -79.939364]).addTo(mymap);


function actualizarHora(){
    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm, minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year= fecha.getFullYear();
    var pHoras= document.getElementById("horas"),
        pMinutos=document.getElementById("minutos"),
        pAMPM = document.getElementById('ampm'),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pSegundos = document.getElementById('segundos'),
        pMes = document.getElementById("mes"),
        pYear = document.getElementById("year");

      var semana =["Domingo", "Lunes", "Martes", "Miércoles","Jueves","Viernes","Sábado"]
      pDiaSemana.textContent= semana[diaSemana];
      console.log(semana[diaSemana])

      pDia.textContent = dia;

      var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

      pMes.textContent = meses[mes];

      pYear.textContent = year;

         if(horas >= 12){
          horas = horas - 12;
          ampm = 'PM';
         }else{
          ampm = 'AM';
         }
        
        if(horas == 0){
         horas = 12;
        };

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos <10){ minutos = "0" + minutos};
        pMinutos.textContent = minutos;    
        if(segundos < 10){ segundos = "0" + segundos};        
        pSegundos.textContent = segundos;

};

//actualizarHora();
//var intervalo = setInterval(actualizarHora, 1000);

 