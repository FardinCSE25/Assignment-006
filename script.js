// Calling elements
const showCategoriesContainer = document.getElementById("showCategories");
const showPlants = document.getElementById("showAllPlants");
const cartContainer = document.getElementById("cartContainer");
const totalAmount = document.getElementById("totalAmount");

let cart = [];

// getting categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories;
      showCategories(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};
loadCategories();
// show categories

const showCategories = (categories) => {
  categories.forEach((category) => {
    showCategoriesContainer.innerHTML += `<h2 id="${category.id}" class="border-1 border-gray-500 pl-2 py-2 md:text-left text-center md:max-w-[260px] cursor-pointer rounded-md hover:bg-[#15803D] hover:text-white">${category.category_name}</h2>`;
  });
  // console.log(category)
  // active button state
  showCategoriesContainer.addEventListener("click", (e) => {
    const activeButtons = document.querySelectorAll(".activeButtons h2");
    // console.log(activeButtons);

    activeButtons.forEach((buttons) => {
      // console.log(buttons);

      buttons.classList.remove("bg-[#15803D]", "text-white");
    });
    if (e.target.localName === "h2") {
      e.target.classList.add("bg-[#15803D]", "text-white");
      loadPlantsByCategory(e.target.id);
    }
  });
};
// getting plants by categories
const loadPlantsByCategory = (id) => {
  // console.log(id);
  manageLoading(true);
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const plants = data.plants;
      showPlantByCategory(plants);
    })
    .catch((err) => {
      console.log(err);
    });
};
// show plants by category
const showPlantByCategory = (plants) => {
  showPlants.innerHTML = "";
  plants.forEach((plant) => {
    showPlants.innerHTML += `<div id='${plants.id}' class="plantDiv p-4 bg-white rounded-lg mb-3">
              <img class="rounded-lg mb-3 h-[280px] w-full" src="${plant.image}" alt="${plant.name}">
              <h3 onclick="loadPlantDetail(${plant.id})" class="inline cursor-pointer hover:bg-[#DCFCE7] hover:text-[#15803D] text-sm font-semibold">${plant.name}</h3>
              <p class="text-xs h-[70px] mt-2 mb-2">${plant.description}</p>
              <div class="flex justify-between mb-3">
                <h3 class="bg-[#DCFCE7] rounded-[400px] text-sm text-[#15803D] px-3 py-1">${plant.category}</h3>
                <p class="text-sm font-semibold"><span> ৳ </span><span class="price">${plant.price}</span></p>
              </div>
              <button class="w-full text-center rounded-[999px] bg-[#15803D] text-white py-3">Add to Cart</button>
            </div>`;
  });
  manageLoading(false);
};
// load plant details for modal
const loadPlantDetail = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => {
      showPlantDetail(data);
      console.log(data);
    });
};

// load cart detail
showPlants.addEventListener("click", (e) => {
  if (e.target.innerText === "Add to Cart") {
    const name = e.target.parentNode.children[1].innerText;
    const id = e.target.parentNode.id;
    const price = e.target.parentNode;
    const newPrice = price.querySelector(".price").innerText;
    // console.log({newPrice})
    cart.push({
      name: name,
      price: newPrice,
      id: id,
    });
    showCart(cart);
  }
});
// show cart
const showCart = (cart) => {
  console.log(cart);
  
  cartContainer.innerHTML = "";
  cart.forEach((cartDetail) => {
    cartContainer.innerHTML += `<div class="bg-[#F0FDF4] px-3 py-2 mb-1 flex justify-between items-center rounded-lg">
                <div>
                  <h1 class="mb-1 text-sm font-semibold">${cartDetail.name}</h1>
                  <p class="text-xs font-light">৳ ${cartDetail.price}</p>
                </div>
                <div onclick="deleteCart(${cartDetail.id})">
                  <i  class="text-red-600 fa-solid fa-xmark"></i>
                </div>
              </div>`;

    let total = parseInt(totalAmount.innerText);
    console.log(cartDetail.price);
    
    finalAmount = total + Number(cartDetail.price);
    totalAmount.innerText = parseInt(finalAmount);

  });
};
// delete cart
const deleteCart = (id) => {
  // console.log(id)
  const filteredCarts = cart.filter((cartDetail) => cartDetail.id != id);
  cart = filteredCarts;
  showCart(cart);
};

const showPlantDetail = (detail) => {
  // console.log(detail);

  const detailContainer = document.getElementById("detailContainer");
  detailContainer.innerHTML = `   <div>
        <h2 class="text-2xl font-semibold mb-5">${detail.plants.name}</h2>
        <img class="rounded-2xl h-[300px] w-full mb-3" src="${detail.plants.image}" alt="${detail.plants.name}">
        <h2 class="font-semibold  mb-3">Category : <span class="font-light">${detail.plants.category}</span></h2>
        <h2 class="font-semibold  mb-3">Price : <span class="font-light">  ৳${detail.plants.price}</span></h2>
        <p class="font-semibold">Description : <span class="font-light">${detail.plants.description}</span></p>
      </div>`;
  document.getElementById("plantDetail").showModal();
};

// const showModal = (plantName) => {
// showPlants.addEventListener("click", (e) => {
//   if(e.target === plantName)
//   console.log(plantName)
// })};

// manage loading
const manageLoading = (status) => {
  if (status == true) {
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("showAllPlants").classList.add("invisible");
  } else {
    document.getElementById("showAllPlants").classList.remove("invisible");
    document.getElementById("loading").classList.add("hidden");
  }
};

// getting all plants
const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      const allPlants = data.plants;
      showAllPlants(allPlants);
    })
    .catch((err) => {
      console.log(err);
    });
};
loadAllPlants();
// show all plants
const showAllPlants = (allPlants) => {
  allPlants.innerHTML = "";
  allPlants.forEach((plants) => {
    // console.log(plants)
    const showAllPlants = document.getElementById("showAllPlants");
    showAllPlants.innerHTML += `<div id='${plants.id}' class="p-4 bg-white rounded-lg mb-3">
              <img class="rounded-lg mb-3 h-[280px] w-full" src="${plants.image}" alt="${plants.name}">
              <h3 onclick="loadPlantDetail(${plants.id})" class="inline cursor-pointer text-sm  hover:bg-[#DCFCE7] hover:text-[#15803D] font-semibold ">${plants.name}</h3>
              <p class="text-xs h-[70px] mt-2 mb-2">${plants.description}</p>
              <div class="flex justify-between mb-3">
                <h3 class="bg-[#DCFCE7] rounded-[400px] text-sm text-[#15803D] px-3 py-1">${plants.category}</h3>
                <p class="text-sm font-semibold"><span>৳</span><span class="price">${plants.price}</span></p>
              </div>
              <button class="w-full text-center rounded-[999px] bg-[#15803D] text-white py-3">Add to Cart</button>
            </div>`;
    //        let total = totalAmount.innerText
    //       console.log(total)
    //       console.log(cartDetail.price)
    // finalAmount = parseInt(total + plants.price)
    // // console.log(finalAmount)
    // totalAmount.innerText = finalAmount

    // console.log(category)
  });
};
