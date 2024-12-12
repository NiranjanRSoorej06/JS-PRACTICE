const URL="http://api.weatherapi.com/v1/current.json?key=857c83cfc5ac4584814192502240912&q=";

var place=document.querySelector("#place");
var btn=document.querySelector("#search");
var icon=document.querySelector("#icon");

var temp=document.querySelector("#temp");
var location_name=document.querySelector("#location");
var humid=document.querySelector("#humidity-val");
var wind_speed=document.querySelector("#wind-val");
var wind_dir=document.querySelector("#wind-dir");
var latitude=document.querySelector("#lat-val");
var longitude=document.querySelector("#long-val");
var date_and_time=document.querySelector("#date-time-val");
var weather_condition=document.querySelector("#icon-name");


btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    var location=place.value;

    var newURL=URL+location;
    let response=await fetch(newURL);
    let data=await response.json();
        console.log(data);

    var temp_reading=data.current.temp_c;
    var humid_reading=data.current.humidity;
    var wind_speed_reading=data.current.wind_kph;
    var wind_dir_reading=data.current.wind_dir;
    var lat_reading=data.location.lat;
    var long_reading=data.location.lon;
    var date_time_reading=data.location.localtime;


    //getting weather readings
    var weather="";
    var text=data.current.condition.text;
    var text_in_lower=text.toLowerCase();

    //setting desired weather class
    if(text_in_lower==="overcast" || text_in_lower==="partly cloudy" || text_in_lower==="cloudy" || text_in_lower==="mostly clear")
        weather="clouds";
    else if(text_in_lower==="sunny" || text_in_lower==="clear" || text_in_lower==="partly clear" || text_in_lower==="mostly clear")
        weather="clear";
    else if(text_in_lower==="light snow"|| text_in_lower==="moderate snow" || text_in_lower==="Heavy snow" || text_in_lower==="snowstorm" || text_in_lower==="freezing fog" )
        weather="snow";
    else if(text_in_lower==="light rain" || text_in_lower==="very light rain" || text_in_lower==="light drizzle")
        weather="drizzle";
    else if(text_in_lower==="mist" || text_in_lower==="fog" || text_in_lower==="haze" )
        weather="mist";
    else if(text_in_lower==="moderate rain" || text_in_lower==="heavy rain"|| text_in_lower==="torrential rain" || text_in_lower==="light freezing rain" || text_in_lower==="patchy rain nearby")
        weather="rain";
    
    console.log(weather);
    //changing icon
    icon.src=weather+".png";

    //change temp
    temp.innerText=temp_reading+"°c";

    //change location
    location_name.innerText=location;

    //change weather
    weather_condition.innerText=text;

    //change Humidity
    humid.innerText=humid_reading+"%";

    //change wind parameters
    wind_speed.innerText=wind_speed_reading+" kmph ";
    wind_dir.innerText=wind_dir_reading;

    //change Latitude and Longitude
    latitude.innerText="Latitude : "+lat_reading+"°";
    longitude.innerText="Longitude : "+long_reading+"°";

    //change Local Date and Time
    date_and_time.innerText=date_time_reading;
})

place.addEventListener("keydown",(evt)=>{
    if(evt.key==="Enter"){
        evt.preventDefault();
    }
})














