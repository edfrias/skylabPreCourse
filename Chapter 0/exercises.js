// a
console.log('Edgar');

// b
console.log('36');

// c
const array_me = ['Edgar', 'Frías', '36'];
console.log(array_me);

// d
const object_me = { name: 'Edgar', age: '36' };
console.log(object_me);

// e
array_me.forEach((item) => console.log(item));

// f
const a = 25;
const b = 12;

a < b ? console.log(a) : console.log(b);

  // f1
  if (a < b) {
    console.log(a);
  } else if (a === b) {
    console.log('they are equal');
  } else {
    console.log(b);
  }

// g
const severalNumbers = [1, 4, 6, 8, 3];

for (let i = 0; i < severalNumbers.length; i++) {
  console.log('i', i);
  if (i === Math.floor(severalNumbers.length/2)) {
    console.log("We are in the middle of loop");
  }
}

  // g1
  const name = 'Joselito';
  const age = 56;

  if (name !== 'Edgar' && age !== 36) {
    console.error('This is not you');
  } else {
    console.log("Hi!! Glad to see u again!");
  }

// h
const name = 'Joselito';
const my_id = 53080272;

if (name === 'Edgar' || my_id === 53080272) {
  console.log("Permission granted");
} else {
  console.error('Try again');
}

// i
const raw_data = [ 0, 'veintitres', 'Edgar', 36, 53080272, 'Frías', 'rojo', false, 9823];

for (let j = 0; j < raw_data.length; j++) {
  if (raw_data[j] === 'Edgar' || raw_data[j] === 36 || raw_data[j] === 53080272 || raw_data[j] === 'Frías') {
    console.log('We find your data! ' + raw_data[j]);
  }
}

// j
const some_words = ['potato', 'lemon', 'orange'];

for (let x = 0; x < some_words.length; x++) {
  for (let y = 0; y < some_words[x].length; y++) {
    console.log(some_words[x][y]);
  }
  y = 0;
}
