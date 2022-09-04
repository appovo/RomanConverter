import toArabic from './toArabic'

describe('toArabic()', () => {
  const romanBasic = [
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]

  const romanFirstTenNonBasic = [
    ['II', 2],
    ['III', 3],
    ['IV', 4],
    ['VI', 6],
    ['VII', 7],
    ['VIII', 8],
    ['IX', 9],
  ]

  const romanRandom = [
    ['XLIV', 44],
    ['CXXIII', 123],
    ['CDLXXXIX', 489],
    ['MDLXVII', 1567],
    ['MDCCCLXXXVIII', 1888],
    ['MMMDI', 3501],
    ['MMMCMXCIX', 3999],
  ]

  const romanWrongFormat = ['IIII', 'VVVV',  'IL', 'IC', 'IM', 'ID', 'IID', 'MIDD']

  it.each(romanBasic)('converts %s to %d', (roman, expectedArabic) => {
    expect(toArabic(roman)).toEqual(expectedArabic)
  })

  it.each(romanFirstTenNonBasic)(
    'converts %s to %d for arabic numbers between 1 and 10',
    (roman, expectedArabic) => {
      expect(toArabic(roman)).toEqual(expectedArabic)
    },
  )

  it.each(romanRandom)(
    'converts %s to %d for arabic numbers between 11 and 3999',
    (roman, expectedArabic) => {
      expect(toArabic(roman)).toEqual(expectedArabic)
    },
  )

  it.each(romanWrongFormat)(
    'returns an error in case of %s given',
    (roman) => {
      expect(toArabic(roman)).toEqual('wrong_combination')
    },
  )
})
