//implement an alarm clock/timer that beeps after a specified amount of time has passed.
//user can specify an unlimited number of alarms using command line arguments
//to make a beep: process.stdout.write('\x07');

const args = process.argv.slice(2); //to have inputs start from arguments
// let tmp = 0;


if (args.length === 0) { //if there is no input, print "no input"
  console.log('no input');
}

// for (let j = 1; j <= 10; j++) { //attempted to print out number of seconds whilst timer went down
//   setTimeout(() => {
//     console.log(j);
//   }, tmp += 1000)
// }

for (let i = 0; i < args.length; i++) { //iterating through the args array
  let timer = (Number(args[i]) * 1000); //setting the timer to be the input * 1000ms
  // console.log(Number(args[i]));
  if (isNaN(Number(args[i]))) { //check if element is NaN, if NaN print not a number
    console.log('not a number');
  }

  if (Number(args[i] >= 0)) { //run if the element is greater than or equal to 0
    setTimeout(() => {
      process.stdout.write('\x07'); //BEEP
      console.log('BEEP');
    }, timer); //set delay to run whenever the input amount of time has been reached
  }

}