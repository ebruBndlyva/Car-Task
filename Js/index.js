
import { GetData, GetData2, PostCars } from "./Api/request/cars.js"
import { baseUrl } from "./Api/baseUrl.js"

const cards = document.querySelector(".cards")
function showData() {
    cards.innerHTML = ""
    GetData(baseUrl)
        .then(res => res.carsDatas.forEach(carData => {
            cards.innerHTML += `
     <div class="card">
            <p class="name">${carData.producer}</p>
            <p>${carData.model}</p>
            <p>${carData.productionYear}</p>
            <p>W${carData.vinCode}</p>
        </div>
   `
        }))
}

showData()
let page = 1





window.addEventListener("scroll", function () {
    let top = document.documentElement.scrollTop
    let scrolHei = document.documentElement.scrollHeight
    let view = window.innerHeight
   

    if (view + top >= scrolHei) {
        page++
     
        GetData2(`https://fakeapi-car.glitch.me/api/?_page=${page}&_limit=15`)
            .then(res => {
                res.carsDatas.forEach(data => {
                    let newObj = {
                        "producer": data.producer,
                        "model": data.model,
                        "productionModel": data.productionModel,
                        "vinCode": data.vinCode
                    }
                    // console.log(newObj);
                    PostCars(baseUrl, newObj)
                        .then(() => showData())
                })
            })

    }

})