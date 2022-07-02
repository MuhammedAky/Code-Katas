function humanReadable (seconds) {

        let times = [];
    
        let hour    = Math.floor(seconds / 3600);
        seconds     = seconds - (hour * 3600);
        let minute  = Math.floor(seconds / 60);
        seconds     = seconds - (minute * 60);
    
        times.push(hour,minute,seconds)
    
    
    
        for(var i=0;i<3;i++){
            if(times[i].toString().length < 2){
                times[i] = "0" + times[i];
            }
        }


        return `${times[0].slice(-2)}:${times[1].slice(-2)}:${times[2].slice(-2)}`;
    }
    




console.log(humanReadable(3599))