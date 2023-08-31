import toRoman from "./toRoman";

describe("toRoman()", () => {
  const romanBasic = [
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
  ];

  const romanFirstTenNonBasic = [
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
  ];

  const romanRandom = [
    [44, "XLIV"],
    [123, "CXXIII"],
    [489, "CDLXXXIX"],
    [1567, "MDLXVII"],
    [1888, "MDCCCLXXXVIII"],
    [3501, "MMMDI"],
    [3999, "MMMCMXCIX"],
  ];

  it.each(romanBasic)(
    "converts %d to %s for all roman basic numbers",
    (arabic, expectedRoman) => {
      expect(toRoman(arabic)).toEqual(expectedRoman);
    }
  );

  it.each(romanFirstTenNonBasic)(
    "converts %d to %s for arabic numbers between 1 and 10",
    (arabic, expectedRoman) => {
      expect(toRoman(arabic)).toEqual(expectedRoman);
    }
  );

  it.each(romanRandom)(
    "converts %d to %s for arabic numbers between 11 and 3999",
    (arabic, expectedRoman) => {
      expect(toRoman(arabic)).toEqual(expectedRoman);
    }
  );

  it("does not convert 0 to any number", () => {
    expect(toRoman(0)).toEqual("");
  });

  it("does not convert any number > 3999", () => {
    expect(toRoman(4000)).toEqual("");
  });
});
