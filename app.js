// const { createElement } = require("react");

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close-btn");
const recentOrder = document.querySelector(".recent_orders");
const customers = document.querySelector("#customers");
const date = document.querySelector('.date');
let dashbord = document.querySelector('#dashbord');

const sidebar = document.querySelector(".sidebar");

let showCart = document.querySelector("#carts");
const product = document.querySelector("#product");

let api = "https://dummyjson.com/carts";
let comments = 'https://dummyjson.com/comments';
const main = document.querySelector("#main");

const msg = document.querySelector('#msg');

msg.addEventListener('click', ()=>{
    dashbord.innerText = "Massage";
    customers.classList.remove("active");
    msg.classList.add("active");
    product.classList.remove("a");
    showCart.style.display = "none";
    date.style.display= 'none';
    getComment();
})


async function getComment() {
    let responce = await fetch(comments);
    let data = await responce.json();

    let msg = data.comments;
    console.log(msg);

    msg.forEach((msg)=>{
        console.log(msg);

        let div = document.createElement("div");
        div.classList = "comment";

        div.innerHTML = `
        
        <p><b>Comment : </b> ${msg.body} </p>
        <p>Post Id : <b>${msg.id}</b> </p>
        <p>Likes : <b>${msg.likes}</b> </p>
        <hr>
        <div id="userId">
            <p>User Id : <b>${msg.user.id}</b></p>
            <p>User Name : <b>${msg.user.username}</b></p>
            <p>User Full Name : <b>${msg.user.fullName}</b></p>
        </div>
        
        
        
        
        `;
        
        main.append(div);
    })
    
}

//=====================================================================
product.addEventListener("click", () => {
  customers.classList.remove("active");
  product.classList.add("active");
  product.classList.remove("a");
  showCart.style.display = "none";
  date.style.display= 'none';
  getData();
});

async function getData() {
  let responce = await fetch(api);
  let data = await responce.json();

  let carts = data.carts;

  console.log(carts);

  carts.forEach((carts) => {
    // console.log(carts);
    let div = document.createElement("div");
    div.classList = "box";

    let product = carts.products;

    product.forEach((product) => {
      console.log(product);
      div.innerHTML = `
        
        <img src= ${product.thumbnail}/>
        <p> Product Title${product.title}</p>
        <h4>Price    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp            ${product.price}</h4>
        <P>Quantity  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp                    ${product.quantity} </p>
        <h3>Total  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp                      ${product.total}</h3>
        <h3>Discount Percentage &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         ${product.discountPercentage}%</h3>
        <h3>Discounted Total   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          ${product.discountedTotal}%</h3>
        
        `;
    });

    main.append(div);
  });
}

const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
