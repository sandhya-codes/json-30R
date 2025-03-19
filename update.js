
// // //  fetch("http://localhost:8000/product")
// // //  .then(res => res.json())
// // //  .then(data =>console.log(data))
// // async function display(){
// //    let res = await fetch("http://localhost:8000/product")
// //    let data = await res.json()
// //    // console.log(data)
// //    data.forEach(function(obj){
// //       console.log(obj)
// //    })
// // }
// // display()




// // fetch("http://localhost:8000/product", {
// //    method:"POST",
// //    headers :{
// //       "Content-Type" :"application/json"
// //    },
// //    body : JSON.stringify({
// //       name : "sandhya",
// //       id :"1123"
// //    })
// // }).then(res=>{
// //    return res.json()})
// //    .then(data =>console.log(data))



// let container = document.getElementById("container")
// function getData(){
//    fetch("http://localhost:8000/product")
//    .then(res=> res.json())
//    .then(data =>displaydata(data))
//    }
   
//    function displaydata(products){
//       fetch("http://localhost:8000/product")
//       .then(res => res.json()
//       .then(res.ok))

//        products.forEach(obj =>{
//            let item = document.createElement("div")
//            item.className ="item"
//            item.innerHTML = 
//            `
//            <p>${obj.id}<p>
//            <p>${obj.title}</p>
//            <p>${obj.description}</p>
//            <button onclick= deletedata('${obj.id}')>delete</button>
//            `
//            container.appendChild(item)
//        })
//    }
//    getData()


//    function displaydata(){
//       fetch("http://localhost:8000/product")
//       .then(res => res.json())
//       .then(data =>  { 
//        data.forEach(obj =>{
//            let item = document.createElement("div")
//            item.className ="item"
//            item.innerHTML = 
//            `
//            <p>${obj.id}<p>
//            <p>${obj.title}</p>
//            <p>${obj.description}</p>
//            <button onclick= deletedata('${obj.id}')>delete</button>
//            `
//            container.appendChild(item)
//        })
//    })
//    }
// displaydata()

// async   function displaydata(){
//    try {
//      let res = await fetch("http://localhost:8000/product")
//      let data = await res.json()
//       data.forEach(obj =>{
//           let item = document.createElement("div")
//           item.className ="item"
//           item.innerHTML = 
//           `
//           <p>${obj.id}<p>
//           <p>${obj.title}</p>
//           <p>${obj.description}</p>
//           <button onclick= deletedata('${obj.id}')>delete</button>
//           `
//           container.appendChild(item)
//       })
//    } catch (error) {
//      console.log("error")
//    }
//   }
// displaydata()

// ---------------------
// let container = document.getElementById("container")
// let btn = document.getElementById("btn")
// // async function adddata(){
//    btn.addEventListener("click",function(){
//       let title = document.getElementById("title")
//       let price = document.getElementById("price")
//       if(title.value == "" || price.value == ""){
//          alert("enter data")
//      }
//      else{ 
//          let options = {
//             "method" :"POST",
//             "headers" : {
//             "Content-Type" : "application/json"
//             },
//             "body" :JSON.stringify({
//                "title" : title.value,
//                "price" : price.value
//             })
//          }
//          fetch("http://localhost:8000/product",options)
//          .then(res =>{
//             if(res.ok){
//                // title.value =""
//                //  price.value =""
//                //  console.log(title.value,price.value)
//                alert("data added")
//                displaydata()
             
//             }
//          })
//  }
//  } 
// )
// // }




// async function displaydata(){
//    let res = await fetch("http://localhost:8000/product")
//    let data = await res.json()
//       data.forEach(ele => {
//          let item =document.createElement("div")
//          item.className = "item"
//          item.innerHTML = `
//          <img src="${ele.image}">
//          <p>${ele.id}</p>
//          <p>${ele.title}</p>
//          <p>${ele.price}</p>

//          <button onclick="deletedata(${ele.id})">delete</button>
   
//          `
//          container.appendChild(item)
//       });
// }
// async function deletedata(id) {
//    try{
//       let res = await fetch(`http://localhost:8000/product/${id}`,options = {
//          "method":"DELETE" })
//       if(res.ok){
//          alert("data deleted")
//          displaydata()
//       }
//    }catch(err){
//       console.log(err)
//    }
// }

// displaydata()


// // fetch("http://localhost:8000/product", {
// //    method:"POST",
// //    headers :{
// //       "Content-Type" :"application/json"
// //    },
// //    body : JSON.stringify({
// //       name : "sandhya",
// //       id :"1123"
// //    })
// // }).then(res=>{
// //    return res.json()})
// //    .then(data =>console.log(data))

// // ---------------



let container = document.createElement("div")
let url = "http://localhost:8000/product"
// let title = document.getElementsById("title")
let title = document.getElementById("title")
let price = document.getElementById("price")
let descriptionInput = document.getElementById("description")
let btn = document.getElementById("btn")
// let id = document.getElementById("id")
let idInput1 = document.getElementById("id")

btn.addEventListener("click",async function(){
        if(title.value == "" || price.value =="" || descriptionInput ==""){
            alert("enter the data")
        }else{
             let method = idInput1.value ? "PUT" :"POST"
             let mainUrl = (method == "PUT" )? `${url}/${idInput1.value}` :url
             try{
                let response = await fetch(mainUrl,{
                    method,
                    "headers" :{
                         "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "title": title.value,
                        "price": price.value,
                        "description": descriptionInput.value
                    })
                })

                if (response.ok) {
                    getData();
                    alert((method == "PUT") ? "Data Updated" : "Data Added");
                }
            } catch (err) {
                console.error(err);
            }

             }

})
        async function getdata() {
            try{
                let response = await fetch(url)
                if(response.ok){
                    let data = await response.json()
                    displaydata(data)
                } 
            }
            catch(err){
                console.error(err)
            }
        }

function displaydata(products){
    container.innerHTML=``;
    products.forEach(obj => {
        let item = document.createElement("div")
        item.innerHTML =
        `
        <p>${obj.title}</p>
        <p>${obj.description}</p>
        <button onclick=deletedata('${obj.id}')>delete</button>
        <button onclick=updatedata('${obj.id}')>update</button>
        `
        container.appendChild(item)
        
    });
    document.body.appendChild(container)
}





async function updatedata(id) {
  try{
    let res = await fetch(`${url}/${id}`)
    let obj = await res.json()
    idInput1.value = obj.id
    title.value = obj.title
    price.value = obj.price
    descriptionInput.value = obj.price
    window.scroll(0,0)
  }
  catch(err){
    console.log(err)
  }
}






async function deletedata(id){
    try{
        let response = await fetch(`${url}/${id}`,{"method" :"DELETE"})
    if(response.ok){
        alert("data deleted")
        console.log("data deleted")
        getdata()
        
    }
    }
    catch(err){
        console.log(err)
    }
}
getdata()







// // ...........
// // // let container = document.getElementById("container");
// // // let url = "https://branch-silver-narwhal.glitch.me/products";

// // // let titleInput = document.getElementById("title");
// // // let priceInput = document.getElementById("price");
// // // let descriptionInput = document.getElementById("description");
// // // let idInput = document.getElementById("id");
// // // let btn = document.getElementById("btn");

// // // btn.addEventListener("click", async function () {
// // //     if (titleInput.value == '' || priceInput.value == "" || descriptionInput.value == '') {
// // //         alert("enter data properly");
// // //     } else {
// // //         let method = idInput.value ? "PUT" : "POST";
// // //         let mainUrl = (method == "PUT") ? `${url}/${idInput.value}` : url;
// // //         try {
// // //             let response = await fetch(mainUrl, {
// // //                 method,
// // //                 "headers": {
// // //                     "Content-Type": "application/json"
// // //                 },
// // //                 "body": JSON.stringify({
// // //                     "title": titleInput.value,
// // //                     "price": priceInput.value,
// // //                     "description": descriptionInput.value
// // //                 })
// // //             });
// // //             if (response.ok) {
// // //                 getData();
// // //                 alert((method == "PUT") ? "Data Updated" : "Data Added");
// // //             }
// // //         } catch (err) {
// // //             console.error(err);
// // //         }
// // //     }
// // // });

// // // async function getData() {
// // //     try {
// // //         let response = await fetch(url);
// // //         if (response.ok) {
// // //             let data = await response.json();
// // //             displayData(data);
// // //         }
// // //     } catch (err) {
// // //         console.error(err);
// // //     }
// // // }
// // // function displayData(products) {
// // //     container.innerHTML = ``;
// // //     products.forEach(obj => {
// // //         let item = document.createElement("div");
// // //         item.innerHTML = `
// // //             <p>${obj.title}</p>
// // //             <p>${obj.description}</p>
// // //             <p>${obj.price}</p>
// // //             <button onclick = deleteData('${obj.id}')>Delete</button>
// // //             <button onclick = updateData('${obj.id}')>Update</button>
// // //         `;
// // //         container.appendChild(item);
// // //     })
    
// // // }

// // // async function updateData(id) {
// // //     try {
// // //         let response = await fetch(`${url}/${id}`);
// // //         let obj = await response.json();
// // //         titleInput.value = obj.title;
// // //         priceInput.value = obj.price;
// // //         descriptionInput.value = obj.description;
// // //         idInput.value = obj.id;
// // //         window.scroll({
// // //             top: 0,
// // //             behavior: "smooth"
// // //         });

// // //     } catch (err) {
// // //         console.error(err)
// // //     }
// // // }

// // // async function deleteData(id) {
// // //     try {
// // //         let response = await fetch(`${url}/${id}`, { "method": "DELETE" })
// // //         if (response.ok) {
// // //             getData();
// // //             alert("Data Deleted");
// // //         }
// // //     }
// // //     catch (err) {
// // //         console.error(err);
// // //     }
// // // }

// // // getData();
//  ............