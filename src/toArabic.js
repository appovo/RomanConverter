function toArabic(roman) {
  const romanNums = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }
  let converted = 0
  if (roman in Object.keys(romanNums)) return romanNums[roman]

  /* Let's catch wrong combination */ 
  for (let i = 0; i < roman.length; i++) {
    let romanNumsCountRgx = new RegExp(`${roman[i]}{4}`, 'g')
    let lesserPriorToGreaterRgx = new RegExp(`I[LCDM]`, 'g')
    let romanNumsCount = roman.match(romanNumsCountRgx)
    let lesserPriorToGreater = roman.match(lesserPriorToGreaterRgx)
    if (romanNumsCount || lesserPriorToGreater) {
        return 'wrong_combination'
    }
   
    if (i < roman.length - 1) {
      if (romanNums[roman[i]] < romanNums[roman[i + 1]]) {
        converted += romanNums[roman[i + 1]] - romanNums[roman[i]]
        i++
      } else {
        converted += romanNums[roman[i]]
      }
    } else {
      converted += romanNums[roman[i]]
    }
  }

  return converted
}

export default toArabic
