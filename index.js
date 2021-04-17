// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier){
  return function(fare){
    return multiplier * fare;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arr=drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(arr);
}

