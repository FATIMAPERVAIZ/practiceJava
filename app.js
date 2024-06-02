
 alert("tell answer of given questions in yes/no");
let score =0,totalScore=5;
let ans1 = 'yes' ,ans2 = 'yes',ans3='yes',ans4='yes',ans5='no';

let q1= "Javascript is easy?"
let q2 = "tell output is true or not \n var sum = 2+2\n sum = 4? "
let q3 = "javascript runs from right to left"
var q4  ="by default javasript consider variable is of string type if we place quotes"
var q5 = "let i=1\n i++;\n i is equal to 1"
const value1 = prompt(q1);
const value2 =  prompt(q2)
const value3= prompt(q3)
const value4 =  prompt(q4)
const value5 = prompt(q5)
if(value1 ==ans1)
score++;
if (value2==ans2)
score++;
if (value3==ans3)
score++;
if (value4==ans4)
score++;
if (value5==ans5)
score++;

alert("Your Percentage is "+(score/totalScore*100)+"%")
