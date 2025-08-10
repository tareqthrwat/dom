let products = [
    { id: 1, Name: 'iPhone x', Price: 400 },
    { id: 2, Name: 'iPhone 11', Price: 450 },
    { id: 3, Name: 'iPhone 12', Price: 500 },
    { id: 4, Name: 'iPhone 13', Price: 600 },
    { id: 5, Name: 'iPhone 14', Price: 750 },
];
let productesDiv = document.querySelector('#productesDiv');
let table = document.querySelector('table tbody');
let TotalSpan = document.querySelector('#totalSpan');
let showProductes = () => {
    products.forEach((el, index) => {
        productesDiv.innerHTML += `
          <div class="col-12 p-2">
                <div class="col-12 p-3 bg-white shadow rounded border">
                    <h1> ${el.Name} </h1>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0"> ${el.Price}  $</p>
                        <button class="btn btn-success" onclick="addphoneCart(${index})" >Add To Cart</button>
                    </div>
                </div>
            </div></div>
`
    })
};
let cart = [
    // { id: 1, Name: 'iPhone x', Price: 400, Qty: 3 },
    // { id: 2, Name: 'iPhone 11', Price: 450, Qty: 5 },
]
let getTotle = () => {
    let finle = 0;
    cart.forEach((el) => {
        finle += el.Price * el.Qty;
    });
    TotalSpan.innerText = finle;
};
let showCart = () => {
    cart.forEach((el, index) => {
        table.innerHTML += `
                    <tr>
                        <td> ${index + 1} </td>
                        <td> ${el.Name} </td>
                        <td> ${el.Price} $</td>
                        <td>
                            <div class="d-flex align-items-center justify-content-center gap-3">
                                <button class= " btn btn-danger">-</button>
                                <p class="mb-0"> ${el.Qty} </p>
                                <button class="btn btn-success">+</button>
                            </div>
                        </td>
                        <td> ${el.Qty * el.Price} $</td>
                        <td> <button class="btn btn-danger">Del</button></td>
                    </tr>
    `
    })
    getTotle()
};
showCart()
showProductes();
// ______________________myModal________________________
let myModal = document.querySelector('.myModal');
// ______________________________________________________________________________________
let idforphone = document.querySelector('#idforphone');
let Namephone = document.querySelector('#Namephone');
let Pricephone = document.querySelector('#Pricephone');
let addphone = document.querySelector('#addphone');
// _______________________________________________________________________________________


let showmyModal = () => {
    myModal.style.display = 'flex';
}
let clossmodal = () => {
    myModal.style.display = 'none';
}
let addnewphone = () => {
    let idforphoneindex = idforphone.value;
    let Namephoneindex = Namephone.value;
    let Pricephoneindex = Pricephone.value;
    let newobj = { id: idforphoneindex, Name: Namephoneindex, Price: Pricephoneindex, Qty: +1 };
    products.push(newobj);
    showProductes()
    idforphoneindex.value = '';
    Namephoneindex.value = '';
    Pricephoneindex.value = '';
};
addphone.addEventListener('click', () => {
    addnewphone();
    clossmodal();
});


// _______________add to cart ________________
let addphoneCart = (seletedIndex) => {
    table.innerHTML = ``
    products.Name=products[seletedIndex].Name
    products.Price=products[seletedIndex].Price
    cart.push(newobj)
    showCart()
}