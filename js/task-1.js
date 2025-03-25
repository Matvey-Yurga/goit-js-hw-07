const categoriesList = document.querySelector("#categories")
const categories = categoriesList.querySelectorAll(".item")
console.log("Number of categories:" ,categories.length);
categories.forEach(cate => {
    const title = cate.querySelector("h2").textContent
    const element = cate.querySelectorAll("ul li")
    console.log("Category:", title)
    console.log("Element:", element.length)
})


    