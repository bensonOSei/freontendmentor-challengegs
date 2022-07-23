const bar = document.querySelectorAll(".bar");
const day = document.querySelectorAll(".day");
const amount = document.querySelectorAll('.amount')


//console.log(bar);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => populateGraph(data))
  .catch((err) => console.log(err));

function populateGraph(data) {
  const yAxisMax = 150;

  let date = new Date();

  for (let i = 0; i < 7; i++) {
    bar[i].style.height = (data[i].amount * yAxisMax) / 100 + "%";
    day[i].innerHTML = data[i].day;
    amount[i].innerHTML = data[i].amount;

    if (i + 1 == date.getDay()) {
      //console.log(data[i].day);
      bar[i].classList.add("today");
    }
  }
}

// function dayOfTheWeek(){
//     let date = new Date();
//     let today = date.getDay()

//     for(let i = 0; i < 7; i++){
//         if(i == today){
//             today = 'Wed'
//         }
//     }
//     return today
// }

// console.log(dayOfTheWeek());
