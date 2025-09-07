// Calling elements
const showCategoriesContainer = document.getElementById("showCategories");
const showPlants = document.getElementById("showAllPlants");
const cartContainer = document.getElementById("cartContainer")

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
    showPlants.innerHTML += `<div class="p-4 bg-white rounded-lg mb-3">
              <img class="rounded-lg mb-3 h-[186px] w-full" src="${plant.image}" alt="${plant.name}">
              <h3 onclick="loadPlantDetail(${plant.id})" class="cursor-pointer text-sm font-semibold mb-2">${plant.name}</h3>
              <p class="text-xs mb-2">${plant.description}</p>
              <div class="flex justify-between mb-3">
                <h3 class="bg-[#DCFCE7] rounded-[400px] text-sm text-[#15803D] px-3 py-1">${plant.category}</h3>
                <p class="text-sm font-semibold">৳${plant.price}</p>
              </div>
              <button class="w-full text-center rounded-[999px] bg-[#15803D] text-white py-3">Add to Cart</button>
            </div>`;
  });
  
};
// load plant details for modal
const loadPlantDetail = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  .then((res) => res.json())
  .then((data) => {
    showPlantDetail(data);
  })
}

const showPlantDetail = (detail) => {
  const detailContainer = document.getElementById("detailContainer")
  detailContainer.innerHTML = "hello everyone"
  document.getElementById("plantDetail").showModal()
}


const showModal = (plantName) => {
showPlants.addEventListener("click", (e) => {
  if(e.target === plantName)
  console.log(plantName)
})};

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
  allPlants.forEach((plants) => {
    console.log(plants)
    const showAllPlants = document.getElementById("showAllPlants");
    showAllPlants.innerHTML += `<div class="p-4 bg-white rounded-lg mb-3">
              <img class="rounded-lg mb-3 h-[186px] w-full" src="${plants.image}" alt="${plants.name}">
              <h3 onclick="loadPlantDetail(${plants.id})" class="cursor-pointer text-sm font-semibold mb-2">${plants.name}</h3>
              <p class="text-xs mb-2">${plants.description}</p>
              <div class="flex justify-between mb-3">
                <h3 class="bg-[#DCFCE7] rounded-[400px] text-sm text-[#15803D] px-3 py-1">${plants.category}</h3>
                <p class="text-sm font-semibold">৳${plants.price}</p>
              </div>
              <button class="w-full text-center rounded-[999px] bg-[#15803D] text-white py-3">Add to Cart</button>
            </div>`;
  });
  // console.log(category)
};
