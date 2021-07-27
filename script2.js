let mass = [2, 19, 3, 8, 8, 8, 56, 17];
let given = [];
let rank = [];
let k = 0;
let reserve = 0;

//Sorting
for (let i = 0; i < mass.length; i++) {
  
  given[i] = mass[i];
    
};

while (k + 1 < mass.length) {
  
  for (let i = k + 1; i < mass.length; i++) {
  
  if (mass[i] < mass[k]) {
    reserve = mass[k];
    mass[k] = mass[i];
    mass[i] = reserve;
  }
}
k++;
}
//endSorting

console.log(mass);

//countEquals

let count = 0;
let sign = 0;
for (let i = 0; i < mass.length; i++) {
  
  if (mass[i] == mass[i + 1]) {
    count++;
    sign = i + 1;
  }
   
}
console.log(count);
console.log(sign);

//endCountEquals: count + 1

//rank

for (let i = 0; i < mass.length; i++) {
  rank[i] = i + 1; 
}

console.log(rank)

let sum = 0;
let number = count;
while (count >= 0) {
   sum += rank[sign - count];
   count--;
}
sum = sum / (number + 1);

while (number >= 0) {
  rank[sign - number] = sum;
  number--;
}
console.log(rank)

//endRank

//objectWork
let final = [];
let object = {
 2: 1,
 3: 2,
 8: 4,
 17: 6,
 19: 7,
 56: 8,
}

for (let i = 0; i < given.length; i++) {
  final.push(object[given[i]]);
}
console.log(final);
final;
