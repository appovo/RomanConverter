function toRoman(arabic) {
  if (arabic === 0 || arabic >= 4000) return "";
  const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let converted = "";
  for (let i of Object.keys(romanNums)) {
    let q = Math.floor(arabic / romanNums[i]);
    arabic -= q * romanNums[i];
    converted += i.repeat(q);
  }
  return converted;
}

export default toRoman;
