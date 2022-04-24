kit=document.querySelector(".kit");
search=kit.querySelector(".search");
city=kit.querySelector(".city");
temp=kit.querySelector(".weather");
input=search.querySelector("input")
button1=document.getElementById("button1");
button2=document.getElementById("button2");
file=kit.querySelector(".file");  
button2.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess,onError);

    }
    else{
        console.log("Geolocation not supported");
    }
});
button1.addEventListener("click",()=>{
    city=document.getElementById("src").value;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8d7403e9859949aaa3de26ea7101655`;
    fetch(api).then(response => response.json()).then(result => weather(result));
    city.innerText="Location: "+city;

});


function onSuccess(position){
    const{latitude,longitude}=position.coords;
    let api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e8d7403e9859949aaa3de26ea7101655`;
    fetch(api).then(response => response.json()).then(result => weather(result));
}


function onError(error){
    console.log(error);
}



function weather(info){
    const cityy=info.name;
    const tempp=info.main;
    const op=info.weather[0];

    document.getElementById("src").value=cityy;
    temp.innerHTML=op.description;
    file.innerText=(Math.round(tempp.temp-273.00).toFixed(2))+"°C";       
}