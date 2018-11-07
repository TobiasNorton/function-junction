/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

const max = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return numberOne
  } else {
    return numberTwo
  }
}

// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

const maxOfThree = (numOne, numTwo, numThree) => {
  if (numOne > numTwo && numOne > numThree) {
    return numOne
  } else if (numTwo > numOne && numTwo > numThree) {
    return numTwo
  } else {
    return numThree
  }
}

// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (numberOne, numberTwo) => {
  return numberOne + numberTwo
}

// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

const sumOfArray = array => {
  let sum = 0
  array.forEach(character => {
    sum += character
  })
  return sum
}

// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

const isVowel = string => {
  if (
    string === 'a' ||
    string === 'e' ||
    string === 'i' ||
    string === 'o' ||
    string === 'u' ||
    string === 'y' ||
    string === 'A' ||
    string === 'E' ||
    string === 'I' ||
    string === 'O' ||
    string === 'U' ||
    string === 'Y'
  ) {
    return true
  } else {
    return false
  }
}

// ...

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

const rovarspraket = string => {
  let array = string.split('') // split the string into array ---> [s, t, r, i, n, g]
  let newArray = array.map(character => {
    if (!isVowel(character)) {
      return character + 'o' + character
    } else {
      return character
    }
  })
  return newArray.join('')
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

const reverse = string => {
  return string
    .split('')
    .reverse()
    .join('')
}

// ...

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

const findLongestWord = string => {
  let splitString = string.split(' ')
  // Go through each item and find the length of each
  let longestToShortest = splitString.sort((firstWord, secondWord) => {
    return secondWord.length - firstWord.length
  })
  return longestToShortest[0]
}
// ...

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
