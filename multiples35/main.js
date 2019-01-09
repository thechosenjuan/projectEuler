(function sumOfMultiples() {
  let sumOfMultiples = 0;
  let controlVariable = 1;
  while (controlVariable < 1000) {
    if (controlVariable % 3 === 0 || controlVariable % 5 === 0) {
      sumOfMultiples += controlVariable;
    }
    controlVariable++;
  }
  return sumOfMultiples;
})()
