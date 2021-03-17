// Code your solution in this file!

function distanceFromHqInBlocks(pickup){
    let distance;
    if(pickup < 42){
        distance = 42 - pickup;
    } else {
        distance = pickup - 42
    }
    return distance;
}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(begin, dest){
    let dist;
    if(begin > dest){
        dist = (begin - dest) * 264;
    } else {
        dist = (dest - begin) * 264;
    }
    return dist;
}

function calculatesFarePrice(begin, dest){
    let dist = distanceTravelledInFeet(begin, dest);
    let price;
    if (dist < 400) {
        price = 0;
    } else if (dist > 400 && dist <= 2000){
        price = (dist - 400) * 0.02;
    } else if (dist > 2000 && dist < 2500){
        price = 25;
    } else {
        return 'cannot travel that far';
    }

    return price;
}