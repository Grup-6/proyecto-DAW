/*

document.addEventListener('DOMContentLoaded', init, false);

function init(){
  var total = document.getElementById('cart-total-price');
  total.addEventListener('change', function(event){ 
    var target = event.target
    console.log("dentro de onchange del total")
    console.log(target)
    var spinnerValorRecibido = document.getElementById('valor-recibido');
    spinnerValorRecibido.value-=total.innerText
})

};

*/

/*document.addEventListener('DOMContentLoaded', function() {

    ready();
     
    
})
*/


if (document.readyState == 'loading'){
  console.log(document.readyState == 'loading')
  document.addEventListener('DOMContentLoaded', ready)
} else{
  ready()
   //loadData()
  
  
  

}

function ready(){

  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for(var i=0; i< quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  var addToCardButtons = document.getElementsByClassName('shop-item-button')
  for (var i=0; i<addToCardButtons.length; i++){
      var button = addToCardButtons[i]
      button.addEventListener('click', addToCardClicked)
  }

  var spinnersQyt= document.getElementsByClassName('cart-quantity-input');
  for(var i=0; i<spinnersQyt.length; i++){
    var spinner = spinnersQyt[i];
    spinner.addEventListener('change', spinnersUpdate)
  }

  var buscarButton = document.getElementById('Buscar')
  buscarButton.addEventListener('click', buscarProducto)

  var finalizarButton = document.getElementById('finalizar')
  finalizarButton.addEventListener('click', finalizarVenta)

  var cancelarButton = document.getElementById('cancelar')
  cancelarButton.addEventListener('click', cancelarVenta)
  
}

function spinnersUpdate(event){
      var target = event.target;
      console.log("Dentro del target")
      var currentRow = target.parentElement.parentElement.parentElement
      var pvp =currentRow.getElementsByClassName('cart-price')[0].innerText
      var qty = target.value
      console.log(currentRow);
      console.log(pvp)
      console.log(qty)
      currentRow.getElementsByClassName('cart-subtotal')[0].innerText = Math.round(pvp*qty * 100) / 100;
      updateCartTotal()
}


function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

var removeButtons = document.getElementsByClassName('btn-danger');
var spinnersQyt= document.getElementsByClassName('cart-quantity-input');
var spinnerValorRecibido = document.getElementById('valor-recibido');


spinnerValorRecibido.addEventListener('click', function(event){
  var target = event.target
  var valorRecibido = target.value
  var total = document.getElementById('cart-total-price').innerText

  document.getElementById('cambio').innerText =Math.round((valorRecibido - total)*100)/100

});

console.log(removeButtons);

for(var i=0; i<removeButtons.length; i++){
  var button=removeButtons[i];
  button.addEventListener('click', function(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
  })
}


function updateCartTotal(){
  var cartRows = document.getElementsByClassName('cart-row')
  var total = 0
  for(var i=0; i<cartRows.length; i++){
    var cartRow=cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

    console.log(priceElement, quantityElement)

    var price = priceElement.innerText
    var qty= quantityElement.value
    var subtotal = (Math.round(price * 100) / 100) * qty

    total += subtotal;
  }

  total = Math.round(total * 100) / 100
  
  document.getElementById('cart-total-price').innerText = total
  
}

function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <=0){
    input.value =1
  }
  updateCartTotal()
}

function addToCardClicked(event){
  var button = event.target
  var price= button.parentElement.getElementsByClassName('text-muted')[0].innerText
  var product = button.parentElement.parentElement.getElementsByClassName('card-title')[0].innerText

  console.log(button)
  console.log(price)
  console.log(product)
  addItemToCart(product, price)
}

function addItemToCart(product, price){
  var cartRow = document.createElement('tr')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementById('cart-items')
  //cartItems.appendChild(cartRow)

  var cartRows = document.getElementsByClassName('product-name')

  for(var i=0; i<cartRows.length; i++){
    console.log(cartRows[i])
    if(cartRows[i].innerText == product ){
      alert("Este producto ya se encuentra agregado a la lista! ")
      return
    }
  }

  var cartRowContents = 
  `  <tr class="cart-row">
              <th scope="row">
               <button class="btn btn-danger" type="button">X</button>
              </th>
              <td>29RFKE</td>
              <td class="product-name"> ${product}</td>
              <td>
                <span class="cart-price cart-column">${price.replace('$', '')}</span>
              </td>
              <td>
                 <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                    </div>
              </td>
              <td><span class="cart-subtotal">${price.replace('$', '')}</span></td>

            </tr>
  `
  cartRow.innerHTML= cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', spinnersUpdate)

}

function buscarProducto(event){
  console.log("dentro de buscar producto")
  var busqueda = document.getElementById('busqueda')
  var str= busqueda.value
  console.log(str)
  searchProducts(str)
}

function finalizarVenta(event){
  var total = document.getElementById('cart-total-price')

  if(total.textContent!=0){
      alert("Venta finalizada! ")
      location.reload();


  }else{
      alert("No se han agregado productos a la lista!")
  }

}

function cancelarVenta(event){
  var window = confirm("¿Desea cancelar la venta?");
  if (window == true) {
    console.log("Ha cancelado la venta")

    location.reload();

    /*
    var cartRows =document.getElementById('cart-items')
    var productos = cartRows.getElementsByClassName('cart-row')
    
    for(var i=0; i<productos.length; i++){
      var producto = productos[i]
      producto.remove()
    }

    */

  }


 

}









