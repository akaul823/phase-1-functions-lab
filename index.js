// Code your solution in this file!

function distanceFromHqInBlocks(pickup){
    let HQ = 42;
    const distance = Math.abs(HQ - pickup);
    return distance;
}

function distanceFromHqInFeet(distance){
    let blockFeet = 264;
    return distanceFromHqInBlocks(distance)*blockFeet;
}

function distanceTravelledInFeet(start, end){
    let block = 264;
    let feet =  Math.abs((start-end)*block)
    return feet;
}

function calculatesFarePrice(start, end){
    let whole = distanceTravelledInFeet(start, end);
    if(whole >0 && whole <= 400){
        return 0;
    }
    else if(whole > 400 && whole <=2000){
        return .02*(whole-400);
    }
    else if(whole > 200 && whole <2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}