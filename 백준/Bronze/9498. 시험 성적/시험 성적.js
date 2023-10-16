'use strict';

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const testScore = Number(input);

if((testScore/10) >= 9){
    console.log("A");
}else if((testScore/10) >= 8){
    console.log("B");
}else if((testScore/10) >= 7){
    console.log("C");
}else if((testScore/10) >= 6){
    console.log("D");
}else{
    console.log("F");
}