fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    let container = document.getElementById("container")
    for(var obj of data){
       let item = document.createElement("div")
       item.className = "item1 p-2 "
       item.innerHTML =`
       <img src="${obj.image}">
       <p class="text ">${obj.title} - <span class="price text-warning">${obj.price}</span></p>
       <p class="rating">⭐${obj.rating.rate}</p>
       <p class="cate text-danger">${obj.category}</p>
       `
       container.appendChild(item);
    }
})
.catch(err=>console.error(err))

 
 