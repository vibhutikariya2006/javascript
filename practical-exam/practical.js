let products = [];

let productcontainer =
document.getElementById("products");

let editid = null;

const searchInput =
document.getElementById("searchBtn");

const sortSelect =
document.getElementById("sort");



async function addProductToList(){

    let local =
    localStorage.getItem("products");

    if(local){

        products =
        JSON.parse(local);

        ShowProducts();

        return;
    }

    try{

        const res =
        await fetch(
            "https://dummyjson.com/products"
        );

        if(!res.ok){

            throw new Error(
                "API Cannot be fetched"
            );
        }

        const data =
        await res.json();

        products =
        data.products;

        saveData();

        ShowProducts();

    }
    catch(error){

        console.log(error);

    }
}

addProductToList();



function ShowProducts(){

    productcontainer.innerHTML = "";

    for(let i = 0; i < products.length; i++){

        let product =
        products[i];

      productcontainer.innerHTML += `

<div class="bg-white rounded-[30px] overflow-hidden shadow-lg">

    <img
        src="${product.thumbnail}"
        class="w-full h-72 object-cover hover:scale-[1.1]"
    >

    <div class="p-5">

        <div class="flex justify-between">

            <h2 class="font-bold text-xl">
                ${product.title}
            </h2>

            <span>
                ₹${product.price}
            </span>

        </div>

        <p class="text-gray-500 mt-2">
            ${product.category}
        </p>

        <div class="flex gap-2 mt-5">

            <button
                class="edit-btn bg-black text-white px-5 py-2 rounded-full hover:bg-white hover:text-black hover:border-[1px] hover:border-black"
                data-id="${product.id}">
                Edit
            </button>

            <button
                class="delete-btn border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-[#f7a2a0] hover:text-white hover:border-none"
                data-id="${product.id}">
                Delete
            </button>

        </div>

    </div>

</div>

`;
    }
}



const addBtn =
document.getElementById("addBtn");

addBtn.addEventListener(
    "click",
    AddProduct
);

function AddProduct(){

    let title =
    document.getElementById("title").value;

    let price =
    document.getElementById("price").value;

    let image =
    document.getElementById("image").value;

    let category =
    document.getElementById("category").value;

    if(
        title == "" ||
        price == "" ||
        image == "" ||
        category == ""
    ){

        alert("All fields are required");

        return;
    }

    let product = {

        id: Date.now(),

        title: title,

        price: Number(price),

        thumbnail: image,

        category: category

    };

    products.push(product);

    saveData();

    ShowProducts();

    clearForm();
}



productcontainer.addEventListener(
    "click",
    function(event){

        if(
            event.target.classList.contains(
                "edit-btn"
            )
        ){

            let id =
            Number(
                event.target.dataset.id
            );

            editProducts(id);
        }

        if(
            event.target.classList.contains(
                "delete-btn"
            )
        ){

            let id =
            Number(
                event.target.dataset.id
            );

            deleteProducts(id);
        }
    }
);

function editProducts(id){

    editid = id;

    for(let i = 0; i < products.length; i++){

        if(products[i].id == id){

            document.getElementById(
                "title"
            ).value =
            products[i].title;

            document.getElementById(
                "price"
            ).value =
            products[i].price;

            document.getElementById(
                "image"
            ).value =
            products[i].thumbnail;

            document.getElementById(
                "category"
            ).value =
            products[i].category;

            break;
        }
    }
}



const updateBtn =
document.getElementById("updateBtn");

updateBtn.addEventListener(
    "click",
    UpdateProduct
);

function UpdateProduct(){

    if(editid == null){

        alert(
            "Select the product first"
        );

        return;
    }

    let title =
    document.getElementById("title").value;

    let price =
    document.getElementById("price").value;

    let image =
    document.getElementById("image").value;

    let category =
    document.getElementById("category").value;

    for(let i = 0; i < products.length; i++){

        if(products[i].id == editid){

            products[i].title =
            title;

            products[i].price =
            Number(price);

            products[i].thumbnail =
            image;

            products[i].category =
            category;

            break;
        }
    }

    saveData();

    ShowProducts();

    clearForm();

    editid = null;
}



function deleteProducts(id){

    let result =
    confirm("Delete Product?");

    if(!result){

        return;
    }

    let newProducts = [];

    for(let i = 0; i < products.length; i++){

        if(products[i].id != id){

            newProducts.push(
                products[i]
            );
        }
    }

    products = newProducts;

    saveData();

    ShowProducts();
}



searchInput.addEventListener(
    "keyup",
    searchProduct
);

function searchProduct(){

    let searchText =
    searchInput.value.toLowerCase();

    let cards = "";

    for(let i = 0; i < products.length; i++){

        if(
            products[i].title
            .toLowerCase()
            .includes(searchText)
        ){

            cards += `

            <div class="bg-white rounded shadow p-4">

                <img
                    src="${products[i].thumbnail}"
                    class="w-full h-48 object-cover rounded"
                >

                <h2 class="font-bold text-lg mt-3">
                    ${products[i].title}
                </h2>

                <p class="text-green-600 font-semibold">
                    ₹ ${products[i].price}
                </p>

                <p>
                    ${products[i].category}
                </p>

            </div>

            `;
        }
    }

    productcontainer.innerHTML =
    cards;
}


// ================= SORT =================

sortSelect.addEventListener(
    "change",
    sortProducts
);

function sortProducts(){

    let value =
    sortSelect.value;

    if(value === "low"){

        products.sort(function(a,b){

            return a.price - b.price;

        });
    }

    if(value === "high"){

        products.sort(function(a,b){

            return b.price - a.price;

        });
    }

    ShowProducts();
}



function saveData(){

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}



function clearForm(){

    document.getElementById(
        "title"
    ).value = "";

    document.getElementById(
        "price"
    ).value = "";

    document.getElementById(
        "image"
    ).value = "";

    document.getElementById(
        "category"
    ).value = "";
}