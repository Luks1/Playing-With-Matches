function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
var el = document.querySelector("#random");
function upDate(){
el.innerHTML = getRandomNumber(1,9);
}
  getRandomNumber(1,9);
  upDate();


  function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var el = document.querySelector("#one");
  function upDate(){
  el.innerHTML = getRandomNumber(1,3);
  }
    getRandomNumber(1,3);
    upDate();

    function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var el = document.querySelector("#two");
    function upDate(){
    el.innerHTML = getRandomNumber(1,3);
    }
      getRandomNumber(1,3);
      upDate();
