// shopping card function
var cart = [];

var Item = function(name, price, quatity) {
  this.name = name;
  this.price = price;
  this.quatity = quatity;
}

function displayCart() {
  var cartArray = listCart();
  var output = "";
  for(var i in cartArray) {
      output += "<tr><th>Name</th><th>Price</th><th>count</th><th>total</th><tr>";
      output += "<tr>";
      output += "<td>"+ cartArray[i].name + "</td>";
      output += "<td>"+ cartArray[i].price + "</td>";
      output += "<td>"+ cartArray[i].quatity + "</td>";
      output += "<td>"+ cart[i].price * cart[i].quatity;+ "</td>";
      output += "</tr>";
  }
  $("#show-cart").html(output);
}

// function add to card
function AddItemCard(name, price, quatity) {
  for(var i in cart) {
    if(cart[i].name === name) {
       cart[i].quatity ++;
       saveCart();
       return;
    }
  }
  var item = new Item(name, price, quatity);
    cart.push(item);
    saveCart();
}
//list cart
function listCart() {
  var cartCopy = [];
  for( var i in cart) {
    var item = cart[i];
    var itemcopy = {};
    for( var p in item) {
      itemcopy[p] = item[p];
    }
    cartCopy.push(itemcopy);
  }
  return cartCopy;
}

//countCart
function countCart() {
  var totalCount = 0;
  for( var i in cart) {
    totalCount +=  cart[i].count;
  }
  return totalCount;
}

//save cart
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// function load cart
function loadCart() {
  cart = JSON.parse(localStorage.setItem("shoppingCart"));
}
