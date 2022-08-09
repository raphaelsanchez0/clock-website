const timeText = document.querySelector('#time-text');
const dateText = document.querySelector('#date-text');


const months = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];

function currentTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    let session = 'AM'
    
    let month = months[date.getMonth()-1];
    let day = date.getDate();
    let year = date.getFullYear();
    
    //Converts from military time to standard time
    if (HH>12){
        HH -= 12;
        session = 'PM'
    }else{
        session = 'AM'
    }

    //Puts a 0 before a letter if its below 10
    HH = HH<10 ? '0'+HH:HH;
    MM = MM<10 ? '0'+MM:MM;
    SS = SS<10 ? '0'+SS:SS;


    parsedTime = `${HH}:${MM}:${SS} ${session}`;
    parsedDate = `${month} ${day}, ${year}`;

    timeText.innerHTML = parsedTime;
    dateText.innerHTML = parsedDate;
    setTimeout(function(){currentTime()},1000);
}

currentTime()
