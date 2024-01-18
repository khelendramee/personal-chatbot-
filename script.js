function word() {
var text = document.getElementById("text_input").value;
var tocken_1 = text.split(' ');
 var tocken = [];
 // your json file spacfic path
  fetch('index.json')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
 var data_rate_arr = [];
    for(let word in data){
     data_rate_arr.push(word);
}
//data ki length 
var data_rate = data_rate_arr.length;
//
  console.log(data_rate)
   //weight of predition ka  
   //fist weight
   var sim_lable = 1/Math.pow(data_rate,1/4);
;
  console.log(sim_lable)
    //second weight

    var sim_lable_2 = -1/Math.pow(data_rate,1/2);
;
    console.log(sim_lable_2)
  //three weight
   var sim_lable_3 = 1/Math.pow(data_rate,1/4.7);
;
    console.log(sim_lable_3)

  //
 var predition_word_1 = [];
 var predition_num_1 = [];
 //import word chechaing in our data
 function important_text() {
  var data_word_1 = [];
   for(let word in data){
     data_word_1.push(word);
   }
   for(let x=0; x<tocken_1.length; x++){
     if(data_word_1.includes(tocken_1[x])){
       tocken.push(tocken_1[x]);
     }
     else{
       
     }
   }
 }
 important_text();
 
 //size mantain karna
if (tocken_1.length < 10) {
  var length_1 = 30;
}
else if (tocken_1.length < 20) {
  var length_1 = 60;
}
else if (tocken_1.length < 30) {
  var length_1 = 90;
}
else if (tocken_1.length < 40) {
  var length_1 = 120;
}
else if (tocken_1.length < 50) {
  var length_1 = 150;
}
else if (tocken_1.length < 60) {
  var length_1 = 180;
}
else if (tocken_1.length < 70) {
  var length_1 = 210;
}
else if (tocken_1.length < 80) {
  var length_1 = 240;
}
else if (tocken_1.length < 90) {
  var length_1 = 270;
}
else {
  var length_1 = 300;
}
 //
 //
   function node_1() {
     for(let word in data){
    var word_vec_1 = data[tocken[0]];
    var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
 var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1,v_2,index)=>{
         return v_1+v_2*word_vec_2[index];
       },0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1,v_2)=>{
         return v_1+v_2**2;
       },0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 **2;
       },0))
       
var cal_cosine_simlerty = dot_product/(word_vec_1_mod*word_vec_2_mod)
//console.log(cal_cosine_simlerty)
if(cal_cosine_simlerty>sim_lable){
  predition_num_1.push(cal_cosine_simlerty)
  predition_word_1.push(word);
}
     }
   }
 node_1();
console.log(predition_word_1)
 //sent function

//sent function

 var predition_word_2 = [];
 var predition_num_2 = [];
   function node_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[1]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
 var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_2.push(cal_cosine_simlerty)
         predition_word_2.push(word);
       }
     }
   }
   node_2();
   console.log(predition_word_2)
   //sent function

   //sent function
   
    var predition_word_3 = [];
 var predition_num_3 = [];
   function node_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[2]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
 var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3.push(cal_cosine_simlerty)
         predition_word_3.push(word);
       }
     }
   }
   node_3();
   console.log(predition_word_3)
   //sent function

   //sent function
   //extra sent function
   if(tocken.length >= 15){
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)

   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();

   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
 console.log(tocken[6])
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   console.log("😋😉😋😉😎😉")
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
   //
   //extra sent function
    var predition_word_3_6 = [];
 var predition_num_3_6 = [];
   function node_3_6() {
     for (let word in data) {
       var word_vec_1 = data[tocken[8]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_6.push(cal_cosine_simlerty)
         predition_word_3_6.push(word);
       }
     }
   }
   node_3_6();
   console.log(predition_word_3_6)
   //
   //extra sent function
    var predition_word_3_7 = [];
 var predition_num_3_7 = [];
   function node_3_7() {
     for (let word in data) {
       var word_vec_1 = data[tocken[9]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_7();
   console.log(predition_word_3_7)
   //
   //extra sent function
    var predition_word_3_8 = [];
 var predition_num_3_8 = [];
   function node_3_8() {
     for (let word in data) {
       var word_vec_1 = data[tocken[10]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_8.push(cal_cosine_simlerty)
         predition_word_3_8.push(word);
       }
     }
   }
   node_3_8();
   console.log(predition_word_3_8)
   //
   //extra sent function
    var predition_word_3_9 = [];
 var predition_num_3_9 = [];
   function node_3_9() {
     for (let word in data) {
       var word_vec_1 = data[tocken[11]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_9();
   console.log(predition_word_3_9)
   //
   //extra sent function 
    var predition_word_3_10 = [];
 var predition_num_3_10 = [];
   function node_3_10() {
     for (let word in data) {
       var word_vec_1 = data[tocken[12]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_10.push(cal_cosine_simlerty)
         predition_word_3_10.push(word);
       }
     }
   }
   node_3_10();
   console.log(predition_word_3_10)
   //
   //extra sent function
    var predition_word_3_11 = [];
 var predition_num_3_11 = [];
   function node_3_11() {
     for (let word in data) {
       var word_vec_1 = data[tocken[13]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_11.push(cal_cosine_simlerty)
         predition_word_3_11.push(word);
       }
     }
   }
   node_3_11();
   console.log(predition_word_3_11)
   //
   //extra sent function
    var predition_word_3_12 = [];
 var predition_num_3_12 = [];
   function node_3_12() {
     for (let word in data) {
       var word_vec_1 = data[tocken[14]];
       var word_vec_2 = data[word];
//
if(word_vec_1 == undefined){
var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);
}
//
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_12();
   console.log(predition_word_3_12)
  }
 else if(tocken.length == 4) {
   var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
}
//
else if (tocken.length == 5) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
}
//
else if (tocken.length == 6) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
}
//
else if (tocken.length == 7) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];

   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];

   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
}
//
else if (tocken.length == 8) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
}
//
else if (tocken.length == 9) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
   //
   //extra sent function
    var predition_word_3_6 = [];
 var predition_num_3_6 = [];
   function node_3_6() {
     for (let word in data) {
       var word_vec_1 = data[tocken[8]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_6.push(cal_cosine_simlerty)
         predition_word_3_6.push(word);
       }
     }
   }
   node_3_6();
   console.log(predition_word_3_6)
}
//
else if (tocken.length == 10) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
   //
   //extra sent function
    var predition_word_3_6 = [];
 var predition_num_3_6 = [];
   function node_3_6() {
     for (let word in data) {
       var word_vec_1 = data[tocken[8]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_6.push(cal_cosine_simlerty)
         predition_word_3_6.push(word);
       }
     }
   }
   node_3_6();
   console.log(predition_word_3_6)
   //
   //extra sent function
    var predition_word_3_7 = [];
 var predition_num_3_7 = [];
   function node_3_7() {
     for (let word in data) {
       var word_vec_1 = data[tocken[9]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_7();
   console.log(predition_word_3_7)
}
//
else if (tocken.length == 11) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
   //
   //extra sent function
    var predition_word_3_6 = [];
 var predition_num_3_6 = [];
   function node_3_6() {
     for (let word in data) {
       var word_vec_1 = data[tocken[8]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_6.push(cal_cosine_simlerty)
         predition_word_3_6.push(word);
       }
     }
   }
   node_3_6();
   console.log(predition_word_3_6)
   //
   //extra sent function
    var predition_word_3_7 = [];
 var predition_num_3_7 = [];
   function node_3_7() {
     for (let word in data) {
       var word_vec_1 = data[tocken[9]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_7();
   console.log(predition_word_3_7)
   //
   //extra sent function
    var predition_word_3_8 = [];
 var predition_num_3_8 = [];
   function node_3_8() {
     for (let word in data) {
       var word_vec_1 = data[tocken[10]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_8.push(cal_cosine_simlerty)
         predition_word_3_8.push(word);
       }
     }
   }
   node_3_8();
   console.log(predition_word_3_8)
}
//
else if (tocken.length == 12) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
   //
   //extra sent function
    var predition_word_3_6 = [];
 var predition_num_3_6 = [];
   function node_3_6() {
     for (let word in data) {
       var word_vec_1 = data[tocken[8]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_6.push(cal_cosine_simlerty)
         predition_word_3_6.push(word);
       }
     }
   }
   node_3_6();
   console.log(predition_word_3_6)
   //
   //extra sent function
    var predition_word_3_7 = [];
 var predition_num_3_7 = [];
   function node_3_7() {
     for (let word in data) {
       var word_vec_1 = data[tocken[9]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_7();
   console.log(predition_word_3_7)
   //
   //extra sent function
    var predition_word_3_8 = [];
 var predition_num_3_8 = [];
   function node_3_8() {
     for (let word in data) {
       var word_vec_1 = data[tocken[10]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_8.push(cal_cosine_simlerty)
         predition_word_3_8.push(word);
       }
     }
   }
   node_3_8();
   console.log(predition_word_3_8)
   //
   //extra sent function
    var predition_word_3_9 = [];
 var predition_num_3_9 = [];
   function node_3_9() {
     for (let word in data) {
       var word_vec_1 = data[tocken[11]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_9();
   console.log(predition_word_3_9)
}
//
else if (tocken.length == 13) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
   //
   //extra sent function
    var predition_word_3_6 = [];
 var predition_num_3_6 = [];
   function node_3_6() {
     for (let word in data) {
       var word_vec_1 = data[tocken[8]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_6.push(cal_cosine_simlerty)
         predition_word_3_6.push(word);
       }
     }
   }
   node_3_6();
   console.log(predition_word_3_6)
   //
   //extra sent function
    var predition_word_3_7 = [];
 var predition_num_3_7 = [];
   function node_3_7() {
     for (let word in data) {
       var word_vec_1 = data[tocken[9]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_7();
   console.log(predition_word_3_7)
   //
   //extra sent function
    var predition_word_3_8 = [];
 var predition_num_3_8 = [];
   function node_3_8() {
     for (let word in data) {
       var word_vec_1 = data[tocken[10]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_8.push(cal_cosine_simlerty)
         predition_word_3_8.push(word);
       }
     }
   }
   node_3_8();
   console.log(predition_word_3_8)
   //
   //extra sent function
    var predition_word_3_9 = [];
 var predition_num_3_9 = [];
   function node_3_9() {
     for (let word in data) {
       var word_vec_1 = data[tocken[11]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_9();
   console.log(predition_word_3_9)
   //
   //extra sent function 
    var predition_word_3_10 = [];
 var predition_num_3_10 = [];
   function node_3_10() {
     for (let word in data) {
       var word_vec_1 = data[tocken[12]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_10.push(cal_cosine_simlerty)
         predition_word_3_10.push(word);
       }
     }
   }
   node_3_10();
   console.log(predition_word_3_10)
}
//
else if (tocken.length == 14) {
 var predition_word_3_1 = [];
 var predition_num_3_1 = [];
   function node_3_1() {
     for (let word in data) {
       var word_vec_1 = data[tocken[3]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_1();
   console.log(predition_word_3_1)
   //
   //extra sent function
    var predition_word_3_2 = [];
 var predition_num_3_2 = [];
   function node_3_2() {
     for (let word in data) {
       var word_vec_1 = data[tocken[4]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_2.push(cal_cosine_simlerty)
         predition_word_3_2.push(word);
       }
     }
   }
   node_3_2();
   console.log(predition_word_3_2)
   //
   //extra sent function
    var predition_word_3_3 = [];
 var predition_num_3_3 = [];
   function node_3_3() {
     for (let word in data) {
       var word_vec_1 = data[tocken[5]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_3.push(cal_cosine_simlerty)
         predition_word_3_3.push(word);
       }
     }
   }
   node_3_3();
   console.log(predition_word_3_3)
   //
   //extra sent function
    var predition_word_3_4 = [];
 var predition_num_3_4 = [];
   function node_3_4() {
     for (let word in data) {
       var word_vec_1 = data[tocken[6]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_4.push(cal_cosine_simlerty)
         predition_word_3_4.push(word);
       }
     }
   }
   node_3_4();
   console.log(predition_word_3_4)
   //
   //extra sent function
    var predition_word_3_5 = [];
 var predition_num_3_5 = [];
   function node_3_5() {
     for (let word in data) {
       var word_vec_1 = data[tocken[7]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_5.push(cal_cosine_simlerty)
         predition_word_3_5.push(word);
       }
     }
   }
   node_3_5();
   console.log(predition_word_3_5)
   //
   //extra sent function
    var predition_word_3_6 = [];
 var predition_num_3_6 = [];
   function node_3_6() {
     for (let word in data) {
       var word_vec_1 = data[tocken[8]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_6.push(cal_cosine_simlerty)
         predition_word_3_6.push(word);
       }
     }
   }
   node_3_6();
   console.log(predition_word_3_6)
   //
   //extra sent function
    var predition_word_3_7 = [];
 var predition_num_3_7 = [];
   function node_3_7() {
     for (let word in data) {
       var word_vec_1 = data[tocken[9]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_7();
   console.log(predition_word_3_7)
   //
   //extra sent function
    var predition_word_3_8 = [];
 var predition_num_3_8 = [];
   function node_3_8() {
     for (let word in data) {
       var word_vec_1 = data[tocken[10]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_8.push(cal_cosine_simlerty)
         predition_word_3_8.push(word);
       }
     }
   }
   node_3_8();
   console.log(predition_word_3_8)
   //
   //extra sent function
    var predition_word_3_9 = [];
 var predition_num_3_9 = [];
   function node_3_9() {
     for (let word in data) {
       var word_vec_1 = data[tocken[11]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_1.push(cal_cosine_simlerty)
         predition_word_3_1.push(word);
       }
     }
   }
   node_3_9();
   console.log(predition_word_3_9)
   //
   //extra sent function 
    var predition_word_3_10 = [];
 var predition_num_3_10 = [];
   function node_3_10() {
     for (let word in data) {
       var word_vec_1 = data[tocken[12]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_10.push(cal_cosine_simlerty)
         predition_word_3_10.push(word);
       }
     }
   }
   node_3_10();
   console.log(predition_word_3_10)
   //
   //extra sent function
    var predition_word_3_11 = [];
 var predition_num_3_11 = [];
   function node_3_11() {
     for (let word in data) {
       var word_vec_1 = data[tocken[13]];
       var word_vec_2 = data[word];

       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable) {
         predition_num_3_11.push(cal_cosine_simlerty)
         predition_word_3_11.push(word);
       }
     }
   }
   node_3_11();
   console.log(predition_word_3_11)
}
//
else{
  
}
   //---
   //
   //word ko dusra lyer arry ka roop mai dena
if(tocken.length >= 15){
var layr_1 = [
  predition_word_1.concat(predition_word_3_1, predition_word_3_2, predition_word_3_3, predition_word_3_4),
  predition_word_2.concat(predition_word_3_5, predition_word_3_6, predition_word_3_7, predition_word_3_8),
  predition_word_3.concat(predition_word_3_9, predition_word_3_10, predition_word_3_11, predition_word_3_12)
];
}
else if (tocken.length == 4) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1), predition_word_2, predition_word_3]
}
else if (tocken.length == 5) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1), predition_word_2.concat(predition_word_3_2), predition_word_3]

}
else if (tocken.length == 6) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1), predition_word_2.concat(predition_word_3_2), predition_word_3.concat(predition_word_3_3)]

}
else if (tocken.length == 7) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4), predition_word_2.concat(predition_word_3_2), predition_word_3.concat(predition_word_3_3)]

}
else if (tocken.length == 8) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4), predition_word_2.concat(predition_word_3_2, predition_word_3_5), predition_word_3.concat(predition_word_3_3)]

}
else if (tocken.length == 9) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4), predition_word_2.concat(predition_word_3_2, predition_word_3_5), predition_word_3.concat(predition_word_3_3, predition_word_3_6)]

}
else if (tocken.length == 10) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4, predition_word_3_7), predition_word_2.concat(predition_word_3_2, predition_word_3_5), predition_word_3.concat(predition_word_3_3, predition_word_3_6)]

}
else if (tocken.length == 11) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4, predition_word_3_7), predition_word_2.concat(predition_word_3_2, predition_word_3_5, predition_word_3_8), predition_word_3.concat(predition_word_3_3, predition_word_3_6)]

}
else if (tocken.length == 12) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4, predition_word_3_7), predition_word_2.concat(predition_word_3_2, predition_word_3_5, predition_word_3_8), predition_word_3.concat(predition_word_3_3, predition_word_3_6, predition_word_3_9)]

}
else if (tocken.length == 13) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4, predition_word_3_7, predition_word_3_10), predition_word_2.concat(predition_word_3_2, predition_word_3_5, predition_word_3_8), predition_word_3.concat(predition_word_3_3, predition_word_3_6, predition_word_3_9)]

}
else if (tocken.length == 14) {
  var layr_1 = [predition_word_1.concat(predition_word_3_1, predition_word_3_4, predition_word_3_7, predition_word_3_10), predition_word_2.concat(predition_word_3_2, predition_word_3_5, predition_word_3_8, predition_word_3_11), predition_word_3.concat(predition_word_3_3, predition_word_3_6, predition_word_3_9)]

}
else {
  var layr_1 = [predition_word_1, predition_word_2, predition_word_3]
}
/*else{
var layr_1 = [predition_word_1,predition_word_2,predition_word_3]
}*/
   console.log("hay")
var layr_2_predition_word_1 = [];
var layr_2_predition_word_2 = [];
var layr_2_predition_word_3 = [];

 function arry_dif_1(){
   for(let a_1=0; a_1<layr_1.length; a_1++){
     for(let a_2=0; a_2<layr_1[a_1].length; a_2++){
       if(a_2<30){
         layr_2_predition_word_1.push(layr_1[a_1][a_2])
       }
       else if (a_2 >= 30 && a_2 < 90) {
         layr_2_predition_word_2.push(layr_1[a_1][a_2])
       }     
       else{
     layr_2_predition_word_3.push(layr_1[a_1][a_2])
       }
     }
   }
 }

 arry_dif_1();
   console.log(layr_2_predition_word_2);

 //function arry_dif
 
 //layr2 ka nodes-1
  var predition_word_4 = [];
 var predition_num_4 = [];
 for(let word_1_1 in layr_2_predition_word_1 ){
   function node_4() {
     for (let word in data) {
       var word_vec_1 = data[layr_2_predition_word_1[word_1_1]];
       var word_vec_2 = data[word];
    
       var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
         return v_1 + v_2 * word_vec_2[index];
       }, 0)

       var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))
       var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
         return v_1 + v_2 ** 2;
       }, 0))

       var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
       //console.log(cal_cosine_simlerty)
       if (cal_cosine_simlerty > sim_lable_2) {
         predition_num_4.push(cal_cosine_simlerty)
         predition_word_4.push(word);
       }
     }
   }
   node_4();
 }
    console.log(predition_word_4);
//
//layr ka node-2
  var predition_word_5 = [];
  var predition_num_5 = [];
  for (let word_1_2 in layr_2_predition_word_2) {
    function node_5() {
      for (let word in data) {
        var word_vec_1 = data[layr_2_predition_word_2[word_1_2]];
        var word_vec_2 = data[word];
   
        var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
          return v_1 + v_2 * word_vec_2[index];
        }, 0)

        var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))
        var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))

        var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
        //console.log(cal_cosine_simlerty)
        if (cal_cosine_simlerty > sim_lable_2) {
          predition_num_5.push(cal_cosine_simlerty)
          predition_word_5.push(word);
        }
      }
    }
    node_5();
  }
  console.log(predition_word_5);
//
//layr2 ka node-3
  var predition_word_6 = [];
  var predition_num_6 = [];

  for (let word_1_3 in layr_2_predition_word_3) {
    function node_6() {
      for (let word in data) {
        var word_vec_1 = data[layr_2_predition_word_1[word_1_3]];
        var word_vec_2 = data[word];

        var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
          return v_1 + v_2 * word_vec_2[index];
        }, 0)

        var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))
        var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))

        var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
        //console.log(cal_cosine_simlerty)
        if (cal_cosine_simlerty > sim_lable_2) {
          predition_num_6.push(cal_cosine_simlerty)
          predition_word_6.push(word);
        }
      }
    }
    node_6();
  }
  console.log(predition_word_6);

  //
 //word ko dusra lyer arry ka roop mai dena

   var layr_2 = [predition_word_4,predition_word_5,predition_word_6]
var layr_2_predition_word_4 = [];
var layr_2_predition_word_5 = [];
var layr_2_predition_word_6 = [];
 function arry_dif_2(){
   for(let a_1=0; a_1<layr_2.length; a_1++){
     for(let a_2=0; a_2<layr_2[a_1].length; a_2++){
       if(a_2< 20){
         layr_2_predition_word_4.push(layr_2[a_1][a_2])
       }
       else if (a_2 >= 20 && a_2 < 60 ) {
         layr_2_predition_word_5.push(layr_2[a_1][a_2])
       }     
       else{
     layr_2_predition_word_6.push(layr_2[a_1][a_2])
       }
     }
   }
 }

 arry_dif_2();
   console.log(layr_2_predition_word_5);


   //function arry_dif

   //layr3 ka nodes-1
  var predition_word_7 = [];
  var predition_num_7 = [];

  for (let word_1_4 in layr_2_predition_word_4) {
    function node_7() {
      for (let word in data) {
        var word_vec_1 = data[layr_2_predition_word_4[word_1_4]];
        var word_vec_2 = data[word];

        var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
          return v_1 + v_2 * word_vec_2[index];
        }, 0)

        var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))
        var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))

        var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
        //console.log(cal_cosine_simlerty)
        if (cal_cosine_simlerty > sim_lable_3) {
          predition_num_7.push(cal_cosine_simlerty)
          predition_word_7.push(word);
        }
      }
    }
    node_7();
  }
  console.log(predition_word_7);
   //
//layr3 node-2
  var predition_word_8 = [];
  var predition_num_8 = [];
  for (let word_1_5 in layr_2_predition_word_5) {
    function node_8() {
      for (let word in data) {
        var word_vec_1 = data[layr_2_predition_word_5[word_1_5]];
        var word_vec_2 = data[word];

        var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
          return v_1 + v_2 * word_vec_2[index];
        }, 0)

        var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))
        var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
          return v_1 + v_2 ** 2;
        }, 0))

        var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
        //console.log(cal_cosine_simlerty)
        if (cal_cosine_simlerty > sim_lable_3) {
          predition_num_8.push(cal_cosine_simlerty)
          predition_word_8.push(word);
        }
      }
    }
    node_8()
  }
  console.log(predition_word_8);
  //
  //layr3 node-3
    var predition_word_9 = [];
    var predition_num_9 = [];
    for (let word_1_6 in layr_2_predition_word_6) {
      function node_9() {
        for (let word in data) {
          var word_vec_1 = data[layr_2_predition_word_6[word_1_6]];
          var word_vec_2 = data[word];
  //
 if(word_vec_1 == undefined){
 var div_create_0 = document.createElement("div");
div_create_0.style.height = '20px';
var div_create_1 = document.createElement("div");
div_create_1.style.height = `${length_1}px`;
div_create_1.innerHTML = "😁" + text;
div_create_1.style.textAlign = 'justify';
var div_create_2 = document.createElement("div");
div_create_2.style.width = '100%';
var main_1_1 = 0;
var massage = "Add your JSON file to enable interactive questioning based on your data.";
var massage_1 = massage.split(' ');
function main_21() {
  if (main_1_1 < massage_1.length) {
    div_create_2.innerHTML += massage_1[main_1_1];

    div_create_2.innerHTML += ' ';
    main_1_1++;
  }
  else {

  }
  setTimeout(main_21, 100)
}
main_21();
document.getElementById("word_show_1").appendChild(div_create_0);

document.getElementById("word_show_1").appendChild(div_create_1);

document.getElementById("word_show_1").appendChild(div_create_2);


}
  //
          var dot_product = word_vec_1.reduce((v_1, v_2, index) => {
            return v_1 + v_2 * word_vec_2[index];
          }, 0)
  
          var word_vec_1_mod = Math.sqrt(word_vec_1.reduce((v_1, v_2) => {
            return v_1 + v_2 ** 2;
          }, 0))
          var word_vec_2_mod = Math.sqrt(word_vec_2.reduce((v_1, v_2) => {
            return v_1 + v_2 ** 2;
          }, 0))
  
          var cal_cosine_simlerty = dot_product / (word_vec_1_mod * word_vec_2_mod)
          //console.log(cal_cosine_simlerty)
          if (cal_cosine_simlerty > sim_lable_3) {
            predition_num_9.push(cal_cosine_simlerty)
            predition_word_9.push(word);
          }
        }
      }
      node_9()
    }
    console.log(predition_word_9);
 
 //correctionevery sent
//
//document.write(predition_word_8.join(' '))

//append on display
//gap mantan karna ka liyaa

//
     var div_create_0 = document.createElement("div");
     div_create_0.style.height = '20px';
     var div_create_1 = document.createElement("div");
     div_create_1.style.height = `${length_1}px`;
     div_create_1.innerHTML = "😁"+text;
     div_create_1.style.textAlign = 'justify';

     var div_create_2 = document.createElement("div");
     div_create_2.style.width = '100%';

     var main_1_1 = 0;
     function main_21() {
       if(main_1_1<predition_word_8.length){
     div_create_2.innerHTML += predition_word_8[main_1_1];
     
     div_create_2.innerHTML += ' ';
      main_1_1++;
       }
       else{
         
       }
       setTimeout(main_21,100)
     }
     main_21();
     document.getElementById("word_show_1").appendChild(div_create_0);
     
     document.getElementById("word_show_1").appendChild(div_create_1);
     

     document.getElementById("word_show_1").appendChild(div_create_2);

     
//

function speach_1() {
  var recognigation = new SpeechSynthesisUtterance();
  recognigation.text = predition_word_8.join(' ');
  recognigation.lang = 'hi-IN';
  window.speechSynthesis.speak(recognigation);
}
speach_1();
  })
//input khali karna la liya
     setTimeout(function() {
       document.getElementById("text_input").value = "";

     }, 1000)
     //

}
