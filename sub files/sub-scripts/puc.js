var colors = ['#CFFFDC', '#FEFECC', '#CAE4DB', '#FDEBF7', '#FFFDDE',"#FFBBBB"]
var colors = ['#CFFFDC', '#FEFECC', '#CAE4DB', '#FDEBF7', '#FFFDDE',"#FFBBBB"]
for(var i =0; i<document.querySelectorAll(".choice").length ;i++){
   document.querySelectorAll(".choice")[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
if (document.title == "Tenth") {
  document.querySelector(".left").style.backgroundColor = "#F9E5E8"
}
if (document.title == "Bcom") {
  document.querySelector(".left").style.backgroundColor = "#FBECD8"
}
if (document.title == "Commerce") {
  document.querySelector(".left").style.backgroundColor = "#E7F7EA"
}
if (document.title == "BCA") {
  document.querySelector(".left").style.backgroundColor = "#DFECF9"
}
if (document.title == "Engineering") {
  document.querySelector(".left").style.backgroundColor = "#EBBBEC"
}

