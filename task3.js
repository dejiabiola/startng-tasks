function convertNumber(num) {
  const resultArray = [];


  for (let i = 1; i <= num; i++) {
    let result = ""
    if (Number.isInteger(i/2)) {
      result = "yu";
    } 
    if (Number.isInteger(i/3)) {
      result = "gi";
    } 
    if (Number.isInteger(i/5)) {
      result = "oh";
    } 
    if (Number.isInteger(i/2) && Number.isInteger(i/3)) {
      result = "yu-gi"
    } 
    if (Number.isInteger(i/2) && Number.isInteger(i/5)) {
      result = "yu-oh"
    } 
    if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
      result = "gi-oh"
    } 
    if (Number.isInteger(i/3) && Number.isInteger(i/3) && Number.isInteger(i/5)) {
      result = "yu-gi-oh"
    } 
    if (result.length === 0) {
      result = i;
    }
    resultArray.push(result);
  }
  return resultArray;
}


convertNumber(100);
convertNumber(67);