export const renderProduct = (products) => {
    var contentHTML = "";
    products.forEach((product) => {contentHTML += 
        `<div class="box">
            <div class="item">
                <img src="${product.image}"/>
                <p>${product.name}</p>
                <button class="btn btn-cart onclick="addToCart(${product.id})">cart</button>
                <button class="btn btn-edit onclick="editProduct(${product.id})">edit</button>
                <button class="btn btn-del onclick="deleteProduct(${product.id})">delete</button>  
            </div>
        </div>`;
    });
    document.querySelector(".box").innerHTML = contentHTML;
};

export const renderCart = (products) => {
    var contentHTML = "";
    products.forEach((product) => {
        contentHTML += 
        `<tr>
            <td><img src="${product.image}" alt=""/></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.numberOfUnits}
                <button onclick="addUnits('add',${product.id})">+</button>
                <button onclick="minusUnits('minus',${product.id})">-</button>
            </td>
            <td>${product.price * product.numberOfUnits}
                <button onclick="removeItem(${product.id})">X</button>
            </td>
        </tr>`;
    });
    document.querySelector(".tbody").innerHTML = contentHTML;
};