const timeText = document.querySelector('#time-text')

function currentTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    let session = 'AM'

    if (HH>12){
        HH -= 12;
        session = 'PM'
    }else{
        session = 'AM'
    }
    


    time = `${HH}:${MM}:${SS} ${session}`
    timeText.innerHTML = time
    setTimeout(function(){currentTime()},1000)
}

currentTime()
