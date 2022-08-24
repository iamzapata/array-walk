import {
  cycleRight,
  cycleRightModulus,
  cycleRightStartPoint,
  cycle
} from "./index";

describe("cycleRight", () => {
  it("get next intem in the array, start at index 0", () => {
    const arrayCycle = cycleRight(["a", "b", "c", "d"]);

    ["b", "c", "d", "a", "b", "c", "d", "a"].forEach((letter) => {
      expect(arrayCycle.next()).toEqual(letter);
    });
  });
});

describe("cycleRightModulus", () => {
  it("get next item in the array, starting at index 0", () => {
    const arrayCycle = cycleRightModulus(["a", "b", "c", "d"]);

    ["b", "c", "d", "a", "b", "c", "d", "a"].forEach((letter) => {
      expect(arrayCycle.next()).toEqual(letter);
    });
  });
});

describe("cycleRightStartPoint", () => {
  it("get next item in the array, starting at the specified index", () => {
    const arrayCycle = cycleRightStartPoint(["a", "b", "c", "d"], 2);

    ["d", "a", "b", "c", "d", "a", "b", "c"].forEach((letter) => {
      expect(arrayCycle.next()).toEqual(letter);
    });
  });
});

/* 
  Write a function that takes in two parameters, startIndex and array. 
  It should expose two methods, prev and next. When the methods are invoked, they should
  return the previous or next item on the array. The first time either method runs, the start
  item is the startIndex. So cycle(['a', 'b', 'c'], 1).next() returns 'a', 
  cycle(['a', 'b', 'c', 'd'], 2).next() returns 'b'
 */

describe("cycle", () => {
  it("walks an array forwards", () => {
    const arrayCycle = cycle(["a", "b", "c", "d"], 2);

    ["d", "a", "b", "c", "d", "a", "b"].forEach((letter) =>
      expect(arrayCycle.next()).toEqual(letter)
    );
  });

  it("cycles array backwards", () => {
    const arrayCycle = cycle(["a", "b", "c", "d"], 2);

    ["b", "a", "d", "c", "b", "a", "d", "c", "b"].forEach((letter) =>
      expect(arrayCycle.prev()).toEqual(letter)
    );
  });
});
