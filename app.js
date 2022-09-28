const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const cny = document.querySelector("#cny")


const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const req = new XMLHttpRequest();
        req.open("GET" ,"data.json")
        req.setRequestHeader("Content-type" ,"application/json");
        req.send();
        req.addEventListener("load" , () => {
            const response = JSON.parse(req.response);
            if(elem === som){
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value * response.cny).toFixed(2)
            }
            else if(elem === usd){
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value * response.cny * response.usd).toFixed(2)
            }
            else if (elem===cny) {
                target.value = (elem.value / response.usd / response.cny).toFixed(2)
                target2.value = (elem.value / response.cny).toFixed(2)
            }
            (elem.value === "") && (target.value = "")
            (elem.value === "") && (target2.value = "")
        })
    })
};
convert(som, usd, cny)
convert(usd, som, cny)
convert(cny, usd , som)