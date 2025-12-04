'use strict';

const b1 = document.querySelector(".btn1")


b1.addEventListener('click',function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className; 

   if (className == "light-theme"){
    this.textContent = "Dark";
   }
   else {
    this.textContent = "Light";
   }

  console.log("ClassName changed to:" + className);
  
 });