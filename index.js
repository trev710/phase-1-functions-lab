//use absolute value to solve this problem, the distance from hq is the 42 - distance and has a positive solution 

function distanceFromHqInBlocks(num){
    return Math.abs(42-num);
}

//takes in the same parameter as the first function and outputs it the same but
//it converts it to feet by multiplying it by 264 to make that conversion 

function distanceFromHqInFeet(num){
    return Math.abs((42-num)*264);
}

//funtion that checks the absolute value of two parameters and then the difference between them
//also converted into feet. (*264)

function distanceTravelledInFeet(num1, num2){
    return Math.abs((num1-num2)*264);
}

//chcek the difference between the two parameters and convert to feet
//the fare is free for the first 400 feet, between 400 and 2000 it's .02 cents a foot.
//subtract 400 from the total to only charge for the rate in that range.

//the fare is a flat fee for distances between 2000 and 2500 of $25 and
//the fare doesn't travel beyond 2500 so return a string


function calculatesFarePrice(start, destination){
    let totalFeet = Math.abs(destination - start) * 264;
    if(Math.abs(destination - start) == 1 ){
        return 0;
    }
    else if( totalFeet > 400 && totalFeet < 2000){
        return (totalFeet - 400) * 0.02;
    }
    else if(totalFeet > 2000 && totalFeet < 2500){
        return 25;
    }
    else if (totalFeet > 2500){
        return 'cannot travel that far';
    }
}