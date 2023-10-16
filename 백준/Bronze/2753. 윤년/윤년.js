'use strict';
//윤년구하기
//연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
//마찬가지로 값을 하나만 받아서 split필요없음! 구분이 필요x
const year = input;

if((year % 4 === 0)&&((year % 100 !== 0)||(year % 400 === 0))){
    console.log(1);
}else{
    console.log(0);
}