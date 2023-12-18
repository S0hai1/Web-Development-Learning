//Sync function is programme will wait untile that fucntion finish executing then excute the remaining code.
//asybc fubction is whene programme will assign the  a thred to execute the programme so that rest of the code does not have to wait for that function to finish executing thus saving the the time and increase the speed of the.


//many async functin provided by node js including file.read or fetch etc
//import filesystem module
const fs = require("fs");

//Syntex

fs.readFile('ReadThisFile.txt', 'utf-8', function(err, data){
    // Display the file content
    console.log(data);
});
//This will get printed first
console.log('readFile called');

//even if thred is complete the execution of async function and time for syn function tis grater then the execution time of async function then first sync function will finish executing then the controol will go back to async function then rest of the function.
//This is called callback it happns from callback queue after finishing execution if javascript thred is busy then asyn functions will join the callback queue and will get thred according to queue.


