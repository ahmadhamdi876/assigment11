var a1 = document.querySelector(".a-1");
var a2 = document.querySelector(".a-2");
var a3 = document.querySelector(".a-3");
var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");

a2.addEventListener("click", function () {
  section2.classList.remove("hidden");
  section1.classList.add("hidden");
  section3.classList.add("hidden");

  a2.classList.add("text-blue-400", "bg-blue-500/10");
  a1.classList.remove("text-blue-400", "bg-blue-500/10");
  a3.classList.remove("text-blue-400", "bg-blue-500/10");
});
a1.addEventListener("click", function () {
  section1.classList.remove("hidden");
  section2.classList.add("hidden");
  section3.classList.add("hidden");

  a1.classList.add("text-blue-400", "bg-blue-500/10");
  a2.classList.remove("text-blue-400", "bg-blue-500/10");
  a3.classList.remove("text-blue-400", "bg-blue-500/10");
});
a3.addEventListener("click", function () {
  section3.classList.remove("hidden");
  section2.classList.add("hidden");
  section1.classList.add("hidden");

  a3.classList.add("text-blue-400", "bg-blue-500/10");
  a2.classList.remove("text-blue-400", "bg-blue-500/10");
  a1.classList.remove("text-blue-400", "bg-blue-500/10");
});

let img1 = document.querySelector(".img-1");
let date = document.querySelector(".date");
let title = document.querySelector(".title");
let content = document.querySelector(".content-1");
let date1 = document.querySelector(".date1");

let vadio = document.querySelector(".video");

nasa();
async function nasa() {
  await nasaApi();
}

let imgUrl = "";

async function nasaApi() {
  try {
    let nasa = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=bzDsiQzoX0GbYK2GOzbmnxmpMRaFvR8DOvANFA1x",
    );
    let data = await nasa.json();

    if (data.media_type === "image") {
      img1.src = data.hdurl;
      img1.classList.remove("d-none");
      vadio.classList.add("d-none");
      imgUrl = img1.src;
    } else if (data.media_type === "video") {
      vadio.src = data.url;
      vadio.load();
      vadio.classList.remove("d-none");
      img1.classList.add("d-none");

      imgUrl = vadio.src;
    }

    date.innerHTML = data.date;
    content.innerHTML = data.explanation;
    title.innerHTML = data.title;
    date1.innerHTML = data.date;
  } catch (err) {
    console.log(err);
  }
}

let img2 = document.querySelector(".img-2");
let date2 = document.querySelector(".date2");
let hour = document.querySelector(".hour");
let loc = document.querySelector(".loc");
let cou = document.querySelector(".cou");
let c = document.querySelector(".c");
let add = document.querySelector(".add");
let imgs = document.querySelector(".img-s");


let launch = [];
getLaunches();
async function getLaunches() {
  try {
    var response = await fetch("https://ll.thespacedevs.com/2.2.0/launch/");

    var data = await response.json();
 

    if (!response.ok) {
      return;
    }

    launch = data.results;
 
 
 

 
 
    displayLaunches();
  } catch (error) {
    console.log(error);
  }
}
function displayLaunches() {
  for (let i = 0; i < launch.length; i++) {
    if (i == 0) {
      document.querySelector(".i").classList.add("d-none");
      imgs.classList.remove("d-none");
      imgs.src = launch[0].image;
      add.innerHTML=launch[0].name;
    }else if (i==1) {
        document.querySelector(".i-1").classList.add("d-none");
      document.querySelector(".img-a").classList.remove("d-none");
      document.querySelector(".img-a").src=launch[1].image;
         document.querySelector(".h4-1").innerHTML=launch[1].name;
    }else if (i==2) {
           document.querySelector(".i-2").classList.add("d-none");
      document.querySelector(".img-b").classList.remove("d-none");
      document.querySelector(".img-b").src=launch[2].image;
         document.querySelector(".h4-2").innerHTML=launch[2].name;
    }else if (i==3) {
        document.querySelector(".i-3").classList.add("d-none");
      document.querySelector(".img-c").classList.remove("d-none");
      document.querySelector(".img-c").src=launch[3].image;
         document.querySelector(".h4-3").innerHTML=launch[3].name;
    }
  }
}

// html//
let planetImg=document.querySelector(".planet-img");
let namePlanet=document.querySelector(".name");
let des=document.querySelector(".des");

//btn
let veuns=document.querySelector(".venus");
let earth=document.querySelector(".earth");
let saturn=document.querySelector(".saturn");
let mercury=document.querySelector(".mercury");
let mars=document.querySelector(".mars");
let jupiter=document.querySelector(".jupiter");
let neptune=document.querySelector(".neptune");
let uranus=document.querySelector(".uranus");
 



getPlanets();
let planets = [];
async function getPlanets() {
  try {
    let response = await fetch(
      "https://solar-system-opendata-proxy.vercel.app/api/planets",
    );

    let data = await response.json();
   if (!response.ok) {
 
    
      return;
    }

      planets = data.bodies.filter(function (body) {
      return body.isPlanet === true;
    });

 
 

    
  } catch (error) {
    console.log(error);
  }
}
 

 veuns.addEventListener("click",function () { 
  planetImg.src=planets[7].image
 namePlanet.innerHTML=planets[7].englishName
des.innerHTML=planets[7].description
 

 })
 earth.addEventListener("click",function () { 
  planetImg.src=planets[6].image
 namePlanet.innerHTML=planets[6].englishName
des.innerHTML=planets[6].description
 

 })

 saturn.addEventListener("click",function () { 
  planetImg.src=planets[5].image
 namePlanet.innerHTML=planets[5].englishName
des.innerHTML=planets[5].description
 

 })
 mercury.addEventListener("click",function () { 
  planetImg.src=planets[4].image
 namePlanet.innerHTML=planets[4].englishName
des.innerHTML=planets[4].description
 

 })
 mars.addEventListener("click",function () { 
  planetImg.src=planets[3].image
 namePlanet.innerHTML=planets[3].englishName
des.innerHTML=planets[3].description
 

 })
 
 jupiter.addEventListener("click",function () { 
  planetImg.src=planets[2].image
 namePlanet.innerHTML=planets[2].englishName
des.innerHTML=planets[2].description
 

 })
 
 neptune.addEventListener("click",function () { 
  planetImg.src=planets[1].image
 namePlanet.innerHTML=planets[1].englishName
des.innerHTML=planets[1].description
 

 })
 
 uranus.addEventListener("click",function () { 
  planetImg.src=planets[0].image
 namePlanet.innerHTML=planets[0].englishName
des.innerHTML=planets[0].description
 

 })
 
 



 




let btnVeiw = document.querySelector(".view");

btnVeiw.addEventListener("click", function () {
  window.open(imgUrl, "_blank");
});

 
 