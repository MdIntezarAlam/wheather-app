
const temp_real_val = document.getElementById("temp_real_val")
const temp_status = document.getElementById("temp_status")
const city_Name = document.getElementById("city_Name")
const submitbtn= document.getElementById("submitbtn");
const city_name= document.getElementById("city_name");

const data_hide= document.querySelector('.middle_layer')

const getInfo=async(event)=>{

let cityVal= city_Name.value
    event.preventDefault()


   if(cityVal===""){
       city_name.innerText=`please Write the name before search`
       data_hide.classList.add('data_hide')
}
else{

try {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&lat={lat}&lon={lon}&appid=8bfd3cf45f4fc2bf5954a06ac4e6249f`
    const responce = await fetch(url)
    const data =await responce.json()
    const arrData = [data]
    const city_name=`${arrData[0].name}, ${arrData[0].sys.country} `
    temp_real_val.innerText=arrData[0].main.temp
    // temp_status.innerText=arrData[0].weather[0].main
    // console.log(data)
    // console.log(temp)
    // console.log(temp_status)
const temperetureMod= arrData[0].weather[0].main
if(temperetureMod==="Clear"){
    temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
}
else if(temperetureMod==="Clouds"){
    temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
}
else if(temperetureMod==="Rain"){
    temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be';'></i>";
}
else{
    temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
}
data_hide.classList.remove('data_hide')



} catch (error) {
    city_name.innerText=`please enter correct city name`
    data_hide.classList.add('data_hide')
    
}

   }

}
// console.log(url.json())
submitbtn.addEventListener('click', getInfo)