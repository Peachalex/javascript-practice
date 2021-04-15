"use strict";
function uniqueArray(array){
    let watched = {};
    let result = [];
    let j = 0;
    for(let i = 0; i < array.length; i++){
        let value = array[i];
        if(watched[value] !== 1){
            watched[value] = 1;
            result[j++] = value;
        }
    }
    return result
}

function markindicator(array){
   let sum = 0;
   let i;
   for(i = 0; i < array.length; i++){
      sum += parseInt(array[i]);
   }
   let avg = Math.round(sum/array.length);
   let result;
   let min = array[0];
   for(i = 0; i < array.length; i++){
       if(array[i] < min){
           min = array[i];
       }
   }
   let max = array[0];
   for(i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
   for(i = 0; i < array.length; i++){
       if(min >= 50){
           result = [-1,avg];
       }
       else if(max < 50){
           result = [avg,-1]
       }
       else if(max >= 50){
           result = [min,avg]
       }
   }
   return result
}

function datechecker(string){
    const pattern = new RegExp("((Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\\s+\\d{1,2},\\s+)")
    return  pattern.test(string);


}

function dayscalculator(str_date1,str_date2){
    let d1 = new Date(str_date1);
    let d2 = new Date(str_date2);
    let substraction = d2 - d1;
    return Math.floor(substraction/(1000*3600*24))
}

function swap(string, char1, char2) {
    let chars = [...string];
    let len = chars.length;
    function myJoin(array, seg = ''){
        let result = "";
        for(let i = 0; i < array.length-1; i++){
            result += array[i];
            result += seg;
        }
        result += array[array.length-1]
        return result;
    }
    for(let i = 0; i <= len; i++){
        if(chars[i] === char1){
            chars[i] = char2;
        } else if(chars[i] === char2){
            chars[i] = char1;
        }
    }
    return myJoin(chars,'')
}

function move(string){
    let str = string;
    let len = string.length;
    let lower = "";
    let upper = "";
    for(let i = 0; i < len; i++){
        if(str[i] >= "A" && str[i] <= "Z"){
            upper += str[i];
        }else {
            lower += str[i];
        }
    }
    return upper + lower;
}

function zeroremover(string){
    return Number(string);

}

function sort(array,str) {
    let len = array.length;
    let temp;
    if(str === "Asc"){
        for(let i = 0; i < len; i++){
            for(let  j = 0; j < len; j++){
                if(array[j] > array[j+1]){
                    temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
    }else if(str === "Des"){
        for(let i = 0; i < len - 1; i++){
            if(array[i] < array[i+1]){
                temp = array[i];
                array[i] = array[i+1]
                array[i+1] = temp
            }
        }
    }else if(str === "None"){
    }
    return array
}


function repeat(str){
    for(let i = 0; i < str.length; i++){
        let j = i+1;
        if(str[i] === str[j]){
            return str[i]
        }
    }
   return -1
}

function capitalize(str) {
    function cap(n){
        return n[0] === "'" ? n : String.fromCharCode(n.charCodeAt(0)^32);
    }
    return str.replaceAll(/\b[a-z]|['_][a-z]|\B[A-Z]/g,cap);
}
document.getElementById('demo').innerHTML += swap('apple','a', 'e')











