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

// g
const my_data = (my_name, my_age) => {
  const name = (my_name) => {
    return my_name;
  }

  const age = (my_age) => {
    return my_age;
  }

  return name(my_name) + age(my_age);
}

my_data('Edgar ', 36);

// h
const my_data = (my_name) => {
  const name = (my_name) => {
    return my_name;
  }

  const randomized = () => {
    return Math.trunc(Math.random() * 100);
  }

  const age = (my_age = randomized()) => {
    return my_age;
  }

  return name(my_name) + age();
}

my_data('Edgar ');

// i + j
const my_data = (my_name) => {
  const name = (my_name) => {
    return `${my_name}...aka IRONMAN`;
  }

  const randomized = () => {
    return Math.trunc(Math.random() * 100);
  }

  const age = (my_age = randomized()) => {
    return `${my_age}...Sure you're Tony Stark?`;
  }

  return `The first function returns: ${name(my_name)}, The second function returns: ${age()}`;
}

my_data('Edgar');

// k
const my_data = (my_name) => {
  const name = (my_name) => {
    return my_name === 'Edgar' ? `The first function returns: ${my_name}...aka IRONMAN` : `The first function returns: ${my_name}... You're not IRONMAN!`;
  }

  const randomized = () => {
    return Math.trunc(Math.random() * 100);
  }

  const age = (my_age = randomized()) => {
    return `${my_age}...Sure you're Tony Stark?`;
  }

  if (my_name === 'Edgar') {
    return `${name(my_name)}, The second function returns: ${age()}`
  } else {
    return name(my_name);
  }
}

my_data('Gumersindo');
