// getting categories
const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then ((res) => res.json())
    .then ((data) => {
      const categories = data.categories
        showCategories(categories)
    })
     .catch((err) => {
      console.log(err);
    });
}
loadCategories()
// show categories

const showCategories = (categories) => {
    categories.forEach(category => {
        const showCategories = document.getElementById("showCategories")
    showCategories.innerHTML += `<h1 id="${category.id}" class="pl-2 py-2 md:text-left text-center md:max-w-[260px] cursor-pointer rounded-md hover:bg-[#15803D] hover:text-white">${category.category_name}</h1>`
    });
        // console.log(category)
    
}