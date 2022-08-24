export function cycleRight(array) {
  let currentIndex = 0;

  array.next = function cycle() {
    currentIndex = currentIndex + 1;

    if (currentIndex === array.length) {
      currentIndex = 0;
    }

    const currentItem = array[currentIndex];

    return currentItem;
  };

  return array;
}

export function cycleRightModulus(array) {
  let count = 0;

  array.next = function cycle() {
    return array[++count % array.length];
  };

  return array;
}

export function cycleRightStartPoint(array, start) {
  if (!array[start]) throw Error(`Index ${start} is out of bounds`);

  array.next = function cycle() {
    return array[++start % array.length];
  };

  return array;
}

function backwardSequence(N) {
  for (let i = 0; i < 20; i++) {
    const aN = N - (i % N) - 1;
    console.log(i);
    console.log(`${i} % ${N}:`, i % N);
    console.log("aN", aN);
  }
}

// Ideation https://bit.ly/3dVKWmw
export function cycle(array, startIndex) {
  if (!array[startIndex]) throw Error(`Index ${startIndex} is out of bounds`);

  array.next = function cycleRight() {
    startIndex = startIndex + 1;
    const nextIndex = startIndex % array.length;
    return array[nextIndex];
  };

  array.prev = function cycleLeft() {
    const prevIndex = array.length - (startIndex % array.length) - 1;
    startIndex = startIndex + 1;

    return array[prevIndex];
  };

  return array;
}
