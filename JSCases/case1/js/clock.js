
let isim = prompt("Adınız nedir?")
let currentDate = new Date();
if(isim){
    //İsmi yazdırma
    let isimClass = document.querySelector("#myName");
    isimClass.innerHTML = isim;

    let dateClass = document.querySelector("#myClock");

    //şuanki tarihi alma ve yazdırma
    let dateFormat = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
    let elementForDate = document.createElement("div");
    elementForDate.classList.add("date","clock");
    elementForDate.innerHTML = ` ${dateFormat} tarihinde<br/> `;
    dateClass.before(elementForDate);

    //şuanki saati alma ve Çalışan saat yapma
    function showTime(){
        let clockFormat = new Date().toLocaleTimeString();
        dateClass.innerHTML = `saat ${clockFormat} de<br/>`;
    }
    setInterval(showTime,1000);

    //şuanki günü string olarak alma
    let currentDay = currentDate.toLocaleString("default", { weekday: "long" });

    //yeni element ekleme ve günü yazdırma 
    let elementForDay = document.createElement("span");
    let chooseDiv = document.querySelector(".text2");
    chooseDiv.insertBefore(elementForDay,chooseDiv.childNodes[1]);
    elementForDay.classList.add("clock");
    elementForDay.innerHTML = ` ${currentDay} günü<br/>`;
}else{
    let chooseBodyChild = document.querySelector(".bg-dark .text-center");
    chooseBodyChild.classList.add("clock");
    chooseBodyChild.innerHTML = `İsim Bilgisi Girmeden Katılamazsınız !`;
}


