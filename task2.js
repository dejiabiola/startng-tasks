const data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];

const interestCalculator = function(arr) {
  let rate;
  let interestData = [];

  // Loop through each object in the array
  arr.forEach((entry, index) => {
    // Using conditional statements, determine the rate for each object
    if (entry.principal >= 2500 && entry.time > 1 && entry.time < 3) {
      rate = 3;
    } else if (entry.principal >= 2500 && entry.time >= 3) {
      rate = 4;
    } else if (entry.principal < 2500 || entry.time <= 1) {
      rate = 2;
    } else {
      rate = 1
    }

    // Calculate the interest
    let interest = (entry.principal * entry.time * rate)/100;

    // In the new array, create an object for each index and input necessary information
    interestData[index] = {};
    interestData[index].principal = entry.principal;
    interestData[index].rate = rate;
    interestData[index].time = entry.time;
    interestData[index].interest = interest;
  })
  console.log(interestData);
  return interestData;
}

// Call function passing it the data array
interestCalculator(data);