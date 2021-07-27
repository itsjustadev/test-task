//solution of (marks are +- equal)
//we have a mass of marks
let mass = [5,5,5,5,5,5,5];
let k = 0;

for (let i = 0; i < mass.length; i++) {
    if (Math.abs(mass[i - 1] - mass[i]) < 2) {
    k++;
    }
}
if (k >= 3) {
    console.log('warning');
}

//solution of (strange time of interview)
//we have mass of time
let newTime = 1;
let mass = [12,2,44,12,56,7];
let counter = 0;

for (let i = 0; i < mass.length; i++) {
if (newTime < mass[i]) {
    counter++;
}
}
if (counter == mass.length || counter > mass.length - 2) {
  console.log('warning'); 
}
