export const renderProducts = (products) => {
    var contentHTML = "";
    products.forEach((product) => {contentHTML += 
        `<div class="box">
            <div class="item">
                <img src="${product.image}"/>
                <p>${product.name}</p>
                <p>${product.price}</p>
                <button class="bttn btn-cart onclick="addToCart(${product.id})">cart</button>
                <button class="bttn btn-edit onclick="editProduct(${product.id})">edit</button>
                <button class="bttn btn-del onclick="deleteProduct(${product.id})">delete</button>  
            </div>
        </div>`;
    });
    document.querySelector(".list").innerHTML = contentHTML;
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
                <button onclick="adjustUnits('add',${product.id})">+</button>
                <button onclick="adjustUnits('minus',${product.id})">-</button>
            </td>
            <td>${product.price * product.numberOfUnits}
                <button onclick="removeItem(${product.id})">X</button>
            </td>
        </tr>`;
    });
    document.querySelector(".tbody").innerHTML = contentHTML;
};

export const optionSelect = (products, state) => {
    if (state === "none") return products;
    const finalProducts = products.filter((product) => {
        return product.type === state;
    });
    console.log(finalProducts);
    return finalProducts;
};