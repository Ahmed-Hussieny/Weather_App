var CITYNAME = document.getElementById("cityName");
var currentCity="Cairo"

let WetherList =[];
async function getWheater(city="Cairo"){
    let MyReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fc5fff1d17ad4c89949143334230608&q=${city}&days=4`);
    
    let data = await MyReq.json();
    // WetherList.splice(0,WetherList.length);
    WetherList =[];
    WetherList.push(data);
    // console.log(WetherList);
    currentCity=city;
    showData();

    // console.log(WetherList);
}
getWheater();
 function getit(){
    getWheater(CITYNAME.value);
}
var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] ;
let today = new Date().getDay();
var monthName = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'];
let toMonth = new Date().getMonth();
let toDate = new Date();

// console.log(days[today]);
showData();

function showData(){
    var temp="";
    WetherList.forEach((el)=>{
        // console.log(el);
        temp+=`<div class="col-md-4">
        <div class="W-item bg-b rounded">
          <!-- Header -->
            <div class="d-flex justify-content-between align-items-center bg-a text-secondary rounded-top px-2 pt-2 ">
              <p>${days[toDate.getDay()]}</p>
              <p>${toDate.getDate()} ${ monthName[toDate.getMonth()]}</p>
            </div>

            <!-- City -->
            <div class="pt-4 ps-4">
              <p class="fs-4 text-secondary">${el.location.name}</p>
            </div>

              <!-- Temp -->
              <div class="d-flex justify-content-around align-items-center">
                <p class="fa-5x text-white">${el.current.temp_c}°C</p>
                <img class="w-25" src=${el.current.condition.icon} alt="">
              </div>

              <div class=" ps-4">
                <p class="fs-6 text-info">${el.current.condition.text}</p>
              </div>


              <div class=" ms-4 d-flex">
                <p class="me-4 text-secondary"><i class="fa-solid  fa-umbrella"></i>  ${Math.round(el.current.humidity)}%  </p>
                <p class="me-4 text-secondary"><i class="fa-solid  fa-wind"></i> ${Math.round(el.current.wind_kph)}km/h</p>
                <p class="me-4 text-secondary"><i class="fa-regular  fa-compass"></i> ${el.current.wind_dir}</p>
              </div>
        </div>
        
      </div>
      <div class="col-md-4">
        <div class="W-item bg-dd rounded pb-5">
          <!-- Header -->
            <div class="d-flex justify-content-center align-items-center bg-c text-secondary rounded-top px-2 pt-2 ">
              <p>${days[toDate.getDay()+1]}</p>
            </div>


              <!-- Temp -->
              <div class="d-flex justify-content-center align-items-center pt-5">
                <div class="mx-auto">
                <img class="w-50  ms-3" src=${el.forecast.forecastday[toDate.getDay()+1].day.condition.icon} alt="">
                <p class="fa-2x text-white">${el.forecast.forecastday[toDate.getDay()+1].day.maxtemp_c}°C</p>
                <p class="fa-1x ms-3 text-secondary">${el.forecast.forecastday[toDate.getDay()+1].day.mintemp_c}°C</p>

                
                
                </div>
              </div>

              <div class="d-flex justify-content-center ppp">
                <p class="fs-6 text-info">${el.forecast.forecastday[toDate.getDay()+1].day.condition.text}</p>
              </div>


        </div>
        
      </div>
      <div class="col-md-4">
        <div class="W-item bg-b rounded pb-5">
          <!-- Header -->
            <div class="d-flex justify-content-center align-items-center bg-a text-secondary rounded-top px-2 pt-2 ">
              <p>${days[toDate.getDay()+2]}</p>
            </div>


              <!-- Temp -->
              <div class="d-flex justify-content-center align-items-center pt-5">
                <div class="mx-auto">
                <img class="w-50  ms-3" src=${el.forecast.forecastday[toDate.getDay()+2].day.condition.icon} alt="">
                <p class="fa-2x text-white">${el.forecast.forecastday[toDate.getDay()+2].day.maxtemp_c}°C</p>
                <p class="fa-1x ms-3 text-secondary">${el.forecast.forecastday[toDate.getDay()+2].day.mintemp_c}°C</p>

                
                
                </div>
              </div>

              <div class="d-flex justify-content-center ppp">
              <p class="fs-6 text-info">${el.forecast.forecastday[toDate.getDay()+2].day.condition.text}</p>
              </div>


        </div>
        
      </div>`
    })
    // console.log(temp);
    document.getElementById("data").innerHTML=temp;
}