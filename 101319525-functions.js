"use strict";
function _one() {
   let your_name = "Siyuan Tao";
   let number_of_course = "6";
   let program = "T147";
   let a = false;
   let do_not_have_part_time;
   if(a === false){
       do_not_have_part_time = "do not";
   }
   console.log("My name is " + your_name + ". I'm in the "+ program +  " program. I'm currently taking " + number_of_course + " courses. I " + do_not_have_part_time + " have a part time job.");
}

function _two(cents) {
   let q1 = Math.floor(cents/25);
   let q2 = Math.floor ((cents-(q1*25))/10);
   let q3 = Math.floor((cents-(q1*25+q2*10))/5);
   let q4 = Math.floor((cents-(q1*25+q2*10+q3*5)));
   console.log(cents + " cents in minimal change is: "+ q1 + " quarters, " + q2 + " dimes, "+ q3 + " nickels, and " + q4 + " pennies.");
}

function _three(miles, kilometers) {
   let d1 = 1*miles;
   let k = (1.6*d1);
   let d2 = 1*kilometers;
   let m = d2/1.6;
   console.log(miles + " miles = "+ k.toFixed(2) + " Kilometers, "+ kilometers + " kilometers = " + m.toFixed(2) + " miles.");
}

function _four(array){
   let i;
   let max = array[0];
   let min = array[0];
   for(i=0; i <= array.length; i++){
      if(array[i]>max){
         max=array[i];
      }else if(array[i]<min){
         min=array[i];
      }
   }
   console.log("The minimum value in the array is:" + min + " , the maximum value is: " + max + ".");
}

function _five(string, a_char) {
   let i;
   let counter = 0;
   let b = a_char.toLowerCase();
   for(i=0; i <= string.length; i++){
      if(string[i]===b){
         counter++;
      }
   }
  console.log("The word " + string + " has "+ counter +" occurrences of the character " + a_char + "." );
}

function _six(grade) {
   let lettergrade = '';
   let greetings = '';
   if(grade>=90&&grade<=100){
      lettergrade = "A+";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=85&&grade<=89){
      lettergrade = "A";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=80&&grade<=84){
      lettergrade = "A-";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=76&&grade<=79){
      lettergrade = "B+";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=73&&grade<=75){
      lettergrade = "B";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=70&&grade<=72){
      lettergrade = "B-";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=66&&grade<=69){
      lettergrade = "C+";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=63&&grade<=65){
      lettergrade = "C";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=60&&grade<=62){
      lettergrade = "C-";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=56&&grade<=59){
      lettergrade = "D+";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=53&&grade<=55){
      lettergrade = "D";
      greetings='Congratulations, you passed the course.';
   }else if(grade>=50&&grade<=52){
      lettergrade = "D-";
      greetings='Congratulations, you passed the course.';
   }else if(grade<=50){
      lettergrade = "F";
      greetings = "Unfortunately, you did not meet the minimum requirement to pass the course."
   }
   console.log( greetings + " Your final grade is: "+ grade + " = "+ "'"+lettergrade+"'");
}

function _seven(array) {
   let i;
   let b = [];
   for(i=array.length-1; i>=0; i-=1) {
      b.push(array[i]);
   }
   console.log("Original Order array = ["+ array + "] \n"+ "Reverse Order array = [" + b + "]");
}

function _eight() {
   let t1 = Date.parse("04/23/2021");
   let d1 = t1/(1000*60*60*24);
   let t2 = Date.now();
   let d2 = t2/(1000*60*60*24);
   let d3 = Math.floor(d1-d2);
   let today = new Date();
   let dd1 = String(today.getDate()).padStart(2,'0');
   let mm1 = String(today.getMonth() + 1).padStart(2,'0');
   let yyyy1 = today.getFullYear();
   let lastDay = new Date("04/23/2021");
   let dd2 = String(lastDay.getDate()).padStart(2,'0');
   let mm2 = String(lastDay.getMonth() + 1).padStart(2,'0');
   let yyyy2 = lastDay.getFullYear();
   console.log("Current date = " + mm1 + '/' + dd1 + '/' + yyyy1 + ", "+"last day of school = "+ mm2 + '/' + dd2 + '/' + yyyy2 + ". The days left until the end of school = "+ d3 + " days .");

}

function _nine(word) {
   let i;
   let counter1 = 0;
   let counter2 = 0;
   let counter3 = 0;
   let counter4 = 0;
   let counter5 = 0;
   let lcw = word.toLowerCase();
   for(i=0;i<lcw.length;i++){
      if(lcw[i]==="a"){
         counter1++;
      }else if(lcw[i]==="e"){
         counter2++;
      }else if(lcw[i]==="i"){
         counter3++;
      }else if(lcw[i]==="o"){
         counter4++;
      }else if(lcw[i]==="u"){
         counter5++;
      }
   }
   console.log("Vowel count: A = "+counter1+", E = "+counter2+", I = "+counter3+", O = "+counter4+", U = "+counter5);
}

function _ten(my_string) {
   let a = my_string.toLowerCase().split('');
   let b = a.sort();
   let c = b.join('');
   console.log("The string converted in alphabetical order is: " + c);
}
