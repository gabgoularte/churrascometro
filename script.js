//Meat - 400g for Person (if time +6h 650g)
//Beer - 1200ml for Person (if time +6h 2000ml)
//Soda/Water/Juice - 1000ml for Person (if time +6h 1500ml)
//Kids - 1/2 of the measures

let adults = document.getElementById("adults")
let kids = document.getElementById("kids")
let time = document.getElementById("time")

let result = document.getElementById("resultado")

function calculate() {
    let formatAdults = adults.value
    let formatKids = kids.value
    let formatTime = time.value

    let totMeat = formatAdults * meat(formatTime) + ((meat(formatTime) / 2) * formatKids)
    let totDrinks = formatAdults * drinks(formatTime) + ((drinks(formatTime) / 2) * formatKids)
    let totBeer = formatAdults * beer(formatTime)

    result.innerHTML = `<p><img src="./imgs/beef.png"> ${totMeat}g de Carne</p>`
    result.innerHTML += `<p><img src="./imgs/beer.png"> ${totBeer}ml de Cerveja </p>`
    result.innerHTML += `<p><img src="./imgs/soda.png"> ${totDrinks}ml de Bebida</p>`

    console.log(totMeat, totDrinks, totBeer)
}

function meat(time) {
    if(time >= 6) {return 650}
    else {return 400}
}

function beer(time) {
    if(time >= 6) {return 2000}
    else {return 1200}
}

function drinks(time) {
    if(time >= 6) {return 1500}
    else {return 1000}
}
