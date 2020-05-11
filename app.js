function toFixed(value, precision) {
  var seperator = ".";
  var stringValue = value.toString();
  //Splits the value into two parts, with the decimal used as a seperator
  var stringArray = stringValue.split(".");
  var startString = stringArray[0];
  var midString = stringArray[1].slice(0, precision);
  var endString = stringArray[1].slice(precision);
  //Combines the split portions of the initial value into a new string with the decimal placement adjusted
  //and turns it back into a number
  var toRound = Number(
    String.prototype.concat(startString, midString, seperator, endString)
  );
  //Rounds the number and turns it back into a string
  var rounded = Math.round(toRound).toString();
  var splitIndex = rounded.length - precision;
  var newEnd;
  //Determines the placement of the decimal and configures the last object to be concatinated accordingly
  if (rounded.length > precision) {
    newEnd = rounded.slice(splitIndex);
  } else {
    newEnd = rounded;
  }
  //Returns new concatinated version with the decimal placed back to its original location
  return String.prototype.concat(startString, seperator, newEnd);
}

tests({
  "It should round up for case#1:": function () {
    var result = toFixed(0.615, 2);
    seq(result, "0.62");
  },
  "It should round up for case#2:": function () {
    var result = toFixed(10.235, 2);
    seq(result, "10.24");
  },
  "It should round up for case#3:": function () {
    var result = toFixed(1.005, 2);
    seq(result, "1.01");
  },
  "It should round up for different decimal places (presision):": function () {
    var result = toFixed(1.0005, 3);
    seq(result, "1.001");
  },
});
