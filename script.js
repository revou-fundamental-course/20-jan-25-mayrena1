var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Semua kolom wajib diisi!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("Pria");
  }else if(female.checked){
    p.push("Wamnita");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Berat Badan Kurang';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Berat Badan Sehat';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Berat Badan Berlebih';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obesitas';
     }else if(35<=bmi){
    result = 'Obesitas Ekstrem';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Kamu memiliki <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
