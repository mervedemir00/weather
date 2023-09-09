

const date= new Date();
const year = date.getFullYear();
const month = (date.getMonth()+1).toString().padStart(2, '0');
const day = date.getDate().toString().padStart(2, '0');

const nowDay= year+"-"+month+"-"+day



function showPosition(position) {
    document.getElementById("cityButton").innerHTML = "Konumunuz Belirleniyor..."
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Tarayıcınız konum hizmetini desteklemiyor.");
    }
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            var city = data.address.province;
            document.getElementById("sehir").innerHTML = city
            fetch(`https://makale.dev/test.php?city=${city}&date=${nowDay}`).then(response => response.json()).then(havadurumu => {

                document.getElementById("nowC").innerHTML = parseInt(havadurumu["forecast"]["forecastday"][0]["day"]["maxtemp_c"])+"°"
                document.getElementById("nowWeather").classList.add("show")
                document.getElementById("cityButton").style.display = "none"

                let img = havadurumu["forecast"]["forecastday"][0]["day"]["condition"]["text"]
                document.getElementById("nowText").innerHTML=img
                if (img === "Sunny") {
                    document.getElementById("nowImg").src = "images/sun.png"
                } else if (img === "Cloudy") {
                    document.getElementById("nowImg").src = "images/bulutlu.png"
                }
    
            })
        });
}
const buton = document.getElementById("cityButton");
buton.addEventListener("click", function () {
    showPosition()
})



fetch(`https://makale.dev/test.php?city=istanbul&date=${nowDay}`).then(response => response.json()).then(havadurumu => {
    document.getElementById("ist").innerHTML = parseInt(havadurumu["forecast"]["forecastday"][0]["day"]["maxtemp_c"])
    let img = havadurumu["forecast"]["forecastday"][0]["day"]["condition"]["text"]
    if (img === "Sunny") {
        document.getElementById("img1").src = "images/sun.png"
    } else if (img === "Cloudy") {
        document.getElementById("img1").src = "images/bulutlu.png"
    }
})

fetch(`https://makale.dev/test.php?city=ankara&date=${nowDay}`).then(response => response.json()).then(havadurumu => {
    document.getElementById("ank").innerHTML =  parseInt(havadurumu["forecast"]["forecastday"][0]["day"]["maxtemp_c"])

    let img = havadurumu["forecast"]["forecastday"][0]["day"]["condition"]["text"]
    if (img === "Sunny") {
        document.getElementById("img2").src = "images/sun.png"
    } else if (img === "Cloudy") {
        document.getElementById("img2").src = "images/bulutlu.png"
    }
})

fetch(`https://makale.dev/test.php?city=izmir&date=${nowDay}`).then(response => response.json()).then(havadurumu => {
    document.getElementById("izmr").innerHTML =  parseInt(havadurumu["forecast"]["forecastday"][0]["day"]["maxtemp_c"])
    let img = havadurumu["forecast"]["forecastday"][0]["day"]["condition"]["text"]
    if (img === "Sunny") {
        document.getElementById("img3").src = "images/sun.png"
    } else if (img === "Cloudy") {
        document.getElementById("img3").src = "images/bulutlu.png"
    }

})

fetch(`https://makale.dev/test.php?city=antalya&date=${nowDay}`).then(response => response.json()).then(havadurumu => {
    document.getElementById("antlya").innerHTML =  parseInt(havadurumu["forecast"]["forecastday"][0]["day"]["maxtemp_c"])

    let img = havadurumu["forecast"]["forecastday"][0]["day"]["condition"]["text"]
    if (img === "Sunny") {
        document.getElementById("img4").src = "images/sun.png"
    } else if (img === "Cloudy") {
        document.getElementById("img4").src = "images/bulutlu.png"
    }

})



