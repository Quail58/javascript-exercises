const ftoc = function(far) {
    let newVar = (far - 32) * (5/9)
    return Math.round(newVar * 10) / 10
};

const ctof = function(cel) {
    let newVar = cel * (9/5) + 32
    return Math.round(newVar * 10) / 10
};

//npm test tempConversion.spec.js

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
