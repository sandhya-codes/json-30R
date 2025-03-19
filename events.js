
let container = document.getElementById("container")
let btn1 = document.getElementById("btn1")

btn1.addEventListener("click",function(){
    let title =document.getElementById("title")
    let price =document.getElementById("price")
    // let img1 =document.getElementById("img1")
    if(title.value == "" || price.value == "")
        {
        alert("enter the data")
    }
    else{
        let options ={
        "method" : "POST",
        "headers" :{
         "Content-Type":"application/json"   
    },
    "body" :JSON.stringify({
        "title" :title.value,
        "price":price.value,
        // "img1" :img1.value
    })
    }
    fetch("http://localhost:8000/products",options)
    .then(res =>{
        if(res.ok){
            title.value =""
            price.value =""
            img1.value=""
            getData()
            // alert("data added")
            console.log(title.value)
        }
    })
}
})


function getdata(){
    fetch("http://localhost:8000/products")
    .then(res =>res.json())
    .then(data =>displaydata(data))
}

function displaydata(products){
    container.innerHTML = ``
    products.forEach(obj =>{
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = 
        `
        <img src="${obj.image}">
        <p>${obj.title}
        <p>${obj.price}
        <button onclick=deletedata('${obj.id}')>delete</button>
        `
        container.appendChild(item)
    })
}
function deletedata(id){
    let options ={
        "method" : "DELETE"
    }
    fetch(`http://localhost:8000/products/${id}`,options)
    .then(res =>{
        if(res.ok){
            getdata()
            alert("data deleted successfully")
        }
    })
    .catch(err => console.log(err))
}

getdata()



 















// // // let title = document.getElementById("title")
// // // let price = document.getElementById("price")
// // // let btn = document.getElementById("btn")


// // // function Adddata(){
// // // let options = {
// // //     "method" :"POST",
// // //     headers :{
// // //         "content-Type" :"application/json"
// // //     },
// // //     "body":JSON.stringify({
// // //         "title":title.value,
// // //         "price":price.value   
// // //  })
// // // }


// // //     fetch("http://localhost:8000/products",options)
// // //     .then(res =>{
// // //         if(res.ok){
// // //             alert("data added")
// // //             Displaydata()
// // //         }
// // //     })
// // //     .catch(err => console.log(err))
// // // }





// // // let container = document.getElementById("demo")
// // // function Displaydata(){
// // //     fetch("http://localhost:8000/products")
// // //     .then(res =>res.json())
// // //     .then(data =>{
// // //         console.log(data)
// // //         data.forEach(ele => 
// // //              {
// // //             console.log(ele)
// // //             let item = document.createElement("div")
// // //             item.className = "item1 border border-dark-subtle text-center"
// // //             item.innerHTML = `
// // //             <img src="${ele.image}">
// // //             <p>${ele.title}<p>
// // //             <p>${ele.price}</p>
// // //             <p class="des">${ele.description}</p>
// // //             <p>${ele.category}</p>
// // //             <p>${ele.rating.rate}</p>
// // //             <button class="pe-2" onclick=deletedata('${ele.id}')>delete</button>
// // //             `
// // //             container.appendChild(item)
// // //         })
        
// // //      }) 
// // //      .catch(err =>console.error(err)) 
// // //     }


// // // function deletedata(id){
// // //     fetch(`http://localhost:8000/products/${id}`,{
// // //         "method" : "DELETE"})
// // //         .then(res =>{
// // //             if(res.ok){
// // //                 alert("data deleted")
// // //                 Displaydata()
// // //             }
// // //         }).catch(err => console.log(err))
// // //     }
// // //     Displaydata()


//  ,,