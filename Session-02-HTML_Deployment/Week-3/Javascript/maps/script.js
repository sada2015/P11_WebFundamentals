function calcWordFrequencies() {
  var input1 = prompt("Enter Sentence");
  var mystrArray1 = input1
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .reduce(function (map, value) {
      map[value] = (map[value] || 0) + 1;
      return map;
    }, Object.create(null));
  console.log("Result Map", mystrArray1);
}
calcWordFrequencies();
