setInterval(showTime, 1000);
        function showTime() { /*function clock*/
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();

            AMandPM = "AM";
  
            if (hour > 12) { /*คำนวน Pm Am */
                hour -= 12;
                AMandPM = " PM";
            }
            if (hour == 0) {
                hr = 12;
                AMandPM = " AM";
            }
  
            hour = hour < 10 ? "0" + hour : hour; 
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime ="Time:" + hour + ":" 
                + min + ":" + sec +   AMandPM;
  
            document.getElementById("clock")
                .innerHTML = currentTime; /*แสดงผลตัวแปร  currentTime */
        }
  
showTime();
   