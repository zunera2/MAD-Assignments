/////question 3
let string1="23617";
let arr1=Array.from(string1);
console.log(arr1);
let arr2=arr1.filter(filter_func)
function filter_func(a,b)
{
    if(a,b%2==0)
    {
        return a+b;
    }
}
console.log(filter_func(2,6));




/////question 4
let arr3=[0,1,2,3,4,5,6,7,8,9,10]
let arr4=arr3.map(squareX);
function squareX(z)
{
    return z**2;
}
console.log(arr4);

let arr5=[0,1,2,3,4,5,6,7,8,9,10]
let arr6=arr5.map(cubeX);
function cubeX(z)
{
    return z**3;
}
console.log(arr6);




/////question 2
let string="23618";
let arrNum=Array.from(string);
console.log(arrNum);

let result=arrNum.reduce(reducer_func)
function reducer_func(prev,curr)
{
    return Number(prev)+Number(curr);
}
console.log(result);



/////question 8
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("comsats"));





/////question 6
let number = Math.ceil(Math.random() * 10);
console.log(number);
let guess_number = prompt('Guess the number between 1 and 10');
if (guess_number==number)
console.log("You Win");
else
console.log("Not Matched");





/////question 7
function first_last_1(nums)
{
  var end_pos = nums.length - 2;
  return nums[0] == 2 || nums[end_pos] == 2;
}


console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));



////question 1
let num= "23617";
let kth_number=4;
console.log("Kth last digit is: ");
let a=0;
for( let j=num.length; j>=0; j--){
    
    if (a==4){
        console.log(num[j]);
        break;
    }
    else{
        a=a+1;
        continue;

    }
}