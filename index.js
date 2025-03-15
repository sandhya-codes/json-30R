
let addData = function(){
    var username = document.getElementById("username").value.trim()
    var message  = document.getElementById("message").value.trim()
    var phone = document.getElementById("phone").value.trim()
    var city = document.getElementById("city").value.trim()
    var state = document.getElementById("state").value.trim()
    // console.log(username.value)
    // console.log(message.value)
    // let isvalid = true
    if(!username||!message ||!phone||!city||!state ){
        alert("enter requrired field")
        return
    }
    postData(username.value,message.value,phone.value,city.value,state.value)
}


function postData(username,message,phone,city,state){
    //    console.log(username,message)
    var url = "https://booming-deciduous-wanderer.glitch.me/users"
    var options = {

        "method" :"POST",
        "headers" :{
            "Content-Type":"application/json"
        },
        "body" :JSON.stringify({
            username,
            message,
            phone,
            city,
            state
        })
    }
fetch(url,options)
    .then(response => {
        if(response.ok){
                console.log("Data added")
                // displayData()
                alert("Data added successfully..")
            }
        })
        .catch(err =>{
            alert("Something fishy")
            console.error(err)
             
        })
}


function displayData(){
    var container = document.getElementById("container")
    container.innerHTML = "";

    fetch("https://booming-deciduous-wanderer.glitch.me/users")
        .then(response =>response.json())
        .then(data =>{
            // console.log(data)
            for(var obj of data){
                //created div 
                var item = document.createElement("div")
                // className given to div and styles
                item.className = "item m-2 p-2 border fs-2 text-uppercase border-warning"
                // creating paragraph tags to store user values
                var usernamepara =document.createElement("P")
                var messagepara =document.createElement("p")
                var citypara = document.createElement("p")
                var statepara =document.createElement("p")
                var phonepara =document.createElement("p")
                // var{username ,message,city,state,phone} = obj
                // obj data stored in var
                let username = obj.username
                let message = obj.message
                let phone = obj.phone
                let state = obj.state
                let city = obj.city

                usernamepara.innerText = username
                messagepara.innerText = message
                phonepara.innerText = phone
                citypara.innerText = city
                statepara.innerText = state

                item.appendChild(messagepara)
                item.appendChild(usernamepara)
                item.appendChild(citypara)
                item.appendChild(statepara)
                item.appendChild(phonepara)


                container.appendChild(item)                 

            }
        })
    }
displayData()







// // var url1 = "http://localhost:3000/emp"
// // var options = {
// //     "method" : "post" ,
// //     "headers" : {
// //         "Content-Type" : "application/json",
// //     },
// //     "body" :JSON.stringify( 
// //     {
// //     "id" :"5",
// //         "name" : "e",
// //         "rollno" : 113 
// // })
// // }


// // fetch(url1,options)
// //     .then(res => {
// //         if (res.ok)
// //             console.log("Data  Submitted1")
// //     }).catch(err=>console.error(err))


// // fetch(url1)
// //     .then(responce =>responce.json())
// //     .then(data =>console.log(data))

// fetch("https://booming-deciduous-wanderer.glitch.me/users",{
//     "method":"DELETE"
// }).then(res =>{
//     if (res.ok){
//         console.log("Data Deleted")
//     }
// }).catch(err =>{
//     console.error(err)
// })


// // fetch("http://localhost:3000/emp/1" ,{
// //     "method" :"POST",
// //     "headers" :{
// //         "Content-Type":"application/json"
// //     },
// //     "body" :JSON.stringify({
// //         "id" : "4",
// //         "name" :"sandhya1424"
// //     })
// // }).then(res =>{
// //     if(res.ok){
// //         console.log("Data updated")
// //     }
// // }).catch(err => console.error(err))






// // how to delete all elements from json file
// // fetch("http://localhost:3000/emp")
// //     .then(res =>res.json())
// //     .then(data =>{
// //         for(var element of data){
// //         // console.log(element.id)
// //         fetch(`http://localhost:3000/emp/${element.id}`,{
// //             "Method":"DELETE"
// //         }).then(res =>{
// //             if(res.ok){
// //                 console.log(`${element.id} is Deleted`)
// //             }
// //         })
// //     }
// //     });