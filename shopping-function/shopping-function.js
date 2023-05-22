let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}



//<!--=======================TEST===============================================-->
//window.localStorage.setItem("titel", "boek");
//const product_one = {
//    title: "boek",
//    price: '€15',
//    qty
//};



let tbody = document.getElementById("tbody");




for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr');


    //let data_text = document.getElementById("product_data");
    //data_text.textContent = item.title;
    //document.getElementById("product_data").innerHTML = data_text;

    //voeg titel toe aan tabel
    let title_td = document.createElement('td');
    title_td.textContent = item.title;
    tr.appendChild(title_td);

    //voeg prijs toe aan tabel  
    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    //voeg aantal toe aan tabel
    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

    let desc_td = document.createElement("td");
    desc_td.textContent = item.description;
    tr.appendChild(desc_td);

    //let description = document.createElement("td");
    //description.textContent = item.description;
    //tr.appendChild(description);
   
    tbody.appendChild(tr);

  

}