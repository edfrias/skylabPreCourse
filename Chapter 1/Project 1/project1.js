// Project 1 - Calculator
const calculator = (...newArgs) => {
  console.log('the arguments passed', newArgs);
  console.log('the long of newArgs', newArgs.length);
  for (let i = 0; i < newArgs.length; i++) {
    console.log('entering the for');
    if (typeof newArgs[i] !== 'number' || newArgs[i] === null || newArgs[i] === undefined) {
      console.log('Sorry you entered an invalid input');
    } else if (newArgs.length === 1) {
      const oneParamResult = Math.sqrt(newArgs[i]);
      console.log(`As you only entered one input I can only give the square root of ${newArgs[i]}, that is: ${oneParamResult}`);
    } else {
      console.log('params ->', newArgs);
    }
  }
}