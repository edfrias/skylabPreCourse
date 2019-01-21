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

for (let i = 0; i === severalNumbers.length; i++) {
  if (i === Math.floor(severalNumbers.length/2)) {
    console.log("We are in the middle of loop");
  }
}