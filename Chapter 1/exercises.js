// a
const salute1 = (my_name) => {
  console.log(`hello ${my_name}`);
}

salute1('Edgar');

// b
const salute2 = (my_name) => {
 return `hello ${my_name}`;
}

salute2('Edgar');

// c + d
const salute3 = (my_name, my_age) => {
  return `hello ${my_name}, you're ${my_age} years old`;
}

salute3('Edgar', 36);

// e + f
const name = (my_name) => {
  return my_name;
}

const age = (my_age) => {
  return my_age;
}

console.log(name('Edgar ') + age(36));
