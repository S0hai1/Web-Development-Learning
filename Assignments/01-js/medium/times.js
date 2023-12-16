/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
let number = 0;
let ans = 0;
const startTime = new Date();
    while(number <= n)
    {
        ans+=number;
        number++;
    }
    console.log(ans);
    const endTime = new Date();

    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
    console.log("time to calculate sum of " + n + " is " + elapsedTimeInSeconds);
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);