function distanceFromHqInBlocks(start) {
    if (start > 42){
        return start - 42;
    } 
    else if (start < 42){
        return 42 - start;
    }
}

function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination) * 264;
    }
    else if (start < destination) {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    }
    else if (feet > 400 && feet < 2000){
        return (feet - 400) * 0.02;
    }
    else if (feet > 2000 && feet < 2500){
        return 25;
    }
    else if (feet > 2500) {
        return "cannot travel that far";
    }
}
