setInterval(showTime, 1000);

function showDate() { /*function date*/

var today = new Date(); 
 

var date =' วันที่ '+today.getDate()+' เดือนที่ '+(today.getMonth()+1)+' ปี คศ.'+ today.getFullYear();   /*ตัวแปร date ที่เก็บค่าต่างๆ*/
  
  let currentdate ="Date: "  + date ;

document.getElementById("date").innerHTML = currentdate; /*แสดงผลตัวแปร currentdate */
}
showDate();


