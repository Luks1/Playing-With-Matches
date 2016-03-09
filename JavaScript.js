// var resetPage = function(){
//  window.location.reload();
// }
//



function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
};
 var resetPage = function(){
  window.location.reload();
 }
// var button = document.getElementById("button");
// button.addEventListener("click", resetPage(){
// });





var el = document.querySelectorAll(".random");

function upDate(){
  for(i=0; i < el.length; i++){
    el[i].innerHTML = getRandomNumber(1,9);
  }

};


var match = function(){
      var matchtext0 = document.getElementById("random0");
      var matchtext1 = document.getElementById("random1");
      var matchtext2 = document.getElementById("random2");
      var matchtext3 = document.getElementById("random3");
      var matchtext4 = document.getElementById("random4");
      var matchtext5 = document.getElementById("random5");
      var matchtext6 = document.getElementById("random6");
      var matchtext7 = document.getElementById("random7");
      var matchtext8 = document.getElementById("random8");
      // var matchtext9 = document.getElementById("random9");

  if(el[0].innerHTML === el[1].innerHTML){
    el[0].classList.add("highlight");
    el[1].classList.add("highlight");
    matchtext0.innerHTML = el[0].innerHTML +" "+ "are matching in row 1";
    //console.log(matchtext.innerHTML = el[0].innerHTML +" "+ "are matching");
  }
  if(el[0].innerHTML === el[2].innerHTML){
    el[0].classList.add("highlight");
    el[2].classList.add("highlight");
    matchtext2.innerHTML = el[2].innerHTML +" "+ "are matching in row 1";
    //console.log(matchtext.innerHTML = el[2].innerHTML +" "+ "are matching");
  }
  if(el[1].innerHTML === el[2].innerHTML){
    el[1].classList.add("highlight");
    el[2].classList.add("highlight");
    matchtext1.innerHTML = el[1].innerHTML +" "+ "are matching in row 1";
    //console.log(matchtext.innerHTML = el[1].innerHTML +" "+ "are matching");
  }

  if(el[0].innerHTML === el[3].innerHTML){
    el[0].classList.add("highlight");
    el[3].classList.add("highlight");
    matchtext3.innerHTML = el[3].innerHTML +""+ "are matching in column 1";
    //console.log(matchtext.innerHTML = el[3].innerHTML +""+ "are matching");
  }
  // if(el[0].innerHTML === el[4].innerHTML){
  //   el[0].classList.add("highlight");
  //   el[4].classList.add("highlight");
  //   matchtext.innerHTML = el[4].innerHTML +""+ "are matching";
  // }
  // if(el[0].innerHTML === el[5].innerHTML){
  //   el[0].classList.add("highlight");
  //   el[5].classList.add("highlight");
  //   matchtext.innerHTML = el[5].innerHTML +""+ "are matching";
  // }
  if(el[0].innerHTML === el[6].innerHTML){
    el[0].classList.add("highlight");
    el[6].classList.add("highlight");
    matchtext6.innerHTML = el[6].innerHTML +""+ "are matching in column 1";
    //console.log(matchtext.innerHTML = el[6].innerHTML +""+ "are matching");
  }
  // if(el[0].innerHTML === el[7].innerHTML){
  //   el[0].classList.add("highlight");
  //   el[7].classList.add("highlight");
  //   matchtext.innerHTML = el[7].innerHTML +""+ "are matching";
  // }
  // if(el[0].innerHTML === el[8].innerHTML){
  //   el[0].classList.add("highlight");
  //   el[8].classList.add("highlight");
  //   matchtext.innerHTML = el[8].innerHTML +""+ "are matching";
  // }
  // if(el[1].innerHTML === el[3].innerHTML){
  //   el[1].classList.add("highlight");
  //   el[3].classList.add("highlight");
  //   matchtext.innerHTML = el[3].innerHTML +""+ "are matching";
  // }
  if(el[1].innerHTML === el[4].innerHTML){
    el[1].classList.add("highlight");
    el[4].classList.add("highlight");
    matchtext4.innerHTML = el[4].innerHTML +" "+ "are matching in column 2";
    //console.log(matchtext.innerHTML = el[4].innerHTML +" "+ "are matching");
  }
  // if(el[1].innerHTML === el[5].innerHTML){
  //   el[1].classList.add("highlight");
  //   el[5].classList.add("highlight");
  //   matchtext.innerHTML = el[5].innerHTML +""+ "are matching";
  // }
  // if(el[1].innerHTML === el[6].innerHTML){
  //   el[1].classList.add("highlight");
  //   el[6].classList.add("highlight");
  //   matchtext.innerHTML = el[6].innerHTML +""+ "are matching";
  // }
  if(el[1].innerHTML === el[7].innerHTML){
    el[1].classList.add("highlight");
    el[7].classList.add("highlight");
    matchtext7.innerHTML = el[7].innerHTML +" "+ "are matching in column 2";
    //console.log(matchtext.innerHTML = el[7].innerHTML +" "+ "are matching");
  }


  // if(el[2].innerHTML === el[4].innerHTML){
  //   el[2].classList.add("highlight");
  //   el[4].classList.add("highlight");
  //   matchtext.innerHTML = el[4].innerHTML +""+ "are matching";
  // }
  if(el[2].innerHTML === el[5].innerHTML){
    el[2].classList.add("highlight");
    el[5].classList.add("highlight");
    matchtext5.innerHTML = el[5].innerHTML +" "+ "are matching in column 3";
    //console.log(matchtext.innerHTML = el[5].innerHTML +" "+ "are matching");
  }
  // if(el[2].innerHTML === el[6].innerHTML){
  //   el[2].classList.add("highlight");
  //   el[6].classList.add("highlight");
  //   matchtext.innerHTML = el[6].innerHTML +""+ "are matching";
  // }

  if(el[2].innerHTML === el[8].innerHTML){
    el[2].classList.add("highlight");
    el[8].classList.add("highlight");
    matchtext8.innerHTML = el[8].innerHTML +" "+ "are matching in column 3";
    //console.log(matchtext.innerHTML = el[8].innerHTML +" "+ "are matching");
  }
  if(el[3].innerHTML === el[4].innerHTML){
    el[3].classList.add("highlight");
    el[4].classList.add("highlight");
    matchtext4.innerHTML = el[4].innerHTML +" "+ "are matching in row 2";
    //console.log(matchtext.innerHTML = el[4].innerHTML +" "+ "are matching");
  }
  if(el[3].innerHTML === el[5].innerHTML){
    el[3].classList.add("highlight");
    el[5].classList.add("highlight");
    matchtext5.innerHTML = el[5].innerHTML +" "+ "are matching in row 2";
    //console.log(matchtext.innerHTML = el[5].innerHTML +" "+ "are matching");
  }
  if(el[3].innerHTML === el[6].innerHTML){
    el[3].classList.add("highlight");
    el[6].classList.add("highlight");
    matchtext6.innerHTML = el[6].innerHTML +" "+ "are matching in column 1";
    //console.log(matchtext.innerHTML = el[6].innerHTML +" "+ "are matching");
  }
  // if(el[3].innerHTML === el[7].innerHTML){
  //   el[3].classList.add("highlight");
  //   el[7].classList.add("highlight");
  //   matchtext.innerHTML = el[7].innerHTML +""+ "are matching";
  // }

  if(el[4].innerHTML === el[5].innerHTML){
    el[4].classList.add("highlight");
    el[5].classList.add("highlight");
    matchtext5.innerHTML = el[5].innerHTML +" "+ "are matching in row 2";
    //console.log(matchtext.innerHTML = el[5].innerHTML +" "+ "are matching");
  }
  // if(el[4].innerHTML === el[6].innerHTML){
  //   el[4].classList.add("highlight");
  //   el[6].classList.add("highlight");
  //   matchtext.innerHTML = el[6].innerHTML +""+ "are matching";
  // }
  if(el[4].innerHTML === el[7].innerHTML){

    el[4].classList.add("highlight");
    el[7].classList.add("highlight");
    matchtext7.innerHTML = el[7].innerHTML +" "+ "are matching in column 2";
    //console.log(matchtext.innerHTML = el[7].innerHTML +" "+ "are matching");
  }
  // if(el[4].innerHTML === el[8].innerHTML){
  //   el[4].classList.add("highlight");
  //   el[8].classList.add("highlight");
  //   matchtext.innerHTML = el[8].innerHTML +""+ "are matching";
  // }


  if(el[5].innerHTML === el[8].innerHTML){
    el[5].classList.add("highlight");
    el[8].classList.add("highlight");
    matchtext8.innerHTML = el[8].innerHTML +" "+ "are matching in column 3";
    //console.log(matchtext.innerHTML = el[8].innerHTML +" "+ "are matching");
  }
  if(el[6].innerHTML === el[7].innerHTML){
    el[6].classList.add("highlight");
    el[7].classList.add("highlight");
    matchtext7.innerHTML = el[7].innerHTML +" "+ "are matching in row 3";
    //console.log(matchtext.innerHTML = el[7].innerHTML +" "+ "are matching");
  }
  if(el[6].innerHTML === el[8].innerHTML){
    el[6].classList.add("highlight");
    el[8].classList.add("highlight");
    matchtext8.innerHTML = el[8].innerHTML +" "+ "are matching in row 3";
    //console.log(matchtext.innerHTML = el[8].innerHTML +" "+ "are matching");
  }
  if(el[7].innerHTML === el[8].innerHTML){
    el[7].classList.add("highlight");
    el[8].classList.add("highlight");
    matchtext8.innerHTML = el[8].innerHTML +" "+ "are matching in row 3";
    //console.log(matchtext.innerHTML = el[8].innerHTML +" "+ "are matching");
  }


};
  upDate();
  match();
