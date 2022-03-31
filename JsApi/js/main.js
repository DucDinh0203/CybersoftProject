import {Product} from "./product.js";
import {renderCart, renderProducts, optionSelect} from "./action.js";

let productList = [];
const BASE_URL = "https://62456d932cfed188172009fc.mockapi.io";
const renderProduct = async () => {
    try{
        const response = await axios({
            url: `${BASE_URL}/cybershop`,
            method: "GET",
        });
        const listOfProducts = response.data.map((product) =>{
            return new Product(
                product.id,
                product.name,
                product.description,
                product.price,
                product.image,
                product.image
            );
        });
        productList = listOfProducts;
        document.getElementById("filter").onchange = (e) => {
            return renderProducts(optionSelect(listOfProducts, e.target.value));
        };
        renderProducts(listOfProducts, "none");
    } catch (error) {
        console.log(error);
    }
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let addToCart = (id) => {
    if (cart.some((item) => item.id == id)) {
        cart = cart.map((itm) => {
            let old = itm.numberOfUnits;
            if (itm.id == id) {
                old++;
            }
            return {
                ...itm,
                numberOfUnits: old,
            };
        });
    } else {
        const item = productList.find((item) => item.id == id);
        cart.push({ ...item, numberOfUnits: 1 });
    }
    updateCart();
};

let adjustUnits = (action, id) => {
    cart = cart
        .map((item) => {
            let currentUnit = item.numberOfUnits;
            if (item.id == id) {
                if (action == "add") {
                    currentUnit++;
                } else {
                    currentUnit--;
                }
            }
            return {
                ...item,
                numberOfUnits: currentUnit,
            };
        })
        .filter((item) => item.numberOfUnits > 0);
    updateCart();
};

const renderPlaceYourOrder = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
    });
    console.log(totalPrice);
    document.querySelector(".paid").innerHTML = `<p>Total</p>
    <span>${totalPrice}$</span>
    <button>Thanh Toán</button>`;
};

const removeItem = (id) =>{
    console.log(id);
    cart = cart.filter((item) => {
        return item.id != id;
    });
    updateCart();
};

function updateCart() {
    renderProduct();
    renderCart(cart);
    renderPlaceYourOrder();
    localStorage.setItem("cart", JSON.stringify(cart));
};

updateCart();

function addProduct() {
    var namePro = document.getElementById("productname").value;
    var pricePro = document.getElementById("priceproduct").value;
    var imagePro = document.getElementById("imageproduct").value;
    var description = document.getElementById("description").value;
    var typePro = document.getElementById("typeproduct").value;
    return{
        image: imagePro,
        name: namePro,
        price: pricePro,
        description: description,
        type: typePro,
    };
}

// add more products

document.getElementById("btn-addProduct").addEventListener("click", function () {
    var newProduct = addProduct();
    axios({
      url: `${BASE_URL}/cybershop`,
      method: "POST",
      data: newProduct,
    })
      .then(function (res) {
        console.log("created", res);
      })
      .catch(function (err) {
        console.log("created err", err);
      });
});

function deleteProduct(id) {
    axios({
      url: `${BASE_URL}/cybershop/${id}`,
      method: "DELETE",
    })
      .then(function (res) {
        console.log("delete", res);
        cart = cart.filter((item) => item.id != id);
        updateCart();
      })
      .catch(function (err) {
        console.log("delete err", err);
      });
}

document.getElementById("btn-updateProduct").addEventListener("click", function () {
    var productUpdated = addProduct();
    axios({
      url: `${BASE_URL}/cybershop/${idUpdateProduct}`,
      method: "PUT",
      data: productUpdated,
    });
});

var idUpdateProduct = null;

function editProduct(id) {
    idUpdateProduct = id;
    $("#myModal").modal("show");
    axios({
      url: `${BASE_URL}/cyber/${id}`,
      method: "GET",
    })
      .then(function (res) {
        console.log("editProduct", res);
        let sanPham = res.data;
        document.getElementById("productname").value = sanPham.name;
        document.getElementById("priceproduct").value = sanPham.price;
        document.getElementById("imageproduct").value = sanPham.image;
        document.getElementById("description").value = sanPham.description;
        document.getElementById("typeproduct").value = sanPham.type;
      })
      .catch(function (err) {
        console.log("editProduct err", err);
      });
};

document.getElementById("btn-updateProduct").addEventListener("click", function () {
    var productUpdated = addProduct();
    axios({
      url: `${BASE_URL}/cybershop/${idUpdateProduct}`,
      method: "PUT",
      data: productUpdated,
    });
});

window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.addToCart = addToCart;
window.removeItem = removeItem;
window.adjustUnits = adjustUnits;