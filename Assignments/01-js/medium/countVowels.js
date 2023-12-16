/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

//checking function
function check(strc)
{ let array = ["a","e","i","o","u"];
let length = array.length;
let got = 0;
for(let i = 0 ; i < length ; i++)
{

if(strc == array[i])
{
  return true;
}

}

return false;
}




function countVowels(str) {
let count = 0;
let newstr = str.toLowerCase();
let stringlen = str.length;
let currlenth =0;
for(let i = 0 ; i < stringlen ; i++)
{ let char = newstr.charAt(i);
  if(check(char))
  {

    count++;
  }
  

}


return count;
}

module.exports = countVowels;
