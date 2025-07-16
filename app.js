// // const { createElement } = require("react");

// const sideMenu = document.querySelector("aside");
// const menuBtn = document.querySelector("#menu_bar");
// const closeBtn = document.querySelector("#close-btn");
// const recentOrder = document.querySelector(".recent_orders");
// const customers = document.querySelector("#customers");
// const date = document.querySelector('.date');
// let dashbord = document.querySelector('#dashbord');

// const sidebar = document.querySelector(".sidebar");

// let showCart = document.querySelector("#carts");
// const product = document.querySelector("#product");

// let api = "https://dummyjson.com/carts";
// let comments = 'https://dummyjson.com/comments';
// const main = document.querySelector("#main");

// const msg = document.querySelector('#msg');

// msg.addEventListener('click', ()=>{
//     dashbord.innerText = "Massage";
//     customers.classList.remove("active");
//     msg.classList.add("active");
//     product.classList.remove("a");
//     showCart.style.display = "none";
//     date.style.display= 'none';
//     getComment();
// })

// async function getComment() {
//     let responce = await fetch(comments);
//     let data = await responce.json();

//     let msg = data.comments;
//     console.log(msg);

//     msg.forEach((msg)=>{
//         console.log(msg);

//         let div = document.createElement("div");
//         div.classList.add("comment");

//         div.innerHTML = `

//         <p><b>Comment : </b> ${msg.body} </p>
//         <p>Post Id : <b>${msg.id}</b> </p>
//         <p>Likes : <b>${msg.likes}</b> </p>
//         <hr>
//         <div id="userId">
//             <p>User Id : <b>${msg.user.id}</b></p>
//             <p>User Name : <b>${msg.user.username}</b></p>
//             <p>User Full Name : <b>${msg.user.fullName}</b></p>
//         </div>

//         `;

//         main.append(div);
//     })

// }

// //=====================================================================
// product.addEventListener("click", () => {
//   customers.classList.remove("active");
//   product.classList.add("active");
//   product.classList.remove("a");
//   showCart.style.display = "none";
//   date.style.display= 'none';
//   getData();
// });

// async function getData() {
//   let responce = await fetch(api);
//   let data = await responce.json();

//   let carts = data.carts;

//   console.log(carts);

//   carts.forEach((carts) => {
//     // console.log(carts);
//     let div = document.createElement("div");
//     div.classList = "box";

//     let product = carts.products;

//     product.forEach((product) => {
//       console.log(product);
//       div.innerHTML = `

//         <img src= ${product.thumbnail}/>
//         <p> Product Title${product.title}</p>
//         <h4>Price    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp            ${product.price}</h4>
//         <P>Quantity  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp                    ${product.quantity} </p>
//         <h3>Total  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp                      ${product.total}</h3>
//         <h3>Discount Percentage &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp         ${product.discountPercentage}%</h3>
//         <h3>Discounted Total   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          ${product.discountedTotal}%</h3>

//         `;
//     });

//     main.append(div);
//   });
// }

// const themeToggler = document.querySelector(".theme-toggler");

// menuBtn.addEventListener("click", () => {
//   sideMenu.style.display = "block";
// });
// closeBtn.addEventListener("click", () => {
//   sideMenu.style.display = "none";
// });

// themeToggler.addEventListener("click", () => {
//   document.body.classList.toggle("dark-theme-variables");

//   themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
//   themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
// });

// ====================================================================

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close-btn");
const customers = document.querySelector("#customers");
const date = document.querySelector(".date");
const dashboardTitle = document.querySelector("#dashbord");
const sidebar = document.querySelector(".sidebar");
const showCart = document.querySelector("#carts");
const productBtn = document.querySelector("#product");
const main = document.querySelector("#main");
const msgBtn = document.querySelector("#msg");
const themeToggler = document.querySelector(".theme-toggler");
const analytics = document.querySelector('#analytics');

const cartsApi = "https://dummyjson.com/carts";
const commentsApi = "https://dummyjson.com/comments";

// Helper function to reset UI state
function resetUI() {
  customers.classList.remove("active");
  productBtn.classList.remove("active");
  msgBtn.classList.remove("active");
  showCart.style.display = "none";
  date.style.display = "none";
  main.innerHTML = ""; // Clear previous content
}
// Analytics ata display

async function getAnaltics() {
  resetUI();
  dashboardTitle.innerText = "Anayltics";
  analytics.classList.add("active");

  
}
// Fetch and display comments
async function getComments() {
  resetUI();
  dashboardTitle.innerText = "Messages";
  msgBtn.classList.add("active");

  try {
    const response = await fetch(commentsApi);
    const data = await response.json();

    data.comments.forEach((comment) => {
      const div = document.createElement("div");
      div.classList.add("comment");

      div.innerHTML = `
                <p><b>Comment:</b> ${comment.body}</p>
                <p><b>Post Id:</b> ${comment.id}</p>
                <p><b>Likes:</b> ${comment.likes}</p>
                <div class="user-info">
                    <p><b>User Id:</b> ${comment.user.id}</p>
                    <p><b>Username:</b> ${comment.user.username}</p>
                    <p><b>Full Name:</b> ${comment.user.fullName}</p>
                </div>
                <hr>
            `;
      main.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    main.innerHTML = "<p>Error loading comments.</p>";
  }
}

// Fetch and display cart products
async function getCartData() {
  resetUI();
  dashboardTitle.innerText = "Products";
  productBtn.classList.add("active");

  try {
    const response = await fetch(cartsApi);
    const data = await response.json();

    data.carts.forEach((cart) => {
      const div = document.createElement("div");
      div.classList.add("box");

      cart.products.forEach((product) => {
        div.innerHTML += `
                    <img src="${product.thumbnail}" alt="${product.title}" style="background-size: cover;"/>
                    <p><b>Product:</b> ${product.title}</p>
                    <p><b>Price:</b> $${product.price}</p>
                    <p><b>Quantity:</b> ${product.quantity}</p>
                    <p><b>Total:</b> $${product.total}</p>
                    <p><b>Discount %:</b> ${product.discountPercentage}%</p>
                    <p><b>Discounted Total:</b> $${product.discountedTotal}</p>
                    <hr>
                `;
      });

      main.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    main.innerHTML = "<p>Error loading products.</p>";
  }
}

// Sidebar toggle events
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Theme toggle
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Menu event listeners
analytics.addEventListener("click",getAnaltics);
msgBtn.addEventListener("click", getComments);
productBtn.addEventListener("click", getCartData);
